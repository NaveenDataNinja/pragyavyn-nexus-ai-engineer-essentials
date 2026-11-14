const tracks = [
  {
    title: "Getting started",
    subtitle: "Set up your tools and learn how to learn by building.",
    hours: 4,
    modules: [
      { title: "Your AI engineer map", hours: 1, description: "See how code, data, machine learning and AI fit together. Learn the difference between AI, ML and deep learning.", outcome: "Sketch your own learning map." },
      { title: "Set up your workspace", hours: 2, description: "Install Python, VS Code and Git. Run a Python file and learn the terminal basics you'll use throughout the course.", outcome: "Run your first script and save it with Git." },
      { title: "How to practice coding", hours: 1, description: "Break a problem into steps, read error messages and build a simple habit of writing and reviewing code.", outcome: "Make a weekly study plan that fits college." }
    ]
  },
  {
    title: "Python foundations",
    subtitle: "Go from first print statement to clean, reusable programs.",
    hours: 25,
    modules: [
      { title: "Values, variables & input", hours: 3, description: "Work with numbers, text, booleans, conversions and input/output. Understand what a variable represents.", outcome: "Build a unit converter." },
      { title: "Conditions & loops", hours: 4, description: "Make decisions with if/elif/else, repeat actions with for and while, and use range and loop control.", outcome: "Create a number-guessing game." },
      { title: "Functions & problem solving", hours: 5, description: "Write functions with parameters and return values. Decompose a task into smaller steps and test each one.", outcome: "Build a menu-driven calculator." },
      { title: "Lists, dictionaries & strings", hours: 5, description: "Store, search and transform collections. Practice indexing, slicing, comprehensions and choosing the right data structure.", outcome: "Make a small student gradebook." },
      { title: "Files, errors & modules", hours: 4, description: "Read and write text and CSV files, handle expected errors and organize code into modules.", outcome: "Save and reload a personal expense log." },
      { title: "Object-oriented Python & testing", hours: 4, description: "Meet classes and objects, use a few standard-library tools and write simple tests with assert or unittest.", outcome: "Model and test a library book tracker." }
    ]
  },
  {
    title: "SQL & databases",
    subtitle: "Ask reliable questions of the structured data behind applications.",
    hours: 17,
    modules: [
      { title: "Tables, rows & SELECT", hours: 4, description: "Understand tables, columns, keys and relational thinking. Query, sort and limit records with SELECT.", outcome: "Explore a sample college database." },
      { title: "Filtering, joins & NULL", hours: 5, description: "Filter with WHERE, combine tables with INNER and LEFT JOIN, and handle missing values carefully.", outcome: "Connect student, course and enrollment data." },
      { title: "Aggregates & subqueries", hours: 4, description: "Summarize data with COUNT, SUM and GROUP BY. Use HAVING, CASE and readable subqueries.", outcome: "Report course enrollment and pass rates." },
      { title: "Design, updates & safe queries", hours: 4, description: "Learn primary and foreign keys, basic normalization, INSERT/UPDATE, transactions and parameterized queries.", outcome: "Design a small project database schema." }
    ]
  },
  {
    title: "Math for machine learning",
    subtitle: "Build intuition for the math you'll meet in models—not a math detour.",
    hours: 24,
    modules: [
      { title: "Vectors & coordinates", hours: 5, description: "Represent examples as feature vectors. Practice vector addition, magnitude, dot products and simple distances.", outcome: "Calculate similarity between two feature vectors." },
      { title: "Matrices & linear transformations", hours: 6, description: "Read matrices as tables of numbers and transformations. Practice shapes, multiplication and the meaning of matrix operations.", outcome: "Use a matrix to transform 2D points." },
      { title: "Probability & descriptive statistics", hours: 7, description: "Review distributions, mean, median, variance, conditional probability, sampling and correlation.", outcome: "Summarize a dataset and explain its uncertainty." },
      { title: "Derivatives & optimization intuition", hours: 6, description: "Understand slopes, partial derivatives and gradient descent as a way to reduce model error.", outcome: "Trace a few hand-worked gradient updates." }
    ]
  },
  {
    title: "Working with data",
    subtitle: "Turn raw tables into clear questions, useful charts and trustworthy datasets.",
    hours: 20,
    modules: [
      { title: "NumPy arrays", hours: 5, description: "Create arrays, inspect shapes and types, select values, use vectorized operations and generate random samples.", outcome: "Simulate and summarize experiment measurements." },
      { title: "Pandas & data cleaning", hours: 6, description: "Load CSV files, inspect DataFrames, handle missing values, filter, group, join and create useful columns.", outcome: "Clean a messy student performance dataset." },
      { title: "Visualize to understand", hours: 4, description: "Choose readable charts for comparisons and distributions. Label axes and spot misleading visual choices.", outcome: "Create a short, clearly labeled data story." },
      { title: "Exploratory data analysis", hours: 5, description: "Ask a question, inspect data quality, explore patterns and communicate findings without claiming causation.", outcome: "Publish a notebook with findings and caveats." }
    ]
  },
  {
    title: "Machine learning",
    subtitle: "Train, test and evaluate classical models before reaching for deep learning.",
    hours: 28,
    modules: [
      { title: "The machine learning workflow", hours: 4, description: "Frame prediction tasks, separate features from labels and split data before fitting a model.", outcome: "Write down a sensible baseline for a dataset." },
      { title: "Regression", hours: 6, description: "Fit linear regression, understand predictions and residuals, and practice feature scaling and leakage prevention.", outcome: "Estimate a numeric outcome and inspect its errors." },
      { title: "Classification", hours: 6, description: "Train logistic regression and k-nearest neighbors. Interpret class probabilities and choose a threshold for a use case.", outcome: "Classify an example dataset with a clear baseline." },
      { title: "Trees & ensemble models", hours: 6, description: "Use decision trees and random forests. Understand overfitting, feature importance and why a model may generalize.", outcome: "Compare a tree with a simple baseline." },
      { title: "Evaluation & scikit-learn pipelines", hours: 6, description: "Choose metrics, use cross-validation, build preprocessing pipelines and document limitations.", outcome: "Create a reproducible model comparison." }
    ]
  },
  {
    title: "Deep learning with PyTorch",
    subtitle: "Understand neural networks and build your first trainable models.",
    hours: 25,
    modules: [
      { title: "Neural network building blocks", hours: 5, description: "Connect layers, weights, activations, loss and gradient descent to the math intuition from earlier.", outcome: "Draw a small network and explain its training loop." },
      { title: "Tensors & PyTorch training", hours: 7, description: "Create tensors, use autograd, define a model, calculate loss and train with a basic loop.", outcome: "Train a small model on tabular data." },
      { title: "Image classification with CNNs", hours: 6, description: "Learn convolutions, pooling and image batches. Use a simple convolutional network and inspect errors.", outcome: "Classify a small public image dataset." },
      { title: "Sequences & attention concepts", hours: 7, description: "Meet tokens, embeddings, sequence models and the intuition behind attention and transformers.", outcome: "Visualize tokenization and attention at a small scale." }
    ]
  },
  {
    title: "Generative AI & language models",
    subtitle: "Use language models thoughtfully, with retrieval, evaluation and safety in mind.",
    hours: 23,
    modules: [
      { title: "Text, tokens & embeddings", hours: 5, description: "Preprocess text, inspect tokens and understand embeddings as numerical representations of meaning.", outcome: "Compare text similarity with embeddings." },
      { title: "How large language models work", hours: 6, description: "Build a practical mental model of transformer-based language models, context windows and generation.", outcome: "Explain a prompt-to-response flow in your own words." },
      { title: "Prompting & retrieval-augmented generation", hours: 7, description: "Write structured prompts, retrieve relevant documents and connect grounded context to model responses.", outcome: "Prototype a small Q&A assistant over your notes." },
      { title: "Evaluate responsibly", hours: 5, description: "Create a small evaluation set, check grounding and failure cases, protect sensitive information and disclose limitations.", outcome: "Document quality checks for your prototype." }
    ]
  },
  {
    title: "AI engineering & portfolio",
    subtitle: "Make projects usable, repeatable and easy for others to understand.",
    hours: 26,
    modules: [
      { title: "Serve a model with an API", hours: 5, description: "Expose a trained model through a small Python API, validate inputs and return useful errors.", outcome: "Run a local prediction endpoint." },
      { title: "Reproducible projects & deployment basics", hours: 5, description: "Organize a repository, manage dependencies, track experiments and learn what containers and deployment solve.", outcome: "Write a setup guide another student can follow." },
      { title: "Capstone: data to working AI app", hours: 12, description: "Pick a meaningful, manageable problem. Build a data pipeline, a baseline model or AI feature, an interface and an evaluation.", outcome: "Ship one end-to-end project with a demo and README." },
      { title: "Portfolio, ethics & next steps", hours: 4, description: "Present your decisions, results and limitations. Review privacy, bias, accessibility and what to learn next.", outcome: "Publish a portfolio entry and a short project walkthrough." }
    ]
  }
];

