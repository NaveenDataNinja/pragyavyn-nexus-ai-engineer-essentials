const lessonMaterials = {
  "0-0": {
    intro: "AI is the broad goal of making computers do tasks that seem intelligent. Machine learning (ML) is one way to do that: learn patterns from examples instead of writing every rule by hand. Deep learning is a family of ML methods built from layered neural networks.",
    points: ["A rule-based program follows rules people write; an ML model learns a rule-like pattern from data.", "Training uses examples to fit a model. Inference uses the fitted model to make a prediction.", "AI engineering combines models with data pipelines, software, evaluation and a usable product."],
    exampleLabel: "A student project that predicts whether a plant needs watering",
    code: "Sensor readings + past outcomes  →  training data\nML model learns a relationship      →  trained model\nNew sensor reading                  →  water / don't water",
    practice: "Choose an everyday problem (spam filtering, translation, or movie recommendations). Write down its inputs, the result you want, and two examples you could collect. Decide whether a fixed rule or learning from examples seems more suitable.",
    question: "Is every AI feature a deep-learning model?",
    answer: "No. AI is the broad category. A hand-written search rule or a small decision tree can be AI without deep learning. Deep learning is one subset of machine learning, which is itself one approach to AI."
  },
  "0-1": {
    intro: "A development environment is your workbench: an editor to change files, Python to run programs, and Git to record useful versions. Begin with a tiny script and verify each tool separately instead of installing everything at once.",
    points: ["Save Python code in a file ending in .py; run it with `python hello.py` (some systems use `python3`).", "The terminal runs commands in the current folder. `cd` changes folders and `dir` (Windows) or `ls` (macOS/Linux) lists files.", "Git records snapshots. A commit is a named checkpoint, not a backup of files you never added."],
    exampleLabel: "Your first Python file",
    code: "print(\"Hello, AI world!\")\n\n# In a terminal, from the folder containing hello.py:\npython hello.py",
    practice: "Create `hello.py`, run it, change the message, and run it again. Then run `git init`, `git add hello.py`, and `git commit -m \"Add first script\"`. If Git asks for your name/email, configure those values for Git.",
    question: "What does `git add` do, and does it save a commit?",
    answer: "`git add` stages selected changes for the next snapshot. `git commit` creates that snapshot. You normally use both, in that order."
  },
  "0-2": {
    intro: "Good programmers do not solve a whole unfamiliar problem in one leap. They clarify the expected result, split the task into small steps, try one step, and use evidence—output, tests, or an error message—to choose what to do next.",
    points: ["Write down inputs, outputs and rules before coding.", "Use pseudocode: plain-language steps that are precise enough to translate into code.", "When something fails, reproduce the smallest failing case and read the complete error from the bottom upward."],
    exampleLabel: "Plan before coding: average three marks",
    code: "Input: three marks\nCheck: each mark is between 0 and 100\nCalculate: (mark1 + mark2 + mark3) / 3\nOutput: average, formatted to 1 decimal place",
    practice: "Pick a small task such as converting minutes to hours. Write its input, output, one normal example, and one edge case before implementing it. Afterward, change one input and verify the result.",
    question: "Why test an edge case as well as a normal example?",
    answer: "A normal example shows the main path works. Edge cases—such as zero, an empty value, or the largest allowed input—often reveal assumptions the normal case never exercises."
  },
  "1-0": {
    intro: "A variable is a name that refers to a value. Python values have types: integers for whole numbers, floats for decimal numbers, strings for text, and booleans for True or False. `input()` always returns text, so convert it before arithmetic.",
    points: ["Use `int()` or `float()` to convert numeric text; invalid text raises `ValueError`.", "The `=` operator assigns a value. `==` compares two values.", "Readable names such as `temperature_c` explain intent better than `x`."],
    exampleLabel: "Convert Celsius to Fahrenheit",
    code: "temperature_c = float(input(\"Temperature in C: \"))\ntemperature_f = temperature_c * 9 / 5 + 32\nprint(f\"{temperature_c:.1f} C = {temperature_f:.1f} F\")",
    practice: "Write a kilometres-to-miles converter. Test 0 km and 5 km. Use 1 mile = 1.60934 kilometres, and label both units in the output.",
    question: "What type does `input()` return, even if the user types 42?",
    answer: "`input()` returns the string `\"42\"`. Convert it with `int()` or `float()` before treating it as a number."
  },
  "1-1": {
    intro: "Conditions let a program choose a path. A `for` loop is useful when going through a collection or known range; a `while` loop repeats until a condition changes. Indentation defines which statements belong to each block.",
    points: ["Use `if`, `elif` and `else` for mutually exclusive choices.", "`range(1, 5)` produces 1, 2, 3 and 4—the end value is excluded.", "A `while` loop must make progress toward stopping, or it may run forever."],
    exampleLabel: "Classify a score and calculate a total",
    code: "score = 76\nif score >= 90:\n    grade = \"A\"\nelif score >= 70:\n    grade = \"B\"\nelse:\n    grade = \"Needs more practice\"\n\nmarks = [76, 82, 91]\ntotal = 0\nfor mark in marks:\n    total += mark\nprint(grade, total)",
    practice: "Make a number-guessing game. Store a secret number, allow up to five guesses, give higher/lower hints, and stop early when the guess is correct.",
    question: "What is the last value produced by `range(2, 6)`?",
    answer: "5. The stop value 6 is excluded. The values are 2, 3, 4 and 5."
  },
  "1-2": {
    intro: "A function gives a name to a reusable operation. Parameters are inputs; `return` sends a result back to the caller. Functions make a program easier to test because each one can focus on a small responsibility.",
    points: ["Use `return` when the caller needs a result; `print` only displays text.", "Choose one clear responsibility per function.", "A function should handle or clearly document its expected inputs."],
    exampleLabel: "A function with a return value",
    code: "def celsius_to_fahrenheit(celsius):\n    return celsius * 9 / 5 + 32\n\nresult = celsius_to_fahrenheit(20)\nprint(result)  # 68.0",
    practice: "Write `calculate_total(price, quantity)` and `apply_discount(total, percent)`. Test zero quantity, a normal purchase, and a discount of 0%.",
    question: "What is the difference between returning 10 and printing 10?",
    answer: "`return 10` gives the value to the code that called the function, so it can be stored or used in another calculation. `print(10)` only sends visible text to the output."
  },
  "1-3": {
    intro: "Collections let you group related values. A list is ordered and changeable; a dictionary maps keys to values. Strings are immutable sequences of characters. Choose a collection based on how you need to access the data.",
    points: ["List positions start at 0; `items[-1]` is the final item.", "A dictionary lookup uses a key, such as `student[\"name\"]`.", "A comprehension can make a simple transformation readable: `[n * 2 for n in numbers]`."],
    exampleLabel: "A small gradebook using a dictionary",
    code: "grades = {\"Asha\": [82, 91], \"Ben\": [74, 80]}\nfor name, marks in grades.items():\n    average = sum(marks) / len(marks)\n    print(f\"{name}: {average:.1f}\")",
    practice: "Add a new student and three marks. Print the highest average and safely handle a student with no marks.",
    question: "Which collection is more convenient for looking up a student's marks by name: a list of names or a dictionary?",
    answer: "A dictionary: the name can be the key and the marks the value. Looking up the value by key is direct and expresses the relationship clearly."
  },
  "1-4": {
    intro: "Files let a program keep information after it exits. Use `with open(...)` so Python closes a file reliably. Errors are normal; catch only errors you know how to handle, and avoid hiding unexpected failures.",
    points: ["Specify `encoding=\"utf-8\"` when opening text files.", "Use `try`/`except` around operations that can fail for a known reason, such as parsing a number.", "A module is a Python file you can import; keep reusable functions separate from the code that runs the program."],
    exampleLabel: "Read a text file safely",
    code: "from pathlib import Path\n\npath = Path(\"notes.txt\")\ntry:\n    text = path.read_text(encoding=\"utf-8\")\nexcept FileNotFoundError:\n    print(\"Create notes.txt before reading it.\")\nelse:\n    print(text)",
    practice: "Write a program that appends one expense per line to a CSV file, then reads the file and calculates the total. Handle a malformed amount without losing the other valid rows.",
    question: "Why is `with open(...)` preferred over opening a file and hoping to close it later?",
    answer: "The `with` block closes the file even when an error occurs. This makes resource handling reliable and keeps the code simpler."
  },
  "1-5": {
    intro: "A class describes a kind of object; an object stores data and can provide related behavior. Use a class when a concept has state and operations that belong together. Tests check behavior with known inputs and expected results.",
    points: ["`__init__` initializes an object; `self` refers to that particular object.", "Keep fields and methods focused on the responsibility of the class.", "A test should assert observable behavior, including an important boundary case."],
    exampleLabel: "A tiny class and a direct assertion",
    code: "class Book:\n    def __init__(self, title):\n        self.title = title\n        self.is_borrowed = False\n\n    def borrow(self):\n        self.is_borrowed = True\n\nbook = Book(\"Data Basics\")\nbook.borrow()\nassert book.is_borrowed is True",
    practice: "Add a `return_book()` method and write assertions for borrowing and returning. Decide what should happen if someone borrows an already borrowed book.",
    question: "Why is a test with an `assert` useful even after a program appears to run?",
    answer: "It checks a specific expectation and fails visibly if later changes break it. A run that finishes without errors does not prove its result is correct."
  },
  "2-0": {
    intro: "A relational database stores related records in tables. A row is one record; a column is one attribute. A primary key identifies a row. SQL asks the database for data declaratively: describe what you want, not the loop used to find it.",
    points: ["`SELECT` chooses columns; `FROM` chooses a table.", "`WHERE` filters rows, `ORDER BY` sorts, and `LIMIT` caps returned rows.", "Use explicit column names instead of `SELECT *` in queries you plan to maintain."],
    exampleLabel: "Find second-year students in name order",
    code: "SELECT student_id, name\nFROM students\nWHERE year = 2\nORDER BY name\nLIMIT 20;",
    practice: "Given a `courses(course_id, title, credits)` table, write queries for all courses with at least 3 credits, sorted by credits descending.",
    question: "Does `WHERE` run after or before sorting in the logical query steps?",
    answer: "Filtering conceptually happens before `ORDER BY`: first select qualifying rows, then sort the result. The database may optimize execution while preserving that meaning."
  },
  "2-1": {
    intro: "A join combines rows from related tables. The join condition states how their keys correspond. NULL means a value is unknown or absent; it is not the same as zero or an empty string.",
    points: ["`INNER JOIN` returns matching pairs only; `LEFT JOIN` keeps every row from the left table.", "Use table aliases to make joined columns clear.", "Check for missing values with `IS NULL`, not `= NULL`."],
    exampleLabel: "List every student and any course they enrolled in",
    code: "SELECT s.name, e.course_id\nFROM students AS s\nLEFT JOIN enrollments AS e\n  ON e.student_id = s.student_id\nORDER BY s.name;",
    practice: "Join students to enrollments and count how many students have no enrollment. Explain why changing LEFT JOIN to INNER JOIN would change the result.",
    question: "Which join keeps a student who has no matching enrollment?",
    answer: "LEFT JOIN keeps each row from `students`; columns from `enrollments` are NULL when no matching enrollment exists."
  },
  "2-2": {
    intro: "Aggregate functions summarize groups of rows. `GROUP BY` forms the groups; `HAVING` filters those groups after aggregation. A CASE expression can turn conditions into readable categories.",
    points: ["`COUNT(*)` counts rows; `COUNT(column)` skips rows where that column is NULL.", "`WHERE` filters input rows before grouping; `HAVING` filters groups afterward.", "A subquery is a query nested inside another query; use it when it makes the logic clearer."],
    exampleLabel: "Count enrollments per course",
    code: "SELECT course_id, COUNT(*) AS enrollment_count\nFROM enrollments\nGROUP BY course_id\nHAVING COUNT(*) >= 10\nORDER BY enrollment_count DESC;",
    practice: "Add a CASE expression that labels each course `Popular` when it has at least 30 enrollments and `Growing` otherwise. Include a course with zero enrollments by joining from the courses table.",
    question: "Why would `WHERE COUNT(*) >= 10` be invalid in a grouped query?",
    answer: "`WHERE` filters individual input rows before the count exists. Use `HAVING COUNT(*) >= 10` to filter groups by their aggregate."
  },
  "2-3": {
    intro: "Good schemas make invalid states harder to store. A primary key identifies a row; a foreign key enforces a relationship. Transactions group updates so they either all succeed or are rolled back.",
    points: ["Normalize repeated facts into related tables to reduce inconsistent duplicate data.", "Use constraints such as `NOT NULL`, `UNIQUE` and foreign keys for data integrity.", "Pass user input as query parameters; never build SQL by concatenating untrusted text."],
    exampleLabel: "A constrained table and a parameterized Python query",
    code: "CREATE TABLE students (\n  student_id INTEGER PRIMARY KEY,\n  email TEXT NOT NULL UNIQUE,\n  year INTEGER CHECK (year BETWEEN 1 AND 4)\n);\n\ncursor.execute(\n    \"SELECT name FROM students WHERE student_id = ?\",\n    (student_id,)\n)",
    practice: "Design `students`, `courses` and `enrollments`. Give each table a primary key; make enrollment refer to a real student and course. Explain what happens if a transaction's second insert fails.",
    question: "Why is `WHERE student_id = ?` with a bound parameter safer than formatting the ID into the SQL string?",
    answer: "The database treats the parameter as a value, not as SQL syntax. This prevents input from changing the query structure and avoids common SQL injection bugs."
  },
  "3-0": {
    intro: "A vector is an ordered list of numbers that can represent an example, such as [height, hours studied]. Vector operations let us compare examples and combine signals. The dot product measures aligned contribution; magnitude measures length.",
    points: ["Vectors being compared must have the same number of components.", "For a=(a1,...,an) and b=(b1,...,bn), the dot product is the sum of corresponding products.", "Euclidean distance is the square root of the sum of squared component differences."],
    exampleLabel: "Dot product and distance by hand",
    code: "a = [1, 2]\nb = [3, 4]\ndot = 1 * 3 + 2 * 4       # 11\ndistance = ((3-1)**2 + (4-2)**2) ** 0.5  # about 2.83",
    practice: "Represent two movies by [action, comedy] ratings. Calculate their dot product and distance. Explain what a large distance means for your chosen rating scale.",
    question: "Can you take the dot product of a 2-value vector and a 3-value vector?",
    answer: "Not as a standard dot product: component-wise multiplication requires matching dimensions. First decide how to represent both objects with the same features."
  },
  "3-1": {
    intro: "A matrix is a rectangular grid of numbers. It can store a dataset (rows as examples, columns as features) or represent a transformation. Shape matters: an m×n matrix has m rows and n columns.",
    points: ["Matrix multiplication is defined when the left matrix's column count matches the right matrix's row count.", "Multiplying a matrix by a vector can rotate, scale or otherwise transform coordinates.", "In ML, matrix operations let one calculation process many examples together."],
    exampleLabel: "Scale points along x and y",
    code: "import numpy as np\n\nscale = np.array([[2, 0],\n                  [0, 3]])\npoint = np.array([4, 5])\nprint(scale @ point)  # [8 15]",
    practice: "Change the matrix to reflect points across the y-axis, then test it on [4, 5]. Write the shapes of the matrix and vector and the result.",
    question: "What is the shape of the result when a (2×3) matrix multiplies a (3×1) vector?",
    answer: "A (2×1) vector. The inner dimensions, 3 and 3, match; the outer dimensions, 2 and 1, form the result."
  },
  "3-2": {
    intro: "Descriptive statistics summarize observed data. Probability describes uncertainty about events. These tools help you describe a dataset before modeling and avoid treating a small sample as certainty.",
    points: ["The mean is sensitive to extreme values; the median is often more representative for skewed data.", "Variance and standard deviation describe spread around the mean.", "Correlation describes a linear association, not proof that one variable causes another."],
    exampleLabel: "A tiny dataset with an outlier",
    code: "values = [10, 11, 12, 13, 100]\nmean = sum(values) / len(values)  # 29.2\n# Sorted middle value (median): 12",
    practice: "Compare mean and median for [8, 9, 9, 10, 50]. Give one real reason the value 50 could occur and explain which summary better describes a typical observation.",
    question: "If two variables have a strong correlation, have you shown that one causes the other?",
    answer: "No. A third variable, selection effects, or coincidence can explain an association. Causal claims require an appropriate study design and additional evidence."
  },
  "3-3": {
    intro: "A derivative measures how a quantity changes when an input changes. In ML, a loss function measures model error. Gradient descent repeatedly adjusts parameters in the direction that reduces loss.",
    points: ["For a single parameter, the derivative is the slope of the loss curve at the current point.", "The learning rate controls step size: too large can overshoot; too small makes progress slow.", "For many parameters, the gradient contains one partial derivative per parameter."],
    exampleLabel: "One gradient-descent update",
    code: "# Minimize f(w) = (w - 3)^2\n# Its derivative is 2 * (w - 3)\nw = 0.0\nlearning_rate = 0.1\ngradient = 2 * (w - 3)\nw = w - learning_rate * gradient\nprint(w)  # 0.6, closer to 3",
    practice: "Repeat the update by hand three more times. Try a learning rate of 1.1 and notice how the value behaves. Explain why step size matters.",
    question: "Why does gradient descent subtract the gradient rather than add it?",
    answer: "The gradient points toward increasing loss locally. Subtracting a scaled gradient moves in the direction of decreasing loss, assuming a suitable step size."
  },
  "4-0": {
    intro: "NumPy arrays store values in compact, shaped collections and support operations over whole arrays. This vectorization is concise and usually much faster than writing Python loops for numerical work.",
    points: ["Use `.shape`, `.ndim` and `.dtype` to inspect an array.", "Indexing selects elements; slicing selects ranges; boolean masks filter values.", "Random results are easier to reproduce when you set a seed."],
    exampleLabel: "Filter and transform measurements",
    code: "import numpy as np\n\nrng = np.random.default_rng(7)\nreadings = rng.normal(20, 2, size=5)\nabove_target = readings[readings > 20]\nprint(np.round(above_target, 1))",
    practice: "Create an array of 10 simulated exam scores, select scores at least 50, and compute their mean. Print the shape and verify how many passed.",
    question: "If `a` has shape `(4, 3)`, how many rows and columns does it contain?",
    answer: "Four rows and three columns. Its total number of elements is 4 × 3 = 12."
  },
  "4-1": {
    intro: "Pandas provides labeled tables called DataFrames. A reliable analysis starts by checking column types, missing values, duplicates and unusual values before calculating results.",
    points: ["`read_csv` loads a CSV; `head`, `info` and `describe` give a first inspection.", "Use `isna()` to find missing values; choose whether to remove, fill or preserve them based on the question.", "Use `.loc` for label/condition selection and `groupby` for grouped summaries."],
    exampleLabel: "Inspect, filter and summarize",
    code: "import pandas as pd\n\ndf = pd.read_csv(\"students.csv\")\nprint(df.info())\nprint(df.isna().sum())\npassed = df.loc[df[\"score\"] >= 50]\nprint(passed.groupby(\"course\")[\"score\"].mean())",
    practice: "Load a CSV you can share publicly. Check missing values and duplicate rows, clean one issue, then calculate one grouped summary. Record each choice so someone else can reproduce it.",
    question: "Should you always replace missing numeric values with zero?",
    answer: "No. Zero may be a real measurement and can distort results. Investigate why values are missing, then choose a justified strategy such as leaving them missing, removing rows, or imputing a suitable statistic."
  },
  "4-2": {
    intro: "A chart is a tool for answering a question. Choose its form based on what you want to compare: bars for categories, lines for ordered time, histograms for a numeric distribution, and scatter plots for relationships.",
    points: ["Label axes with units and give the chart a question-focused title.", "Show enough context and a sensible scale; truncated axes can exaggerate differences.", "A chart communicates evidence, not causation by itself."],
    exampleLabel: "Compare average scores across courses",
    code: "import matplotlib.pyplot as plt\n\nmeans = df.groupby(\"course\")[\"score\"].mean()\nmeans.plot(kind=\"bar\")\nplt.ylabel(\"Average score (0-100)\")\nplt.title(\"Average score by course\")\nplt.tight_layout()\nplt.show()",
    practice: "Make one bar chart and one histogram from the same public dataset. Write one sentence each explaining what the chart shows and one thing it cannot prove.",
    question: "Which chart is a reasonable starting point for the distribution of exam scores?",
    answer: "A histogram: it groups a numeric variable into intervals and shows how many observations fall in each range."
  },
  "4-3": {
    intro: "Exploratory data analysis (EDA) is an iterative process: learn the data's structure, check its quality, summarize distributions, examine relationships, and refine a question. Exploration generates hypotheses; it does not automatically validate them.",
    points: ["Check the unit of observation: what does one row represent?", "Look for missing values, duplicates, impossible values and class imbalance.", "Separate observations from interpretations; mention sample limits and possible confounders."],
    exampleLabel: "A short EDA checklist",
    code: "1. State the question and expected unit of analysis.\n2. Inspect shape, columns, types, missing values and duplicates.\n3. Summarize key variables and plot useful distributions.\n4. Check plausible relationships and unusual cases.\n5. Write findings, caveats, and the next question.",
    practice: "Choose a public dataset and write a one-page notebook: question, source, data-quality checks, two charts, three findings, and one limitation. Do not make a causal claim from a simple correlation.",
    question: "Why should you state what one row represents before grouping or counting?",
    answer: "A row may represent a person, an event, or a person-event pair. Counting rows without knowing the unit can accidentally count the wrong thing."
  },
  "5-0": {
    intro: "Machine learning starts with a prediction problem: inputs (features) and a target (label). Split data into training and test sets before fitting. The test set estimates performance on unseen data, so it must not guide model choices.",
    points: ["A baseline is a simple reference, such as predicting the training-set mean or most common class.", "Data leakage happens when training uses information that would not be available at prediction time.", "Keep preprocessing learned from data inside the training process."],
    exampleLabel: "A safe first workflow",
    code: "1. Define the prediction moment and target.\n2. Split examples into train and test.\n3. Fit preprocessing and a simple baseline on train.\n4. Fit a candidate model on train.\n5. Evaluate once on test; inspect errors and caveats.",
    practice: "For a house-price dataset, define the target, three possible features, the prediction moment, and a baseline. Identify one column that might leak information unavailable when estimating a price.",
    question: "Why shouldn't you repeatedly tune models using the test set?",
    answer: "Repeated choices based on test results indirectly fit the test set. Its score becomes optimistic and no longer provides an independent estimate of generalization."
  },
  "5-1": {
    intro: "Regression predicts a numeric value. In simple linear regression, the model predicts `y = b + wx`, where `w` is a learned slope and `b` is an intercept. Residuals are the differences between actual and predicted values.",
    points: ["Mean absolute error (MAE) is the average absolute prediction error in target units.", "A large residual can reveal an outlier, missing feature or model weakness.", "Feature scaling is useful for some algorithms; fit scaling on training data only."],
    exampleLabel: "Fit and evaluate a simple model",
    code: "from sklearn.linear_model import LinearRegression\nfrom sklearn.metrics import mean_absolute_error\n\nmodel = LinearRegression()\nmodel.fit(X_train, y_train)\npredictions = model.predict(X_test)\nprint(mean_absolute_error(y_test, predictions))",
    practice: "Train a regression model on a permitted dataset. Compare it to a mean-prediction baseline using MAE. Plot actual versus predicted values and inspect at least three large errors.",
    question: "If MAE is 4.2 and the target is measured in hours, what does that roughly mean?",
    answer: "On the evaluated examples, predictions differ from actual values by about 4.2 hours on average in absolute terms. It does not say every prediction is off by exactly that amount."
  },
  "5-2": {
    intro: "Classification predicts a category, such as spam/not spam. A model may output a score or probability; a threshold turns it into a class. A confusion matrix counts true positives, false positives, true negatives and false negatives.",
    points: ["Accuracy can look high on imbalanced data; inspect precision, recall and a confusion matrix.", "Precision asks how many predicted positives were truly positive; recall asks how many actual positives were found.", "Choose a threshold based on the cost of different errors in the real task."],
    exampleLabel: "Train and measure a classifier",
    code: "from sklearn.linear_model import LogisticRegression\nfrom sklearn.metrics import classification_report\n\nmodel = LogisticRegression(max_iter=1000)\nmodel.fit(X_train, y_train)\npredictions = model.predict(X_test)\nprint(classification_report(y_test, predictions))",
    practice: "Use a public classification dataset. Compare a majority-class baseline with logistic regression. If missing a positive case is costly, explain which metric and threshold you would inspect.",
    question: "For a screening system where missing a real positive is especially costly, which metric deserves close attention?",
    answer: "Recall, because it measures the proportion of actual positive cases the system finds. You should still examine false positives and make the trade-off explicit."
  },
  "5-3": {
    intro: "A decision tree asks a sequence of feature-based questions. Deep trees can memorize training examples. Random forests average many trees trained with variation, which often reduces variance and improves robustness.",
    points: ["Limit tree depth or minimum leaf size to reduce overfitting.", "Evaluate on held-out data; a great training score alone is not evidence of generalization.", "Feature importance can be misleading with correlated features and is not a causal explanation."],
    exampleLabel: "Compare a shallow tree with a forest",
    code: "from sklearn.tree import DecisionTreeClassifier\nfrom sklearn.ensemble import RandomForestClassifier\n\ntree = DecisionTreeClassifier(max_depth=4, random_state=7)\nforest = RandomForestClassifier(n_estimators=100, random_state=7)\ntree.fit(X_train, y_train)\nforest.fit(X_train, y_train)\nprint(tree.score(X_test, y_test), forest.score(X_test, y_test))",
    practice: "Train trees with depth 2, 5 and no limit; compare training and validation scores. Explain which result suggests overfitting.",
    question: "What pattern suggests a decision tree is overfitting?",
    answer: "Training performance is much better than validation or test performance. The tree fits details specific to its training examples rather than patterns that generalize."
  },
  "5-4": {
    intro: "Reliable evaluation repeats the training process on multiple splits and keeps preprocessing connected to model fitting. A scikit-learn Pipeline helps prevent leakage by fitting transformations only on each training fold.",
    points: ["Cross-validation estimates variability across several train/validation splits.", "A pipeline keeps imputation, scaling and model fitting together.", "Choose metrics before comparing models and reserve a final test set for the last evaluation."],
    exampleLabel: "A preprocessing and model pipeline",
    code: "from sklearn.pipeline import make_pipeline\nfrom sklearn.impute import SimpleImputer\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.linear_model import LogisticRegression\n\nmodel = make_pipeline(\n    SimpleImputer(), StandardScaler(), LogisticRegression(max_iter=1000)\n)\nmodel.fit(X_train, y_train)",
    practice: "Build a pipeline for a dataset with missing numeric values. Compare two models with cross-validation using one chosen metric, then evaluate the selected approach once on the held-out test set.",
    question: "Why put an imputer or scaler inside a cross-validated pipeline?",
    answer: "Each fold must learn its imputation values or scaling statistics from that fold's training portion only. A pipeline enforces this and prevents validation data leaking into preprocessing."
  },
  "6-0": {
    intro: "A neural network applies layers of weighted calculations and nonlinear activations. Training adjusts the weights to reduce a loss function. Without nonlinear activations, stacking layers would still behave like one linear transformation.",
    points: ["A forward pass converts inputs into predictions; a loss compares predictions with targets.", "Backpropagation calculates how each weight contributed to the loss.", "An optimizer uses gradients to update weights; training data is often processed in mini-batches."],
    exampleLabel: "One neuron computes a weighted sum",
    code: "inputs = [2.0, 1.0]\nweights = [0.5, -1.0]\nbias = 0.25\nscore = sum(x * w for x, w in zip(inputs, weights)) + bias\nprint(score)  # 0.25",
    practice: "Draw a network with two input features, one hidden layer and one output. Label where the prediction, loss and gradient update happen.",
    question: "What does the loss function tell a training loop?",
    answer: "It gives a numerical measure of how different predictions are from the desired targets. The optimizer uses its gradients to adjust model parameters."
  },
  "6-1": {
    intro: "PyTorch tensors are multi-dimensional arrays that can live on a CPU or compatible accelerator. Autograd records operations and computes gradients. A training loop alternates between predictions, loss, gradients and parameter updates.",
    points: ["`model.train()` enables training behavior; use `model.eval()` for evaluation.", "Clear old gradients before each update with `optimizer.zero_grad()`.", "Use `torch.no_grad()` for evaluation to avoid storing unnecessary gradient history."],
    exampleLabel: "A minimal PyTorch training step",
    code: "import torch\nfrom torch import nn\n\nmodel = nn.Linear(1, 1)\noptimizer = torch.optim.SGD(model.parameters(), lr=0.01)\nloss_fn = nn.MSELoss()\n\nprediction = model(x_train)\nloss = loss_fn(prediction, y_train)\noptimizer.zero_grad()\nloss.backward()\noptimizer.step()",
    practice: "Train a one-layer model on a tiny synthetic dataset where y is approximately 2x + 1. Print loss every few epochs and compare predictions before and after training.",
    question: "What would happen if you forgot `optimizer.zero_grad()` in this loop?",
    answer: "PyTorch accumulates gradients by default. Gradients from earlier batches would be added to new ones, changing the intended update. Clear them before each backward pass."
  },
  "6-2": {
    intro: "Images are arrays: typically height × width × channels. A convolutional layer applies small learned filters across local regions, helping a model recognize patterns such as edges and textures. Pooling can reduce spatial dimensions.",
    points: ["Check image shape, color-channel order and pixel range before training.", "A batch adds a leading dimension: batch × channels × height × width in common PyTorch CNNs.", "Inspect examples the model gets wrong; aggregate accuracy can hide important failure patterns."],
    exampleLabel: "A basic convolution block",
    code: "import torch.nn as nn\n\nfeatures = nn.Sequential(\n    nn.Conv2d(3, 16, kernel_size=3, padding=1),\n    nn.ReLU(),\n    nn.MaxPool2d(2)\n)\n# Input: (batch, 3, 32, 32)\n# Output: (batch, 16, 16, 16)",
    practice: "Take a small labeled image dataset. Display a few samples with their labels, confirm the tensor shape, and report which two classes your model confuses most.",
    question: "For a 32×32 image, what does a 2×2 pooling operation with stride 2 typically do to height and width?",
    answer: "It halves both dimensions, producing 16×16 spatial dimensions. The number of channels is unchanged by pooling."
  },
  "6-3": {
    intro: "Language models process token IDs, not raw words. An embedding maps each token to a vector. Attention lets each token combine information from other positions; transformers repeat attention and feed-forward layers.",
    points: ["Tokenization can split a word into multiple pieces; token count is not exactly word count.", "In self-attention, queries and keys determine relevance while values carry information to combine.", "Causal language models mask future positions so a token is predicted using only earlier context."],
    exampleLabel: "The shape idea behind scaled dot-product attention",
    code: "# Q, K, and V contain token representations\nscores = Q @ K.transpose(-2, -1) / (head_dim ** 0.5)\nweights = scores.softmax(dim=-1)\ncontext = weights @ V",
    practice: "Write a sentence and compare its word count with a tokenizer's token count. Draw arrows between tokens that should influence one another, then explain why a causal model masks future tokens.",
    question: "Why divide attention scores by the square root of the key dimension?",
    answer: "It controls score magnitude as vector dimensions grow, helping the softmax avoid becoming excessively peaked and supporting more stable gradients."
  },
  "7-0": {
    intro: "Text models convert text into tokens and then vectors. An embedding places a token or passage in a numeric space where distance or direction can reflect learned relationships. Similarity is useful, but it is not proof two statements mean exactly the same thing.",
    points: ["Tokenization is model-specific; inspect actual tokens when debugging context limits.", "Embeddings can represent words, sentences or document chunks.", "Normalize vectors when using cosine similarity, and evaluate retrieval on examples from your own task."],
    exampleLabel: "Compare two normalized vectors with cosine similarity",
    code: "import numpy as np\n\na = np.array([1.0, 0.0])\nb = np.array([0.8, 0.2])\ncosine = np.dot(a, b) / (np.linalg.norm(a) * np.linalg.norm(b))\nprint(round(cosine, 3))  # 0.970",
    practice: "Create five short questions and five candidate passages. Retrieve the closest passage for each question using an embedding tool or a tiny hand-made vector example. Note one misleading match.",
    question: "Does a high embedding similarity guarantee that a retrieved answer is correct?",
    answer: "No. Similarity is a retrieval signal, not a truth check. The passage may be related but incomplete, outdated or contradictory; verify the content and evaluate retrieval on real examples."
  },
  "7-1": {
    intro: "A large language model (LLM) estimates a distribution over the next token given previous tokens. Repeating that process generates a response. The model's fluent output is a prediction, not a built-in guarantee of factuality.",
    points: ["The context window limits how much input and generated text can be considered at once.", "Sampling settings affect variety and repeatability; they do not add knowledge.", "Model quality depends on the task, prompt, context, training data and evaluation."],
    exampleLabel: "Next-token generation, simplified",
    code: "context:  \"The capital of France is\"\nmodel scores next tokens:\n  \" Paris\"  0.91\n  \" Lyon\"   0.02\n  ...\nchoose a token, append it, then predict again",
    practice: "Ask a language model the same question with and without relevant context. Compare answers, identify a claim that needs verification, and record how you would check it.",
    question: "Why can an LLM produce a confident but incorrect answer?",
    answer: "Its core objective is to generate likely continuations from learned patterns and supplied context. Fluency is not evidence that a claim has been checked against a reliable source."
  },
  "7-2": {
    intro: "Retrieval-augmented generation (RAG) searches a collection for relevant passages and supplies them to a language model as context. It can help answer questions about specific documents, but it does not guarantee that retrieval or generation is correct.",
    points: ["A basic RAG flow: split documents, embed chunks, retrieve candidates, build a grounded prompt, generate, and inspect sources.", "Chunk size and overlap affect what evidence is retrieved; tune them using real questions.", "Ask the model to say when the supplied context does not contain the answer."],
    exampleLabel: "A simple grounded prompt template",
    code: "Answer using only the supplied context.\nIf the context does not contain the answer, say \"I don't know.\"\nCite the passage IDs you used.\n\nContext:\n[doc-12] ...\n\nQuestion: ...",
    practice: "Use three non-sensitive notes as documents. Write five answerable and two unanswerable questions. For each, save the retrieved passage, generated answer and whether the answer is supported.",
    question: "What should a reliable RAG assistant do when retrieval returns no relevant evidence?",
    answer: "It should abstain or clearly state that the available context is insufficient, rather than inventing a source. The application should also make it possible to inspect retrieval quality."
  },
  "7-3": {
    intro: "Evaluation means deciding what good performance means before deployment. For a generative AI feature, inspect task success, factual grounding, refusal behavior, latency, cost and harmful or privacy-sensitive failures.",
    points: ["Build a small representative evaluation set, including normal, difficult and out-of-scope examples.", "Use rubrics and human review for qualities that a simple exact-match score cannot measure.", "Do not put secrets or personal data into prompts or logs unless the system is explicitly approved to handle them."],
    exampleLabel: "A per-answer review record",
    code: "question_id: Q04\nexpected_evidence: handbook section 2\nretrieved_sources: [section-2]\nanswer_supported: yes / no / partial\nsafe_and_private: yes / no\nnotes: what failed and how to reproduce it",
    practice: "Write ten test questions for your Q&A prototype, including one ambiguous and one unanswerable question. Score evidence support and note a concrete change for the most common failure.",
    question: "Why include unanswerable questions in an AI assistant's evaluation set?",
    answer: "They test whether the system can recognize insufficient evidence and abstain, rather than making up a plausible response."
  },
  "8-0": {
    intro: "An API gives another program a defined way to use your model. A prediction endpoint should validate its input, call a known model version, return a documented response and report failures without leaking sensitive details.",
    points: ["Use a request schema so malformed input is rejected clearly.", "Load the model once when the application starts, not once per request.", "Test valid input, invalid input and model failure; expose only information clients need."],
    exampleLabel: "A small FastAPI prediction endpoint",
    code: "from fastapi import FastAPI\nfrom pydantic import BaseModel\n\napp = FastAPI()\nclass Features(BaseModel):\n    hours_studied: float\n\n@app.post(\"/predict\")\ndef predict(item: Features):\n    prediction = model.predict([[item.hours_studied]])\n    return {\"prediction\": float(prediction[0])}",
    practice: "Wrap a saved toy model in an endpoint. Try one valid request and one invalid type; document the request and response shape. Do not expose debug traces or model files publicly.",
    question: "Why validate request fields before passing them to a model?",
    answer: "Validation catches missing, malformed or out-of-range inputs at the application boundary and lets the API return a clear client error instead of an obscure model failure."
  },
  "8-1": {
    intro: "A reproducible project lets another person install it and get comparable results. Separate source code, data references, experiments and documentation. Record dependencies and random seeds, and avoid committing credentials or private data.",
    points: ["A README should explain purpose, setup, how to run tests, and known limitations.", "A virtual environment isolates project dependencies; a dependency file records what to install.", "Containers package an application environment to make deployment more consistent, but they do not replace security or data management."],
    exampleLabel: "A small project structure",
    code: "project/\n  README.md\n  requirements.txt\n  src/\n  tests/\n  notebooks/\n  .gitignore",
    practice: "Create a clean project folder for one earlier exercise. Add a README with setup/run steps, a requirements file if needed, a test, and a `.gitignore`. Ask a classmate to follow the instructions.",
    question: "What should you do with an API key before publishing a project repository?",
    answer: "Keep it out of source control. Load it from a protected environment variable or approved secret manager, and rotate it if it was ever committed."
  },
  "8-2": {
    intro: "A capstone brings the course together around a small, well-defined user problem. A useful project is not necessarily a complicated model: a clear baseline, reliable data handling and honest evaluation often matter more.",
    points: ["Define a user, a question, inputs, output and a measurable success criterion.", "Build the smallest end-to-end version first; compare it to a simple baseline.", "Keep a held-out evaluation, inspect failure cases, and state what the system should not be used for."],
    exampleLabel: "A four-sprint capstone plan",
    code: "Sprint 1: question, data permissions, baseline and evaluation plan\nSprint 2: clean pipeline and first model / AI feature\nSprint 3: usable interface, tests and error handling\nSprint 4: evaluate, document limitations, demo and polish",
    practice: "Write a one-page project brief: problem, intended user, data source and permission, baseline, metric, risks, four milestones and a finish condition. Choose data that is public or that you are authorized to use.",
    question: "Why build a baseline before choosing a complex model?",
    answer: "A baseline gives you a reference point, catches data or evaluation mistakes early, and helps determine whether added complexity improves the result enough to justify it."
  },
  "8-3": {
    intro: "A strong portfolio entry explains a problem and your engineering decisions, not only a score. Responsible practice includes protecting privacy, checking who may be harmed by errors, and describing uncertainty and limitations.",
    points: ["Show the problem, your contribution, data provenance, method, evaluation and what you learned.", "Look for uneven performance across relevant groups when it is appropriate and lawful to do so.", "Never imply a project is production-ready if it has not been tested for real users, security and failure handling."],
    exampleLabel: "A concise portfolio outline",
    code: "Problem and intended user\nData source, permissions and constraints\nApproach and baseline\nEvaluation results and example failures\nHow to run the demo\nLimitations, risks and next improvement",
    practice: "Draft a portfolio entry for your capstone. Ask a peer to identify the intended user, evidence for your main claim, one limitation and how to reproduce the demo.",
    question: "What is more useful than reporting only the best model score?",
    answer: "Explain the baseline, evaluation setup, representative failures, limitations and the evidence supporting your claim. This lets others judge whether the result is meaningful and reproducible."
  }
};
