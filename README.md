# Pragyavyn Nexus: AI Engineer Essentials

Pragyavyn Nexus by Naveen Narasapuram is a no-build, responsive JavaScript course for a beginner BTech student. The curriculum has 38 step-by-step lessons, fictional real-world scenarios, practical examples (including runnable Python where applicable), offline SVG walkthroughs, an in-lesson choose-the-correct-option question with its answer explained, and a separate assessment unlocked on module completion. Topics progress from Python and SQL through machine learning, deep learning, generative AI and a portfolio capstone. Learners can also choose dark mode, an accent color, larger lesson text and their weekly study pace.

Each lesson's Level 2 section adds an analogy, a guided problem-solving walkthrough, an AI engineering connection and a recall challenge. Learners can revisit the question later to practice remembering the concept.

The project studio contains five guided briefs covering Python, SQL, machine learning, retrieval and agent design, and portfolio presentation. These are instructions and checks, not prebuilt applications. Some projects require a local Python installation or optional packages; the website itself does not execute project code.

## Run it

Open `index.html` in a current desktop or mobile browser. No installation, server, or account is required for guest learning. Study time, completed modules, assessment results and appearance preferences are saved in that browser on that device. Local files, localhost and a published site may have separate browser storage.

The site uses Google Fonts when an internet connection is available and falls back to local fonts otherwise.

The additional real-world code examples use Python's standard library and fictional sample data. Run them locally with Python; the website does not execute code.

## Optional Google sign-in and reporting

Sign-in is disabled until an owner sets up Firebase. The whole course remains available to guests. When a learner explicitly agrees and signs in with Google, the site reports their Google name and email, completed module IDs, assessment results, total study time and last active time to the project owner's Firestore database. It reports the current browser's progress, which may include work done by someone else on a shared browser. Sign-in does **not** synchronize or restore progress across devices. A later report from another browser or tab replaces the previous report; it is not a combined history.

The account menu allows a learner to sign out or delete their reported activity and sign out. Deleting the report leaves local browser progress intact; signing in again and agreeing will report the current local progress again. The owner's Firebase Authentication record is separate from the Firestore report and can be removed by the owner from the Firebase console. Firebase and Google process sign-in and reporting data; the owner is responsible for a suitable privacy notice, contact method, retention policy and applicable consent requirements before accepting real learners. Avoid collecting sensitive information in lesson data.

### Owner setup

1. Create a project in the [Firebase console](https://console.firebase.google.com/), register a web app and copy its **web configuration object**. This client configuration is included in the website and is not an administrator credential. Never put service-account keys, passwords or access tokens in the site or repository. See [Firebase's web setup guide](https://firebase.google.com/docs/web/setup).
2. In Firebase Authentication, enable the Google sign-in provider. Under Authentication settings, authorize the site's domain (for GitHub Pages, `YOUR-USERNAME.github.io`). For local testing, add `localhost` if needed. Google sign-in cannot run from a `file:` URL; use HTTPS or localhost.
3. Create a Cloud Firestore database. In its **Rules** tab, replace the rules with the contents of `firestore.rules` and publish them **before enabling sign-in**. Do not use open/test-mode rules for learner data. The supplied rules allow signed-in users to read, write and delete only their own report; they do not let learners list other reports.
4. Replace `null` in `firebase-config.js` with the web configuration object from Firebase, for example:

   ```js
   window.NEXUS_FIREBASE_CONFIG = {
     apiKey: "YOUR_WEB_API_KEY",
     authDomain: "YOUR_PROJECT.firebaseapp.com",
     projectId: "YOUR_PROJECT",
     appId: "YOUR_APP_ID"
   };
   ```

   Copy any additional fields provided by Firebase as well. Never add a service-account JSON file.
5. Serve the site over localhost or HTTPS. Test sign-in using a test account, explicitly agree, complete a lesson and check the `learners` collection in the Firebase console. Confirm that a second account cannot read another learner's document, then test deletion and sign-out. The project owner's Firebase console access is controlled by Google Cloud IAM, not by the website's Firestore client rules; restrict project access to trusted administrators.
6. The `learners` collection contains one current report per Google account; its document count is a count of retained reports, not a count of unique visitors or active sessions. A learner can delete their report. Activity is client-reported and can be inaccurate or deliberately modified; it is not proof of completion. Review Firebase quotas, billing, abuse protection, security rules and privacy requirements before public use.

Reporting updates when local progress changes, on sign-in and approximately once a minute while the study timer runs. An interrupted or offline write may not reach Firestore, and the account dialog displays a reporting error when a write fails. Sign-out does not remove a previously stored report.

## Test the account flow

With Node.js installed, run `node --experimental-vm-modules tests/learner-account.test.cjs` from this folder. This uses mocked Firebase modules to exercise consent, reporting errors and deletion. It does not test a real Google account, deployed Firestore rules or a Firebase project; perform the owner setup checks separately.

## Share it with others

To give everyone a link that works on their own laptop or phone, publish this folder as a static website. For example, create a GitHub repository, upload the contents of this folder, and enable **Settings → Pages** for the branch and folder where `index.html` lives. GitHub Pages will provide a public HTTPS link that can be shared. Other static hosts such as Netlify or Cloudflare Pages can publish these same files. Set up and verify Firebase separately before offering Google sign-in or collecting learner information.

Guest progress is local to the browser. Signed-in learners explicitly consent to share the activity described above with the owner; neither mode synchronizes progress between devices.