const STORAGE_KEY = "fieldnotes-ai-roadmap-v1";
const allModules = tracks.flatMap((track, trackIndex) =>
  track.modules.map((module, moduleIndex) => ({
    ...module,
    id: `${trackIndex}-${moduleIndex}`,
    trackIndex
  }))
);
const totalHours = tracks.reduce((sum, track) => sum + track.hours, 0);
const state = loadState();
let activeFilter = "All tracks";
let searchTerm = "";
const collapsedFilteredTracks = new Set();
let toastTimeout;
let currentLessonIndex = 0;
let quizSession = null;
let inlineCheckSession = null;

const trackList = document.getElementById("track-list");
const filterList = document.getElementById("filter-list");
const searchInput = document.getElementById("search-input");
const noResults = document.getElementById("no-results");
const completionLabel = document.getElementById("completion-label");
const completionBar = document.getElementById("completion-bar");
const moduleCount = document.getElementById("module-count");
const timeDisplay = document.getElementById("time-display");
const timerStatus = document.getElementById("timer-status");
const timerButton = document.getElementById("timer-button");
const toast = document.getElementById("toast");
const lessonDialog = document.getElementById("lesson-dialog");
const lessonContent = document.getElementById("lesson-content");
const lessonTrackLabel = document.getElementById("lesson-track-label");
const lessonPosition = document.getElementById("lesson-position");
const lessonPrevious = document.getElementById("lesson-previous");
const lessonNext = document.getElementById("lesson-next");
const assessmentDialog = document.getElementById("assessment-dialog");
const assessmentBody = document.getElementById("assessment-body");
const assessmentTrackLabel = document.getElementById("assessment-track-label");
const themeButton = document.getElementById("theme-button");
const themeIcon = document.getElementById("theme-icon");
const themeLabel = document.getElementById("theme-label");
const backToTopButton = document.getElementById("back-to-top");
const settingsDialog = document.getElementById("settings-dialog");
const settingsButton = document.getElementById("settings-button");
const settingsForm = document.getElementById("settings-form");

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    const savedPreferences = saved.preferences && typeof saved.preferences === "object" ? saved.preferences : {};
    return {
      completed: saved.completed && typeof saved.completed === "object" ? saved.completed : {},
      assessments: saved.assessments && typeof saved.assessments === "object" ? saved.assessments : {},
      seconds: Number.isFinite(saved.seconds) && saved.seconds >= 0 ? Math.floor(saved.seconds) : 0,
      active: saved.active && typeof saved.active.moduleId === "string" && Number.isFinite(saved.active.startedAt) ? saved.active : null,
      preferences: {
        theme: ["light", "dark"].includes(savedPreferences.theme) ? savedPreferences.theme : "light",
        weeklyHours: [4, 6, 8, 10, 12].includes(savedPreferences.weeklyHours) ? savedPreferences.weeklyHours : 8,
        readingSize: ["normal", "large"].includes(savedPreferences.readingSize) ? savedPreferences.readingSize : "normal",
        accent: ["sage", "ocean", "plum"].includes(savedPreferences.accent) ? savedPreferences.accent : "plum"
      }
    };
  } catch (error) {
    console.error("Could not read saved learning progress.", error);
    return { completed: {}, assessments: {}, seconds: 0, active: null, preferences: { theme: "light", weeklyHours: 8, readingSize: "normal", accent: "plum" } };
  }
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    window.dispatchEvent(new Event("nexus-progress-changed"));
  } catch (error) {
    console.error("Could not save learning progress.", error);
    showToast("Progress couldn't be saved in this browser.");
  }
}

