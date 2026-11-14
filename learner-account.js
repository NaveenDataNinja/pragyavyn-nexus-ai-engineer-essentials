(() => {
  const dialog = document.getElementById("account-dialog");
  const accountButton = document.getElementById("account-button");
  const label = document.getElementById("account-label");
  const guest = document.getElementById("account-guest");
  const signedIn = document.getElementById("account-signed-in");
  const identity = document.getElementById("account-identity");
  const consent = document.getElementById("account-consent");
  const signInButton = document.getElementById("google-sign-in");
  const signOutButton = document.getElementById("google-sign-out");
  const deleteButton = document.getElementById("delete-report");
  const status = document.getElementById("account-status");
  const consentKey = "pragyavyn-nexus-reporting-consent";
  const config = window.NEXUS_FIREBASE_CONFIG;
  const configured = Boolean(config && config.apiKey && config.authDomain && config.projectId && config.appId);
  let auth;
  let db;
  let firebaseAuth;
  let firestore;
  let activeUser = null;
  let syncTimer = null;
  let syncInProgress = false;
  let syncRequested = false;
  let pendingWrite = null;
  let reportingPaused = false;

  function setStatus(message) {
    status.textContent = message;
  }

  function renderAccount() {
    guest.hidden = Boolean(activeUser);
    signedIn.hidden = !activeUser;
    label.textContent = activeUser ? (activeUser.displayName || "Learner") : "Sign in";
    accountButton.setAttribute("aria-label", activeUser ? `Learner account: ${activeUser.displayName || "Learner"}` : "Learner account: sign in");
    accountButton.title = activeUser ? activeUser.displayName || "Learner" : "Learner account";
    identity.textContent = activeUser ? `${activeUser.displayName || "Learner"} · ${activeUser.email || ""}` : "";
    signInButton.disabled = !auth || !consent.checked || Boolean(activeUser);
  }

  function scheduleSync() {
    if (!activeUser || reportingPaused) return;
    clearTimeout(syncTimer);
    syncTimer = setTimeout(syncActivity, 1000);
  }

  async function syncActivity() {
    if (!activeUser || reportingPaused) return;
    if (syncInProgress) {
      syncRequested = true;
      return;
    }
    const user = activeUser;
    syncInProgress = true;
    try {
      pendingWrite = firestore.setDoc(firestore.doc(db, "learners", user.uid), {
        name: user.displayName || "",
        email: user.email || "",
        ...getActivitySnapshot(),
        lastActive: firestore.serverTimestamp()
      });
      await pendingWrite;
      if (activeUser && activeUser.uid === user.uid) setStatus("Activity reported to the academy owner.");
    } catch (error) {
      console.error("Could not report learning activity.", error);
      setStatus("Activity could not be reported. Your progress remains in this browser; try again when connected.");
      showToast("Activity could not be reported. Check your connection.");
    } finally {
      syncInProgress = false;
      pendingWrite = null;
      if (syncRequested) {
        syncRequested = false;
        scheduleSync();
      }
    }
  }

  accountButton.addEventListener("click", () => dialog.showModal());
  document.getElementById("close-account").addEventListener("click", () => dialog.close());
  document.getElementById("account-share").addEventListener("click", () => {
    dialog.close();
    document.getElementById("share-button").click();
  });
  dialog.addEventListener("click", event => {
    if (event.target === dialog) dialog.close();
  });
  consent.addEventListener("change", renderAccount);

  signInButton.addEventListener("click", async () => {
    if (!auth || !consent.checked) return;
    signInButton.disabled = true;
    setStatus("Opening Google sign-in...");
    try {
      const result = await firebaseAuth.signInWithPopup(auth, new firebaseAuth.GoogleAuthProvider());
      localStorage.setItem(consentKey, result.user.uid);
      activeUser = result.user;
      reportingPaused = false;
      consent.checked = false;
      renderAccount();
      scheduleSync();
    } catch (error) {
      console.error("Google sign-in failed.", error);
      setStatus("Sign-in did not complete. Please try again; you can also continue as a guest.");
      if (auth.currentUser && !activeUser) {
        try {
          await firebaseAuth.signOut(auth);
        } catch (signOutError) {
          console.error("Could not close the incomplete sign-in.", signOutError);
          setStatus("Sign-in could not be completed or closed. Please reload and try again.");
        }
      }
    } finally {
      renderAccount();
    }
  });

  signOutButton.addEventListener("click", async () => {
    signOutButton.disabled = true;
    try {
      clearTimeout(syncTimer);
      await firebaseAuth.signOut(auth);
      localStorage.removeItem(consentKey);
      activeUser = null;
      renderAccount();
      setStatus("Signed out. New activity stays on this browser.");
    } catch (error) {
      console.error("Sign-out failed.", error);
      setStatus("Could not sign out. Please try again.");
    } finally {
      signOutButton.disabled = false;
    }
  });

  deleteButton.addEventListener("click", async () => {
    if (!activeUser || !window.confirm("Delete your reported activity and sign out? Local progress on this browser will remain.")) return;
    reportingPaused = true;
    deleteButton.disabled = true;
    signOutButton.disabled = true;
    setStatus("Deleting your report. This requires a connection.");
    clearTimeout(syncTimer);
    let deleted = false;
    try {
      if (pendingWrite) {
        try {
          await pendingWrite;
        } catch (error) {
          console.error("An activity write failed before deletion.", error);
        }
      }
      await firestore.deleteDoc(firestore.doc(db, "learners", activeUser.uid));
      deleted = true;
      await firebaseAuth.signOut(auth);
      localStorage.removeItem(consentKey);
      activeUser = null;
      renderAccount();
      setStatus("Reported activity deleted. You are signed out; local progress remains.");
    } catch (error) {
      console.error("Could not complete activity deletion.", error);
      reportingPaused = deleted;
      setStatus(deleted
        ? "Activity was deleted, but sign-out failed. Reporting is paused; please sign out."
        : "Activity could not be deleted. Please check your connection and try again.");
    } finally {
      deleteButton.disabled = false;
      signOutButton.disabled = false;
    }
  });

  window.addEventListener("nexus-progress-changed", scheduleSync);
  setInterval(() => {
    if (activeUser && state.active) scheduleSync();
  }, 60000);

  async function initialize() {
    if (!configured) {
      setStatus("Google sign-in is not configured yet. You can continue as a guest.");
      return;
    }
    if (location.protocol === "file:") {
      setStatus("Google sign-in requires a hosted site or localhost. You can continue as a guest.");
      return;
    }
    try {
      const [firebaseApp, authModule, firestoreModule] = await Promise.all([
        import("https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js"),
        import("https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js"),
        import("https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js")
      ]);
      firebaseAuth = authModule;
      firestore = firestoreModule;
      const app = firebaseApp.initializeApp(config);
      auth = firebaseAuth.getAuth(app);
      db = firestore.getFirestore(app);
      firebaseAuth.onAuthStateChanged(auth, user => {
        try {
          activeUser = user && localStorage.getItem(consentKey) === user.uid ? user : null;
          renderAccount();
          if (activeUser) scheduleSync();
        } catch (error) {
          console.error("Could not read reporting consent.", error);
          activeUser = null;
          renderAccount();
          setStatus("Could not read your reporting consent. Please sign in again.");
        }
      }, error => {
        console.error("Could not restore the account session.", error);
        setStatus("Could not restore the account session. Please try signing in again.");
      });
      setStatus("Sign in is available.");
      renderAccount();
    } catch (error) {
      console.error("Could not initialize Google sign-in.", error);
      setStatus("Sign-in could not be loaded. Check your connection or continue as a guest.");
    }
  }

  accountButton.hidden = !configured;
  document.documentElement.dataset.accounts = configured ? "enabled" : "disabled";
  renderAccount();
  initialize();
})();
