const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const source = fs.readFileSync(path.join(__dirname, "..", "learner-account.js"), "utf8");

async function setup(configured) {
  const elements = {};
  const timers = new Map();
  const storage = new Map();
  const writes = [];
  const deletes = [];
  const notifications = [];
  let nextTimer = 1;
  let authListener;
  let shouldFailWrite = false;
  const user = { uid: "user-1", displayName: "Test Learner", email: "test@example.invalid" };
  const auth = { currentUser: null };
  const snapshot = { completed: ["0-0"], assessments: { "0-0": { attempts: 1, bestScore: 2, passed: true } }, seconds: 42 };
  function element(id) {
    if (!elements[id]) {
      elements[id] = {
        id, listeners: {}, checked: false, hidden: false, disabled: false, textContent: "",
        addEventListener(name, callback) { this.listeners[name] = callback; },
        setAttribute(name, value) { this[name] = value; },
        showModal() { this.open = true; },
        close() { this.open = false; },
        click() { return this.listeners.click?.({ target: this }); }
      };
    }
    return elements[id];
  }
  const authModule = {
    getAuth: () => auth,
    GoogleAuthProvider: class {},
    onAuthStateChanged: (_, callback) => { authListener = callback; callback(null); },
    signInWithPopup: async () => { auth.currentUser = user; authListener(user); return { user }; },
    signOut: async () => { auth.currentUser = null; authListener(null); }
  };
  const firestoreModule = {
    getFirestore: () => ({}),
    doc: (_, collection, uid) => ({ collection, uid }),
    serverTimestamp: () => "server-time",
    setDoc: async (ref, data) => {
      if (shouldFailWrite) throw new Error("offline");
      writes.push({ ref, data });
    },
    deleteDoc: async ref => { deletes.push(ref); }
  };
  const modules = {
    "firebase-app.js": { initializeApp: () => ({}) },
    "firebase-auth.js": authModule,
    "firebase-firestore.js": firestoreModule
  };
  const context = vm.createContext({
    document: { getElementById: element },
    location: { protocol: "https:" },
    localStorage: {
      getItem: key => storage.get(key) || null,
      setItem: (key, value) => storage.set(key, value),
      removeItem: key => storage.delete(key)
    },
    console: { error() {} },
    state: { active: null },
    getActivitySnapshot: () => snapshot,
    showToast: message => notifications.push(message),
    setTimeout: fn => { const id = nextTimer++; timers.set(id, fn); return id; },
    clearTimeout: id => timers.delete(id),
    setInterval() {},
    confirm: () => true,
    NEXUS_FIREBASE_CONFIG: configured ? { apiKey: "test", authDomain: "test", projectId: "test", appId: "test" } : null,
    listeners: {},
    addEventListener(name, callback) { this.listeners[name] = callback; }
  });
  context.window = context;
  const script = new vm.Script(source, {
    importModuleDynamically: async specifier => {
      const key = Object.keys(modules).find(name => specifier.endsWith(name));
      assert.ok(key, `Unexpected import ${specifier}`);
      const exports = modules[key];
      const module = new vm.SyntheticModule(Object.keys(exports), function () {
        for (const [name, value] of Object.entries(exports)) this.setExport(name, value);
      }, { context });
      await module.link(() => {});
      await module.evaluate();
      return module;
    }
  });
  script.runInContext(context);
  for (let i = 0; i < 10; i++) await new Promise(resolve => setImmediate(resolve));
  async function flushTimers() {
    const pending = [...timers.values()];
    timers.clear();
    for (const timer of pending) await timer();
  }
  return { element, writes, deletes, notifications, storage, user, context, flushTimers, failWrites: value => { shouldFailWrite = value; } };
}

(async () => {
  const guest = await setup(false);
  assert.match(guest.element("account-status").textContent, /not configured/);
  guest.element("account-consent").checked = true;
  guest.element("account-consent").listeners.change();
  assert.equal(guest.element("google-sign-in").disabled, true);
  assert.equal(guest.writes.length, 0);

  const app = await setup(true);
  app.element("account-consent").checked = true;
  app.element("account-consent").listeners.change();
  assert.equal(app.element("google-sign-in").disabled, false);
  await app.element("google-sign-in").click();
  assert.equal(app.element("account-label").textContent, "Test Learner");
  await app.flushTimers();
  assert.equal(app.writes.length, 1);
  assert.equal(app.writes[0].ref.uid, app.user.uid);
  assert.equal(app.writes[0].data.email, app.user.email);
  assert.equal(app.writes[0].data.seconds, 42);
  assert.equal(app.writes[0].data.completed[0], "0-0");
  app.failWrites(true);
  app.context.listeners["nexus-progress-changed"]();
  await app.flushTimers();
  assert.match(app.element("account-status").textContent, /could not be reported/);
  assert.equal(app.notifications.length, 1);
  app.failWrites(false);
  await app.element("delete-report").click();
  assert.equal(app.deletes.length, 1);
  assert.equal(app.deletes[0].uid, app.user.uid);
  assert.equal(app.element("account-label").textContent, "Sign in");
  app.context.listeners["nexus-progress-changed"]();
  await app.flushTimers();
  assert.equal(app.writes.length, 1);
  assert.equal(app.storage.size, 0);
  console.log("Account tests passed: guest, consent, reporting, failure, deletion and sign-out.");
})().catch(error => { console.error(error); process.exitCode = 1; });