function getActivitySnapshot() {
  const completed = allModules.filter(module => state.completed[module.id]).map(module => module.id);
  const assessments = {};
  for (const module of allModules) {
    const result = state.assessments[module.id];
    if (result && Number.isInteger(result.attempts) && Number.isInteger(result.bestScore)) {
      assessments[module.id] = {
        attempts: result.attempts,
        bestScore: result.bestScore,
        passed: Boolean(result.passed)
      };
    }
  }
  const elapsed = state.active ? Math.max(0, Math.floor((Date.now() - state.active.startedAt) / 1000)) : 0;
  return { completed, assessments, seconds: state.seconds + elapsed };
}

function formatTime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainder = seconds % 60;
  return [hours, minutes, remainder].map(value => String(value).padStart(2, "0")).join(":");
}

function renderFilters() {
  const filters = ["All tracks", ...tracks.map(track => track.title)];
  filterList.innerHTML = filters.map(filter => `
    <button class="filter-button${filter === activeFilter ? " active" : ""}" type="button" data-filter="${escapeAttribute(filter)}" aria-pressed="${filter === activeFilter}">
      ${escapeHtml(filter)}
    </button>
  `).join("");
}

function renderTracks() {
  let visibleCount = 0;
  trackList.innerHTML = tracks.map((track, trackIndex) => {
    const filteredModules = track.modules.map((module, moduleIndex) => ({
      ...module,
      id: `${trackIndex}-${moduleIndex}`
    })).filter(module => {
      const matchesSearch = `${module.title} ${module.description} ${module.outcome} ${track.title}`.toLowerCase().includes(searchTerm);
      return matchesSearch && (activeFilter === "All tracks" || activeFilter === track.title);
    });

    if (!filteredModules.length) return "";
    visibleCount += filteredModules.length;
    const completedCount = track.modules.filter((_, moduleIndex) => state.completed[`${trackIndex}-${moduleIndex}`]).length;
    const progress = Math.round(completedCount / track.modules.length * 100);
    const isFiltering = searchTerm || activeFilter !== "All tracks";
    const isOpen = isFiltering ? !collapsedFilteredTracks.has(trackIndex) : state.openTrack === trackIndex;

    return `
      <article class="track-card${isOpen ? " open" : ""}" data-track="${trackIndex}">
        <button type="button" class="track-header" aria-expanded="${Boolean(isOpen)}" aria-controls="modules-${trackIndex}">
          <span class="track-number">${String(trackIndex + 1).padStart(2, "0")}</span>
          <span class="track-title-wrap">
            <span class="track-title">${escapeHtml(track.title)}</span>
            <span class="track-subtitle">${escapeHtml(track.subtitle)}</span>
          </span>
          <span class="track-hours">${track.hours} hrs</span>
          <span class="track-progress"><span class="mini-progress"><span style="width:${progress}%"></span></span>${completedCount}/${track.modules.length}</span>
          <span class="chevron" aria-hidden="true">⌄</span>
        </button>
        <div class="module-list" id="modules-${trackIndex}">
          ${filteredModules.map(module => {
            const done = Boolean(state.completed[module.id]);
            const isActive = state.active && state.active.moduleId === module.id;
            const assessment = state.assessments[module.id];
            return `
              <div class="module-row${done ? " is-complete" : ""}">
                <input class="module-check" type="checkbox" data-module-check="${module.id}" aria-label="Mark ${escapeAttribute(module.title)} complete" ${done ? "checked" : ""}>
                <span class="module-info">
                  <span class="module-name">${escapeHtml(module.title)}</span>
                  <span class="module-description">${escapeHtml(module.description)}</span>
                  <span class="module-outcome">↳ ${escapeHtml(module.outcome)}</span>
                </span>
                <span class="module-duration">${module.hours} hrs</span>
                <span class="module-actions">
                  <button class="module-lesson" type="button" data-open-lesson="${module.id}">Read lesson</button>
                  <button class="module-start${isActive ? " is-active" : ""}" type="button" data-start-module="${module.id}">${isActive ? "Pause timer" : "Study this"}</button>
                  ${done ? `<button class="module-quiz${assessment && assessment.passed ? " passed" : ""}" type="button" data-open-assessment="${module.id}">${assessment && assessment.passed ? "Assessment ✓" : "Take assessment"}</button>` : ""}
                </span>
              </div>
            `;
          }).join("")}
        </div>
      </article>
    `;
  }).join("");

  noResults.hidden = visibleCount > 0;
  updateProgress();
  updateTimer();
}

function updateProgress() {
  const completed = allModules.filter(module => state.completed[module.id]).length;
  const percentage = Math.round(completed / allModules.length * 100);
  completionLabel.textContent = `${percentage}% complete`;
  completionBar.style.width = `${percentage}%`;
  moduleCount.textContent = `${completed} of ${allModules.length} modules`;
}

function updateTimer() {
  const elapsed = state.active
    ? Math.max(0, Math.floor((Date.now() - state.active.startedAt) / 1000))
    : 0;
  timeDisplay.textContent = formatTime(state.seconds + elapsed);
  const activeModule = state.active && allModules.find(module => module.id === state.active.moduleId);
  timerStatus.textContent = activeModule ? `Studying: ${activeModule.title}` : "Ready when you are";
  timerButton.disabled = !state.active;
  timerButton.textContent = state.active ? "Pause timer" : "Start a module";
}

function stopTimer() {
  if (!state.active) return;
  const elapsed = Math.max(0, Math.floor((Date.now() - state.active.startedAt) / 1000));
  state.seconds += elapsed;
  state.active = null;
  saveState();
  renderTracks();
}

function toggleTimer(moduleId) {
  if (state.active && state.active.moduleId === moduleId) {
    stopTimer();
    showToast("Study timer paused.");
    return;
  }
  if (state.active) {
    state.seconds += Math.max(0, Math.floor((Date.now() - state.active.startedAt) / 1000));
  }
  state.active = { moduleId, startedAt: Date.now() };
  saveState();
  renderTracks();
  showToast("Study timer started. You’ve got this.");
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove("show"), 2600);
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);
}

function escapeAttribute(value) {
  return escapeHtml(value);
}

const visualPresets = {
  "ai-flow": ["Examples", "Training", "Model", "Prediction"],
  workspace: ["Write code", "Run Python", "Check output", "Save with Git"],
  steps: ["Goal", "Inputs", "Small steps", "Test result"],
  "value-flow": ["Text input", "Convert type", "Calculate", "Show units"],
  decision: ["Read score", "Check rule", "Choose path", "Count result"],
  function: ["Input marks", "Average()", "Return value", "Show result"],
  collections: ["Student", "Name key", "Marks list", "Average"],
  "file-flow": ["Expense entry", "Validate row", "Save file", "Read total"],
  objects: ["Book class", "Book A", "Book B", "Borrow state"],
  table: ["Students", "Filter year", "Sort names", "Course list"],
  join: ["Students", "Student ID", "Enrollments", "Joined report"],
  aggregate: ["Enrollments", "Group course", "Count rows", "Popular course"],
  schema: ["Student key", "Course key", "Enrollment", "Valid records"],
  vector: ["Quiz scores", "Same features", "Compare vectors", "Similarity"],
  matrix: ["Point (x,y)", "Scale matrix", "Multiply", "New point"],
  distribution: ["Class scores", "Sort values", "Mean / median", "Typical score"],
  gradient: ["Current model", "Measure loss", "Follow slope", "Update weights"],
  array: ["Sensor values", "Build array", "Filter safely", "Summarize"],
  dataframe: ["Survey CSV", "Inspect blanks", "Clean rows", "Group results"],
  chart: ["Course scores", "Choose chart", "Label axes", "Explain pattern"],
  eda: ["Ask question", "Check data", "Explore patterns", "State caveats"],
  "ml-pipeline": ["Define target", "Split data", "Train baseline", "Test once"],
  regression: ["Trip features", "Fit line", "Predict time", "Measure error"],
  confusion: ["Model labels", "Compare truth", "Count errors", "Choose threshold"],
  tree: ["Ask question", "Follow branch", "Reach a leaf", "Check new cases"],
  "cross-validation": ["Split folds", "Fit pipeline", "Compare scores", "Final test"],
  neuron: ["Input features", "Weighted layers", "Calculate loss", "Update weights"],
  "training-loop": ["Make tensors", "Predict batch", "Find gradients", "Update model"],
  cnn: ["Image pixels", "Find local edges", "Combine features", "Predict class"],
  attention: ["Token vectors", "Compare tokens", "Mix context", "Predict next"],
  embedding: ["Student question", "Meaning vector", "Find closest note", "Verify source"],
  "next-token": ["Prompt context", "Score tokens", "Choose next", "Generate text"],
  rag: ["Course notes", "Retrieve passages", "Ground prompt", "Answer with source"],
  evaluation: ["Test question", "Inspect evidence", "Score response", "Improve safely"],
  api: ["Web request", "Validate input", "Run model", "Return JSON"],
  project: ["Project files", "Record setup", "Run tests", "Reproduce result"],
  capstone: ["Choose user need", "Build baseline", "Create app", "Test & demo"],
  portfolio: ["Problem & user", "Show evidence", "Explain limits", "Share project"]
};

function createIllustration(module, extra) {
  const labels = visualPresets[extra.visual] || ["Question", "Explore", "Build", "Review"];
  const xPositions = [18, 174, 330, 486];
  const colors = ["#eef3e8", "#f7eee3", "#edf1f8", "#f5ebed"];
  const nodes = labels.map((label, index) => {
    const x = xPositions[index];
    return `
      <g>
        <rect x="${x}" y="43" width="128" height="76" rx="11" fill="${colors[index]}" stroke="#e4e9e1"/>
        <circle cx="${x + 19}" cy="62" r="10" fill="#ffffff"/>
        <text x="${x + 19}" y="66" text-anchor="middle" class="visual-step">${index + 1}</text>
        <text x="${x + 64}" y="84" text-anchor="middle" class="visual-label">${escapeHtml(label)}</text>
      </g>
      ${index < labels.length - 1 ? `<path d="M${x + 130} 81h17m-5-5 5 5-5 5" fill="none" stroke="#92a68b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>` : ""}
    `;
  }).join("");

  return `
    <figure class="lesson-visual">
      <svg viewBox="0 0 632 155" role="img" aria-label="Illustrated example: ${escapeAttribute(module.title)}">
        <rect x="0" y="0" width="632" height="155" rx="11" fill="#ffffff"/>
        <text x="20" y="24" class="visual-kicker">A REAL-WORLD WALKTHROUGH</text>
        ${nodes}
      </svg>
      <figcaption>${escapeHtml(extra.story)}</figcaption>
    </figure>
  `;
}

function openLesson(moduleId) {
  const index = allModules.findIndex(module => module.id === moduleId);
  if (index < 0) return;
  currentLessonIndex = index;
  renderLesson();
  lessonDialog.showModal();
}

function renderLesson() {
  const module = allModules[currentLessonIndex];
  const lesson = lessonMaterials[module.id];
  const extra = lessonEnrichments[module.id];
  const realWorld = realWorldExamples[module.id];
  const deepDive = lessonDeepDives[module.id];
  if (!lesson || !extra || !realWorld || !deepDive) {
    console.error(`Missing lesson content for module ${module.id}.`);
    showToast("This lesson's material is unavailable.");
    lessonDialog.close();
    return;
  }
  lessonTrackLabel.textContent = tracks[module.trackIndex].title.toUpperCase();
  lessonPosition.textContent = `${currentLessonIndex + 1} / ${allModules.length}`;
  lessonPrevious.disabled = currentLessonIndex === 0;
  lessonNext.disabled = currentLessonIndex === allModules.length - 1;
  const inlineQuestion = extra.assessment[0];
  inlineCheckSession = { moduleId: module.id, selected: null, misses: 0, answered: false };
  lessonContent.innerHTML = `
    <p class="eyebrow">A GENTLE STEP-BY-STEP LESSON · ${module.hours} HOURS</p>
    <h2 id="lesson-title">${escapeHtml(module.title)}</h2>
    <h3>In simple words</h3>
    <p>${escapeHtml(lesson.intro)}</p>
    <aside class="lesson-story"><span class="lesson-story-mark" aria-hidden="true">✳</span><p><strong>Imagine this at college:</strong> ${escapeHtml(extra.story)}</p></aside>
    ${createIllustration(module, extra)}
    <h3>Let's work through it one step at a time</h3>
    <ol class="lesson-steps">${extra.steps.map(step => `<li>${escapeHtml(step)}</li>`).join("")}</ol>
    <h3>The key ideas</h3>
    <ul class="lesson-points">${lesson.points.map(point => `<li>${escapeHtml(point)}</li>`).join("")}</ul>
    <h3>Worked example: ${escapeHtml(lesson.exampleLabel)}</h3>
    <div class="lesson-code"><div class="lesson-code-label">FOLLOW ALONG · TRY CHANGING ONE VALUE</div><pre><code>${escapeHtml(lesson.code)}</code></pre></div>
    <h3>Real-world example: ${escapeHtml(realWorld.title)}</h3>
    <p>${escapeHtml(realWorld.scenario)}</p>
    ${realWorld.code ? `<div class="lesson-code"><div class="lesson-code-label">RUN LOCALLY · PYTHON STANDARD LIBRARY</div><pre><code>${escapeHtml(realWorld.code)}</code></pre></div>` : ""}
    <p>${escapeHtml(realWorld.explanation)}</p>
    <section aria-labelledby="deep-dive-title">
      <h3 id="deep-dive-title">Level 2: Make it stick</h3>
      <aside class="lesson-story"><span class="lesson-story-mark" aria-hidden="true">✳</span><p><strong>Picture it:</strong> ${escapeHtml(deepDive.analogy)}</p></aside>
      <p><strong>Think it through, one step at a time:</strong></p>
      <ol class="lesson-steps">${deepDive.steps.map(step => `<li>${escapeHtml(step)}</li>`).join("")}</ol>
      <p><strong>Connect it to AI engineering:</strong> ${escapeHtml(deepDive.connection)}</p>
      <p><strong>Recall challenge:</strong> Try answering before opening the explanation.</p>
      <details class="lesson-check"><summary>${escapeHtml(deepDive.question)}</summary><p>${escapeHtml(deepDive.answer)}</p></details>
      <p>To practice remembering, try explaining this idea without looking tomorrow and again in a week.</p>
    </section>
    <h3>Your turn</h3>
    <div class="lesson-practice">${escapeHtml(lesson.practice)}</div>
    <h3>Check your understanding</h3>
    <details class="lesson-check"><summary>${escapeHtml(lesson.question)} Reveal the explanation</summary><p>${escapeHtml(lesson.answer)}</p></details>
    <section class="inline-assessment" aria-label="Interactive lesson question">
      <p class="eyebrow">QUICK PICK · ANSWER AS YOU LEARN</p>
      <fieldset class="inline-question">
        <legend>${escapeHtml(inlineQuestion[0])}</legend>
        ${inlineQuestion[1].map((choice, index) => `
          <label class="inline-option">
            <input type="radio" name="inline-answer" value="${index}">
            <span>${escapeHtml(choice)}</span>
          </label>
        `).join("")}
      </fieldset>
      <div class="inline-feedback" data-inline-feedback role="status" hidden></div>
      <div class="inline-actions" data-inline-actions>
        <button type="button" class="inline-check-button" data-inline-action="check" disabled>Check my answer</button>
      </div>
    </section>
  `;
  lessonContent.scrollTop = 0;
}

function revealInlineAnswer(question, feedback, actions, correctMessage) {
  const answer = question[1][question[2]];
  feedback.hidden = false;
  feedback.className = "inline-feedback correct";
  feedback.innerHTML = `<strong>${correctMessage}</strong> <span>Answer: ${escapeHtml(answer)}.</span> ${escapeHtml(question[3])}`;
  actions.innerHTML = `<span class="inline-encouragement">Nice work—keep going with the lesson.</span>`;
  lessonContent.querySelectorAll('input[name="inline-answer"]').forEach(input => {
    input.disabled = true;
    if (Number(input.value) === question[2]) input.closest(".inline-option").classList.add("is-correct");
  });
  inlineCheckSession.answered = true;
}

function handleInlineAction(action) {
  if (!inlineCheckSession) return;
  const question = lessonEnrichments[inlineCheckSession.moduleId].assessment[0];
  const feedback = lessonContent.querySelector("[data-inline-feedback]");
  const actions = lessonContent.querySelector("[data-inline-actions]");

  if (action === "check" && inlineCheckSession.selected !== null && !inlineCheckSession.answered) {
    if (inlineCheckSession.selected === question[2]) {
      revealInlineAnswer(question, feedback, actions, "That's the correct choice!");
      return;
    }

    inlineCheckSession.misses += 1;
    const selected = lessonContent.querySelector(`input[name="inline-answer"][value="${inlineCheckSession.selected}"]`);
    if (selected) selected.closest(".inline-option").classList.add("is-incorrect");
    feedback.hidden = false;
    feedback.className = "inline-feedback incorrect";
    feedback.innerHTML = `<strong>Not quite yet.</strong> ${inlineCheckSession.misses === 1 ? "Think about the example, try once more, or reveal the answer." : "Try another option, or reveal the answer when you're ready."}`;
    actions.innerHTML = `
      <button type="button" class="inline-check-button secondary" data-inline-action="try-again">Try another option</button>
      <button type="button" class="inline-check-button" data-inline-action="reveal">Show answer</button>
    `;
  } else if (action === "try-again" && !inlineCheckSession.answered) {
    inlineCheckSession.selected = null;
    lessonContent.querySelectorAll('input[name="inline-answer"]').forEach(input => {
      input.checked = false;
      input.closest(".inline-option").classList.remove("is-incorrect");
    });
    feedback.hidden = true;
    actions.innerHTML = `<button type="button" class="inline-check-button" data-inline-action="check" disabled>Check my answer</button>`;
  } else if (action === "reveal" && !inlineCheckSession.answered) {
    revealInlineAnswer(question, feedback, actions, "Here is the answer.");
  }
}

function showAssessment(moduleId) {
  const module = allModules.find(item => item.id === moduleId);
  const extra = lessonEnrichments[moduleId];
  if (!module || !extra || extra.assessment.length < 2) {
    console.error(`Missing assessment for module ${moduleId}.`);
    showToast("This assessment is unavailable.");
    return;
  }
  if (!state.completed[moduleId]) {
    showToast("Finish the lesson and mark the module complete to unlock its assessment.");
    return;
  }
  quizSession = { moduleId, questions: extra.assessment.slice(1), index: 0, selected: null, submitted: false, score: 0, complete: false };
  assessmentTrackLabel.textContent = `${tracks[module.trackIndex].title.toUpperCase()} · QUICK CHECK`;
  renderAssessment();
  assessmentDialog.showModal();
}

function finishAssessment() {
  const moduleId = quizSession.moduleId;
  const questions = quizSession.questions;
  const passed = quizSession.score >= Math.ceil(questions.length / 2);
  const previous = state.assessments[moduleId] || { attempts: 0, bestScore: 0, passed: false };
  state.assessments[moduleId] = {
    attempts: previous.attempts + 1,
    bestScore: Math.max(previous.bestScore, quizSession.score),
    passed: previous.passed || passed
  };
  quizSession.complete = true;
  quizSession.passed = passed;
  saveState();
  renderTracks();
  renderAssessment();
}

function renderAssessment() {
  if (!quizSession) return;
  const questions = quizSession.questions;
  if (quizSession.complete) {
    const total = questions.length;
    assessmentBody.innerHTML = `
      <div class="assessment-content">
        <div class="assessment-result">
          <span class="assessment-result-mark" aria-hidden="true">${quizSession.passed ? "✓" : "↻"}</span>
          <h2 id="assessment-title">${quizSession.passed ? "Nice work—you passed!" : "Good effort. Review and try again."}</h2>
          <p>You got <strong>${quizSession.score} of ${total}</strong> correct. ${quizSession.passed ? "Your result is saved on this device." : "Open the lesson explanations, then retake the quick check when you're ready."}</p>
        </div>
        <div class="assessment-actions">
          <button type="button" data-quiz-action="close">Close</button>
          <button type="button" class="primary" data-quiz-action="retry">Try again</button>
        </div>
      </div>
    `;
    return;
  }

  const question = questions[quizSession.index];
  const choiceMarkup = question[1].map((choice, index) => `
    <label class="assessment-option">
      <input type="radio" name="assessment-answer" value="${index}" ${quizSession.selected === index ? "checked" : ""} ${quizSession.submitted ? "disabled" : ""}>
      <span>${escapeHtml(choice)}</span>
    </label>
  `).join("");
  const correct = quizSession.submitted && quizSession.selected === question[2];
  assessmentBody.innerHTML = `
    <div class="assessment-content">
      <p class="eyebrow">QUICK CHECK · ${quizSession.index + 1} OF ${questions.length}</p>
      <h2 id="assessment-title">Let's see what stuck.</h2>
      <p class="assessment-intro">Choose the best answer and review each explanation. Aim for all of them; half or more is a pass, and you can retry anytime.</p>
      <div class="assessment-progress"><span style="width:${Math.round((quizSession.index + 1) / questions.length * 100)}%"></span></div>
      <fieldset class="assessment-form">
        <legend>${escapeHtml(question[0])}</legend>
        ${choiceMarkup}
      </fieldset>
      ${quizSession.submitted ? `<div class="assessment-feedback${correct ? "" : " incorrect"}" role="status"><strong>${correct ? "That's right." : "Not quite."}</strong> ${escapeHtml(question[3])}</div>` : ""}
      <div class="assessment-actions">
        ${quizSession.submitted
          ? `<button type="button" class="primary" data-quiz-action="next">${quizSession.index === questions.length - 1 ? "See my score" : "Next question →"}</button>`
          : `<button type="button" class="primary" data-quiz-action="submit" ${quizSession.selected === null ? "disabled" : ""}>Check answer</button>`}
      </div>
    </div>
  `;
}

function moveLesson(direction) {
  currentLessonIndex = Math.max(0, Math.min(allModules.length - 1, currentLessonIndex + direction));
  renderLesson();
}

function applyPreferences() {
  const preferences = state.preferences;
  document.documentElement.dataset.theme = preferences.theme;
  document.documentElement.dataset.accent = preferences.accent;
  document.documentElement.dataset.readingSize = preferences.readingSize;
  themeButton.setAttribute("aria-pressed", String(preferences.theme === "dark"));
  themeButton.setAttribute("aria-label", `Switch to ${preferences.theme === "dark" ? "light" : "dark"} mode`);
  themeIcon.textContent = preferences.theme === "dark" ? "☀" : "☾";
  themeLabel.textContent = preferences.theme === "dark" ? "Light mode" : "Dark mode";
  document.getElementById("weekly-hours-select").value = String(preferences.weeklyHours);
  document.getElementById("reading-size-select").value = preferences.readingSize;
  const accentInput = settingsForm.querySelector(`input[name="accent"][value="${preferences.accent}"]`);
  if (accentInput) accentInput.checked = true;
  const weeks = Math.ceil(totalHours / preferences.weeklyHours);
  document.getElementById("course-duration").textContent = `${weeks} weeks`;
  document.getElementById("weekly-hours-caption").textContent = `at about ${preferences.weeklyHours} hours / week`;
  document.getElementById("schedule-hours").textContent = `${preferences.weeklyHours} hours`;
  document.getElementById("weekly-plan-hours").textContent = `~ ${preferences.weeklyHours} HRS`;
  document.querySelectorAll("[data-hours-share]").forEach(item => {
    item.textContent = formatStudyTime(preferences.weeklyHours * Number(item.dataset.hoursShare));
  });
  document.querySelector('meta[name="theme-color"]').content = preferences.theme === "dark" ? "#111915" : "#f5f6f2";
}

function formatStudyTime(hours) {
  const minutes = Math.round(hours * 60);
  const wholeHours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  if (!remainingMinutes) return `${wholeHours} ${wholeHours === 1 ? "hr" : "hrs"}`;
  if (!wholeHours) return `${remainingMinutes} min`;
  return `${wholeHours} hr ${remainingMinutes} min`;
}

filterList.addEventListener("click", event => {
  const button = event.target.closest("[data-filter]");
  if (!button) return;
  activeFilter = button.dataset.filter;
  collapsedFilteredTracks.clear();
  renderFilters();
  renderTracks();
});

searchInput.addEventListener("input", () => {
  searchTerm = searchInput.value.trim().toLowerCase();
  collapsedFilteredTracks.clear();
  renderTracks();
});

trackList.addEventListener("click", event => {
  const lessonButton = event.target.closest("[data-open-lesson]");
  if (lessonButton) {
    openLesson(lessonButton.dataset.openLesson);
    return;
  }
  const assessmentButton = event.target.closest("[data-open-assessment]");
  if (assessmentButton) {
    showAssessment(assessmentButton.dataset.openAssessment);
    return;
  }
  const startButton = event.target.closest("[data-start-module]");
  if (startButton) {
    toggleTimer(startButton.dataset.startModule);
    return;
  }
  const header = event.target.closest(".track-header");
  if (!header) return;
  const card = header.closest(".track-card");
  const trackIndex = Number(card.dataset.track);
  if (searchTerm || activeFilter !== "All tracks") {
    if (card.classList.contains("open")) collapsedFilteredTracks.add(trackIndex);
    else collapsedFilteredTracks.delete(trackIndex);
  } else {
    state.openTrack = card.classList.contains("open") ? null : trackIndex;
  }
  renderTracks();
});

trackList.addEventListener("change", event => {
  const checkbox = event.target.closest("[data-module-check]");
  if (!checkbox) return;
  state.completed[checkbox.dataset.moduleCheck] = checkbox.checked;
  saveState();
  renderTracks();
});

timerButton.addEventListener("click", () => {
  stopTimer();
  showToast("Study timer paused.");
});

lessonPrevious.addEventListener("click", () => moveLesson(-1));
lessonNext.addEventListener("click", () => moveLesson(1));
document.querySelector("[data-close-lesson]").addEventListener("click", () => lessonDialog.close());
lessonDialog.addEventListener("click", event => {
  if (event.target === lessonDialog) lessonDialog.close();
});
lessonContent.addEventListener("change", event => {
  const selected = event.target.closest('input[name="inline-answer"]');
  if (!selected || !inlineCheckSession || inlineCheckSession.answered) return;
  inlineCheckSession.selected = Number(selected.value);
  const checkButton = lessonContent.querySelector('[data-inline-action="check"]');
  if (checkButton) checkButton.disabled = false;
});
lessonContent.addEventListener("click", event => {
  const button = event.target.closest("[data-inline-action]");
  if (button) handleInlineAction(button.dataset.inlineAction);
});

document.querySelector("[data-close-assessment]").addEventListener("click", () => assessmentDialog.close());
assessmentDialog.addEventListener("click", event => {
  if (event.target === assessmentDialog) assessmentDialog.close();
});

themeButton.addEventListener("click", () => {
  state.preferences.theme = state.preferences.theme === "dark" ? "light" : "dark";
  applyPreferences();
  saveState();
});

settingsButton.addEventListener("click", () => {
  applyPreferences();
  settingsDialog.showModal();
});

settingsForm.addEventListener("submit", event => {
  event.preventDefault();
  const values = new FormData(settingsForm);
  state.preferences.weeklyHours = Number(values.get("weeklyHours"));
  state.preferences.readingSize = values.get("readingSize");
  state.preferences.accent = values.get("accent");
  applyPreferences();
  saveState();
  settingsDialog.close();
  showToast("Your learning space is ready.");
});

document.querySelectorAll("[data-close-settings]").forEach(button => {
  button.addEventListener("click", () => settingsDialog.close());
});
settingsDialog.addEventListener("click", event => {
  if (event.target === settingsDialog) settingsDialog.close();
});

assessmentBody.addEventListener("change", event => {
  const selected = event.target.closest('input[name="assessment-answer"]');
  if (!selected || quizSession.submitted) return;
  quizSession.selected = Number(selected.value);
  const submitButton = assessmentBody.querySelector('[data-quiz-action="submit"]');
  if (submitButton) submitButton.disabled = false;
});

assessmentBody.addEventListener("click", event => {
  const button = event.target.closest("[data-quiz-action]");
  if (!button || !quizSession) return;

  if (button.dataset.quizAction === "submit" && quizSession.selected !== null) {
    const question = quizSession.questions[quizSession.index];
    if (quizSession.selected === question[2]) quizSession.score += 1;
    quizSession.submitted = true;
    renderAssessment();
  } else if (button.dataset.quizAction === "next") {
    if (quizSession.index === quizSession.questions.length - 1) {
      finishAssessment();
    } else {
      quizSession.index += 1;
      quizSession.selected = null;
      quizSession.submitted = false;
      renderAssessment();
    }
  } else if (button.dataset.quizAction === "retry") {
    const moduleId = quizSession.moduleId;
    quizSession = { moduleId, questions: lessonEnrichments[moduleId].assessment.slice(1), index: 0, selected: null, submitted: false, score: 0, complete: false };
    renderAssessment();
  } else if (button.dataset.quizAction === "close") {
    assessmentDialog.close();
  }
});

document.getElementById("share-button").addEventListener("click", async () => {
  if (window.location.protocol === "file:") {
    showToast("Publish this site online before sharing its link.");
    return;
  }
  const shareData = { title: document.title, text: "Pragyavyn Nexus by Naveen Narasapuram: hands-on AI engineer essentials for beginners.", url: window.location.href };
  try {
    if (navigator.share) {
      await navigator.share(shareData);
    } else if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(window.location.href);
      showToast("Nexus link copied. Share it with a friend!");
    } else {
      window.prompt("Copy this link to share Pragyavyn Nexus:", window.location.href);
    }
  } catch (error) {
    if (error.name !== "AbortError") {
      console.error("Could not share Pragyavyn Nexus.", error);
      showToast("Sharing isn't available here. Copy the page address to share.");
    }
  }
});

function updateBackToTopButton() {
  backToTopButton.classList.toggle("visible", window.scrollY > 420);
}

window.addEventListener("scroll", updateBackToTopButton, { passive: true });
backToTopButton.addEventListener("click", () => {
  const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
  window.scrollTo({ top: 0, behavior });
});

applyPreferences();
renderFilters();
renderTracks();
updateBackToTopButton();
setInterval(updateTimer, 1000);
window.addEventListener("pagehide", saveState);
