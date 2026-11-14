const lessonEnrichments = {
  "0-0": {
    story: "Your class wants to flag suspicious messages in a shared inbox. The examples are messages already marked as spam or safe; a model can learn patterns from those labels.",
    steps: ["Name the input: words and sender details in a message.", "Name the output: a spam score or safe/spam label.", "Train with labeled examples, then test on messages the model has never seen."],
    visual: "ai-flow",
    assessment: [
      ["Which statement best describes machine learning?", ["People write every decision rule by hand.", "A program learns patterns from examples.", "A computer stores files in folders."], 1, "ML fits patterns from examples instead of requiring a person to write every rule."],
      ["What does inference mean?", ["Using a trained model to make a prediction.", "Collecting the training examples.", "Deleting the model after training."], 0, "Inference is the stage where a fitted model receives new input and returns a prediction."],
      ["Which relationship is correct?", ["Deep learning is one type of machine learning.", "AI is one small type of deep learning.", "Every AI program must use a neural network."], 0, "Deep learning is a subset of ML, and ML is one approach within the wider field of AI."]
    ]
  },
  "0-1": {
    story: "You want to keep a tiny course calculator on your laptop. Python runs the file; Git lets you save a checkpoint before changing it.",
    steps: ["Create a folder and save code as `hello.py`.", "Run `python hello.py` from that folder and inspect the output.", "Stage the file and commit it so you can return to this version."],
    visual: "workspace",
    assessment: [
      ["Which command runs `hello.py` in a typical Python setup?", ["python hello.py", "open hello.py", "git hello.py"], 0, "The Python interpreter runs the script with `python hello.py` (or `python3 hello.py` on some systems)."],
      ["What does `git commit` create?", ["A saved version of staged changes.", "A Python virtual machine.", "A new folder on the internet."], 0, "A commit records a named snapshot of the staged changes in the repository."]
    ]
  },
  "0-2": {
    story: "Before writing a grade calculator, decide exactly what counts as a valid mark and what result the student should see.",
    steps: ["Write down the inputs and expected output.", "Turn the task into small, ordered instructions.", "Try a normal case and a boundary case such as 0 or 100."],
    visual: "steps",
    assessment: [
      ["What should you clarify before coding a new task?", ["Inputs, expected output and rules.", "The color of the keyboard.", "The name of every future variable."], 0, "Clear inputs, outputs and rules give you a testable target before implementation."],
      ["Why test a boundary case?", ["It checks assumptions at the edge of allowed values.", "It makes the program run faster.", "It replaces the need to read errors."], 0, "Boundary cases expose assumptions that a typical example may not reveal."]
    ]
  },
  "1-0": {
    story: "A student enters a temperature as text. Convert it to a number before using the conversion formula.",
    steps: ["Read the input; remember it starts as a string.", "Convert it with `float()` and store it in a clearly named variable.", "Calculate and print the value with units."],
    visual: "value-flow",
    assessment: [
      ["What type does `input()` return?", ["Always an integer.", "A string.", "A Boolean."], 1, "`input()` returns text; convert it before numeric calculations."],
      ["Which operator compares two values for equality?", ["=", "==", ":="], 1, "`==` compares values. A single `=` assigns a value to a variable."]
    ]
  },
  "1-1": {
    story: "A campus club gives a certificate to students with at least 80 points and needs to count how many students qualified.",
    steps: ["Use `if` to decide whether one score meets the rule.", "Use a `for` loop to examine every score.", "Update the count only for qualifying students."],
    visual: "decision",
    assessment: [
      ["What values does `range(1, 4)` produce?", ["1, 2, 3", "1, 2, 3, 4", "0, 1, 2, 3, 4"], 0, "The stop value is excluded, so the sequence is 1, 2, 3."],
      ["What can make a `while` loop never end?", ["Its stopping condition never becomes true.", "It uses a variable.", "It is indented."], 0, "A while-loop body must make progress toward a condition that eventually stops the loop."]
    ]
  },
  "1-2": {
    story: "Several screens in a gradebook need the same average calculation. A function lets each screen reuse one tested rule.",
    steps: ["Put the reusable calculation inside a function.", "Pass the marks as an argument.", "Return the average so the caller can display or reuse it."],
    visual: "function",
    assessment: [
      ["What does `return` do in a function?", ["Sends a result back to its caller.", "Only prints a value on screen.", "Repeats the function forever."], 0, "`return` gives the result back to the code that called the function."],
      ["Which function name is clearest for converting Celsius to Fahrenheit?", ["f", "convert_temperature", "thing"], 1, "A descriptive name makes the function's purpose clear at its call site."]
    ]
  },
  "1-3": {
    story: "A class gradebook needs to look up each student's marks by name and calculate an average.",
    steps: ["Use a dictionary to connect each student's name to their marks.", "Loop through its name-and-marks pairs.", "Calculate and display each average; handle an empty marks list."],
    visual: "collections",
    assessment: [
      ["Which structure is suited to look up marks by a student's name?", ["A dictionary keyed by name.", "A single number.", "A comment."], 0, "A dictionary maps each name (key) to the associated marks (value)."],
      ["What is the index of the first list element?", ["0", "1", "-1 only"], 0, "Python list indexes start at zero."]
    ]
  },
  "1-4": {
    story: "An expense tracker should still know last week's spending after the program closes, so it saves entries in a file.",
    steps: ["Open the file with a `with` block and UTF-8 encoding.", "Parse and validate each row separately.", "Handle known missing or malformed data without hiding unrelated errors."],
    visual: "file-flow",
    assessment: [
      ["Why use `with open(...)`?", ["It closes the file reliably after the block.", "It encrypts the file automatically.", "It prevents every possible error."], 0, "The context manager closes the file even if an exception occurs."],
      ["What should you catch when a required file may not exist?", ["FileNotFoundError.", "Every error with a silent `except`.", "KeyboardInterrupt."], 0, "Catch the specific expected error and explain how the user can resolve it."]
    ]
  },
  "1-5": {
    story: "A library app represents each book with a title and whether it is currently borrowed.",
    steps: ["Define a `Book` class to describe the shared structure.", "Create separate book objects with their own state.", "Test borrowing and returning with assertions."],
    visual: "objects",
    assessment: [
      ["What is an object?", ["A particular instance created from a class.", "A Python comment.", "A folder containing packages."], 0, "A class describes a kind of thing; an object is one instance with its own state."],
      ["What does `assert condition` do when the condition is false?", ["Raises an assertion failure.", "Changes the condition to true.", "Skips all later tests."], 0, "An assertion fails visibly when the expected condition does not hold."]
    ]
  },
  "2-0": {
    story: "The department office wants a list of second-year courses, sorted by course title.",
    steps: ["Select the columns the office needs.", "Filter rows with the year or credit rule.", "Sort the result and limit it if the list is large."],
    visual: "table",
    assessment: [
      ["Which SQL clause filters rows?", ["WHERE", "ORDER BY", "LIMIT"], 0, "`WHERE` keeps rows that satisfy a condition."],
      ["What does a primary key do?", ["Uniquely identifies a row.", "Sorts every query automatically.", "Stores a chart."], 0, "A primary key provides a unique identifier for each table row."]
    ]
  },
  "2-1": {
    story: "A course report should show each student's name and enrolled course, including students who have not enrolled yet.",
    steps: ["Identify the student and enrollment tables.", "Join them using the shared student ID.", "Use a LEFT JOIN so students without enrollment remain in the report."],
    visual: "join",
    assessment: [
      ["Which join keeps every row from its left-hand table?", ["LEFT JOIN", "INNER JOIN", "CROSS JOIN"], 0, "LEFT JOIN keeps all left-side rows and fills unmatched right-side columns with NULL."],
      ["How do you test for missing SQL data?", ["column IS NULL", "column = NULL", "column == empty"], 0, "SQL uses `IS NULL`; NULL does not compare equal with `=`."]
    ]
  },
  "2-2": {
    story: "An advisor wants to identify courses with at least ten current enrollments.",
    steps: ["Group enrollment rows by course.", "Count the rows in each group.", "Use HAVING to keep groups whose count reaches ten."],
    visual: "aggregate",
    assessment: [
      ["Which clause filters groups by an aggregate like COUNT(*)?", ["HAVING", "WHERE", "FROM"], 0, "`HAVING` filters after rows have been grouped and aggregated."],
      ["When does WHERE filter rows?", ["Before grouping.", "After HAVING.", "Only after sorting."], 0, "`WHERE` filters individual input rows before GROUP BY forms groups."]
    ]
  },
  "2-3": {
    story: "An enrollment record must refer to a real student and a real course; a partial update should not leave half a registration saved.",
    steps: ["Add primary and foreign keys to represent identities and relationships.", "Add constraints to prevent invalid rows.", "Use a transaction for related updates and bound parameters for user input."],
    visual: "schema",
    assessment: [
      ["What does a foreign key help enforce?", ["A relationship to a row in another table.", "A specific font in a report.", "A query's sort order."], 0, "A foreign key ensures the referenced record exists, subject to the database's constraints."],
      ["How should user input be included in a SQL query?", ["As a bound parameter.", "By concatenating it into SQL text.", "By deleting quote characters only."], 0, "Bound parameters keep input as a value instead of executable SQL syntax."]
    ]
  },
  "3-0": {
    story: "Represent each student's quiz results as a vector so you can compare two students' performance across the same quizzes.",
    steps: ["Use the same feature order for every student.", "Multiply matching components and add them for a dot product.", "Use distance to measure how far apart the two vectors are."],
    visual: "vector",
    assessment: [
      ["What must be true before taking the dot product of two vectors?", ["They have the same number of components.", "They contain only positive numbers.", "They have the same name."], 0, "A dot product pairs corresponding components, so dimensions must match."],
      ["What does Euclidean distance summarize?", ["Straight-line separation between vector points.", "The number of list items.", "A probability."], 0, "Euclidean distance is the straight-line distance between two points in the feature space."]
    ]
  },
  "3-1": {
    story: "A graphics club enlarges a drawing by scaling every x-coordinate by two and every y-coordinate by three.",
    steps: ["Write the scale factors on the matrix diagonal.", "Multiply the matrix by a point vector.", "Check the output dimensions and whether the point moved as expected."],
    visual: "matrix",
    assessment: [
      ["When can an m×n matrix multiply an r×p matrix?", ["When n equals r.", "When m equals p only.", "Only when all dimensions are equal."], 0, "The inner dimensions must match: n = r."],
      ["A 2×3 matrix times a 3×1 vector produces what shape?", ["2×1", "3×3", "1×2"], 0, "The outer dimensions give a 2×1 result."]
    ]
  },
  "3-2": {
    story: "One student's score is entered as 1000 by mistake. Compare mean and median to decide which better describes the class's typical score.",
    steps: ["Sort the values and find the middle value for the median.", "Calculate the mean by adding values and dividing by count.", "Investigate extreme values before deciding how to summarize them."],
    visual: "distribution",
    assessment: [
      ["Which summary is usually less affected by one extreme outlier?", ["Median.", "Mean.", "Maximum."], 0, "The median depends on rank, so one very large value usually affects it less than the mean."],
      ["Does correlation alone prove that one variable causes another?", ["No.", "Yes, whenever it is strong.", "Only if both are numeric."], 0, "Correlation is an association; confounding or other factors can explain it."]
    ]
  },
  "3-3": {
    story: "A model's predictions are too high. Gradient descent adjusts its parameters little by little to reduce prediction error.",
    steps: ["Calculate the loss at the current parameter.", "Find the slope: which direction increases loss?", "Move against the slope by a learning-rate-sized step and recalculate."],
    visual: "gradient",
    assessment: [
      ["Which direction does gradient descent move?", ["Against the gradient to reduce loss.", "Along the gradient to increase loss.", "In a random direction every time."], 0, "The gradient points toward local increase; subtracting it moves toward local decrease."],
      ["What can a learning rate that is too large cause?", ["Overshooting or unstable updates.", "A guaranteed perfect model.", "The dataset to become sorted."], 0, "Large updates can jump over a minimum and make the loss oscillate or grow."]
    ]
  },
  "4-0": {
    story: "An engineering lab generates sensor readings and needs to select values above a safe temperature without writing a slow manual loop.",
    steps: ["Put readings into a NumPy array and inspect its shape.", "Build a Boolean mask for readings above the threshold.", "Use the mask to select and summarize only those readings."],
    visual: "array",
    assessment: [
      ["What does `a.shape` tell you?", ["The dimensions of an array.", "The average of the values.", "The file name."], 0, "The shape gives the number of elements along each dimension."],
      ["What does `readings[readings > 20]` do?", ["Selects values above 20.", "Changes every value to 20.", "Sorts the readings."], 0, "The condition creates a Boolean mask used to select matching array elements."]
    ]
  },
  "4-1": {
    story: "A student survey CSV has blank course names and repeated submissions. Inspect and clean it before comparing course results.",
    steps: ["Load the file, inspect types and count missing values.", "Choose a justified rule for duplicates and missing data.", "Group by course and calculate the summary that answers your question."],
    visual: "dataframe",
    assessment: [
      ["What should you do before replacing missing values?", ["Investigate what the missing values mean.", "Always replace them with zero.", "Delete the entire dataset."], 0, "The right treatment depends on why values are missing and what zero means for that variable."],
      ["What does `groupby(\"course\")` help you do?", ["Summarize records separately for each course.", "Change course names into files.", "Sort rows randomly."], 0, "Grouping makes it possible to calculate per-course summaries such as mean score."]
    ]
  },
  "4-2": {
    story: "A class wants to compare average scores across courses and see how score values are distributed.",
    steps: ["Use a bar chart for category averages.", "Use a histogram for the distribution of numeric scores.", "Add labels, units and a title describing the question."],
    visual: "chart",
    assessment: [
      ["Which chart is a good starting point for a numeric score distribution?", ["Histogram.", "Pie chart.", "Network diagram."], 0, "A histogram groups numeric values into intervals and shows their frequency."],
      ["What should a useful chart axis include?", ["A label and units when applicable.", "Only decorative text.", "No scale information."], 0, "Labels and units help readers interpret what values represent."]
    ]
  },
  "4-3": {
    story: "Before claiming that sleep improves grades, first inspect how the survey was collected, what each row represents, and whether other factors could explain the pattern.",
    steps: ["State the question and define one row of data.", "Check quality, distributions and useful relationships.", "Write findings separately from interpretations and caveats."],
    visual: "eda",
    assessment: [
      ["Why identify the unit of observation?", ["So counts and summaries refer to the right entity.", "To choose a chart color.", "To increase the sample size."], 0, "A row could mean a student, an exam or a student-exam pair; the unit changes what counts mean."],
      ["What does exploratory analysis establish by itself?", ["Patterns worth investigating, not automatic causation.", "That every correlation is causal.", "That missing data can be ignored."], 0, "EDA helps describe and generate questions; causal conclusions require stronger evidence."]
    ]
  },
  "5-0": {
    story: "A campus help desk wants to predict ticket resolution time using details known when the ticket first arrives.",
    steps: ["Define the prediction time, target and available features.", "Split data before fitting or choosing preprocessing.", "Compare a simple baseline with a model and keep a final test set untouched."],
    visual: "ml-pipeline",
    assessment: [
      ["What is data leakage?", ["Training uses information unavailable at prediction time.", "The test set contains rows.", "A model has a name."], 0, "Leakage gives the model information it would not legitimately have when making a real prediction."],
      ["Why start with a baseline?", ["It gives a simple reference for judging model value.", "It guarantees deployment.", "It avoids needing labels."], 0, "A baseline reveals whether a more complex approach improves on a simple, transparent reference."]
    ]
  },
  "5-1": {
    story: "Estimate the time a campus shuttle takes between stops using distance and time-of-day data.",
    steps: ["Choose numeric features and a numeric target.", "Fit a regression model using training rows.", "Measure average absolute error and inspect individual mistakes."],
    visual: "regression",
    assessment: [
      ["What kind of target does regression predict?", ["A numeric value.", "Only a category.", "A database key."], 0, "Regression predicts a number such as duration, cost or temperature."],
      ["If MAE is measured in minutes, what unit is a typical absolute prediction error in?", ["Minutes.", "Percent only.", "Rows."], 0, "MAE uses the same units as the target, making interpretation direct."]
    ]
  },
  "5-2": {
    story: "A lost-property desk wants to classify new reports as likely matched or unmatched. Missing a real match is more costly than reviewing a false alarm.",
    steps: ["Train a classifier on examples labeled matched/unmatched.", "Inspect a confusion matrix and class-specific metrics.", "Choose a probability threshold based on the cost of each kind of error."],
    visual: "confusion",
    assessment: [
      ["Recall measures what?", ["The fraction of actual positives found.", "The fraction of predictions that are positive.", "The model's training time."], 0, "Recall is true positives divided by all actual positives."],
      ["Why can accuracy mislead on imbalanced data?", ["A majority-class guess can look accurate while missing rare cases.", "Accuracy is always negative.", "It measures model speed only."], 0, "If almost all cases are negative, predicting negative every time may score high accuracy but fail to find positives."]
    ]
  },
  "5-3": {
    story: "An advising team wants to understand a simple series of questions that predicts whether a student may need extra course support.",
    steps: ["Fit a small decision tree and inspect its split questions.", "Increase tree depth and compare training with validation scores.", "Compare with a random forest and inspect its mistakes."],
    visual: "tree",
    assessment: [
      ["What is a common sign of an overfit tree?", ["Training score much better than validation score.", "Both scores are exactly zero.", "The tree has a title."], 0, "A large train-validation gap suggests the tree memorized details that do not generalize."],
      ["What does a random forest combine?", ["Predictions from many varied decision trees.", "Only database tables.", "Several charts with no model."], 0, "A forest aggregates multiple trees trained with randomness to improve robustness."]
    ]
  },
  "5-4": {
    story: "You compare two student-risk models. Any imputation or scaling must be learned only from the training portion of each validation split.",
    steps: ["Put preprocessing and the model in one pipeline.", "Use cross-validation to compare candidates on the same metric.", "Choose a candidate, then evaluate once on the held-out test data."],
    visual: "cross-validation",
    assessment: [
      ["Why use a pipeline for preprocessing during cross-validation?", ["It fits transformations inside each training fold.", "It makes labels unnecessary.", "It removes the need to split data."], 0, "A pipeline prevents validation-fold information from leaking into imputation or scaling."],
      ["When should the final held-out test set be used?", ["For a final evaluation after choices are made.", "For every model choice.", "Before defining the target."], 0, "Repeatedly selecting based on test results makes it part of the tuning process."]
    ]
  },
  "6-0": {
    story: "A tiny neural network learns to estimate energy use from room size and occupancy.",
    steps: ["Send feature values through weighted layers to get a prediction.", "Compare prediction with the known value using a loss.", "Use backpropagation and an optimizer to update weights."],
    visual: "neuron",
    assessment: [
      ["What does the loss measure?", ["How different predictions are from targets.", "How many layers a model has.", "The file size."], 0, "Loss is a numeric signal describing prediction error for the chosen objective."],
      ["What does backpropagation calculate?", ["Gradients for model parameters.", "The final chart colors.", "The test labels from nowhere."], 0, "Backpropagation computes how changes to parameters affect the loss."]
    ]
  },
  "6-1": {
    story: "Train a small PyTorch model to estimate a sensor's output from one measured input.",
    steps: ["Represent examples as tensors and define a model.", "Calculate predictions and loss for a batch.", "Clear gradients, backpropagate, and let the optimizer update weights."],
    visual: "training-loop",
    assessment: [
      ["What does `loss.backward()` do?", ["Computes gradients for operations tracked by autograd.", "Saves the model to disk.", "Clears all data."], 0, "`backward()` calculates gradients; the optimizer then uses them to update parameters."],
      ["Why call `optimizer.zero_grad()`?", ["PyTorch accumulates gradients by default.", "To set every weight to zero.", "To remove the model layers."], 0, "Clearing gradients prevents them from accumulating unintentionally across batches."]
    ]
  },
  "6-2": {
    story: "A robotics club classifies images of recyclable objects. The team checks image shapes and examples the model confuses before trusting predictions.",
    steps: ["Load images and inspect their dimensions, channels and labels.", "Apply convolution filters to learn local visual patterns.", "Evaluate per-class mistakes, not only overall accuracy."],
    visual: "cnn",
    assessment: [
      ["What can convolution filters learn from images?", ["Local patterns such as edges and textures.", "Only file names.", "Database joins."], 0, "Convolutional filters detect local spatial patterns that can combine into larger features."],
      ["What does 2×2 pooling with stride 2 usually do to width and height?", ["Halves each dimension.", "Doubles each dimension.", "Changes colors only."], 0, "Each spatial dimension is typically reduced by a factor of two."]
    ]
  },
  "6-3": {
    story: "A study-notes assistant needs to split a sentence into tokens and understand which earlier words are relevant to each token.",
    steps: ["Tokenize the sentence and map token IDs to vectors.", "Use attention scores to mix information across positions.", "For next-token prediction, prevent each position from looking ahead."],
    visual: "attention",
    assessment: [
      ["What does self-attention help a token do?", ["Combine information from other token positions.", "Open a file from disk.", "Convert a label into a database key."], 0, "Self-attention computes how token positions relate and combines their representations."],
      ["Why mask future tokens in a causal language model?", ["So a prediction uses only previous context.", "So every token is removed.", "To sort words alphabetically."], 0, "A causal mask prevents a token from seeing future text it is meant to predict."]
    ]
  },
  "7-0": {
    story: "A student wants to search notes by meaning, so a question like 'how do I submit my lab?' can find a passage titled 'lab report upload steps.'",
    steps: ["Convert questions and passages into embedding vectors.", "Compare vectors with a similarity measure.", "Open the retrieved passage and verify it actually answers the question."],
    visual: "embedding",
    assessment: [
      ["What does an embedding represent?", ["Text as a numeric vector.", "A guaranteed correct answer.", "A compressed image file only."], 0, "An embedding is a numerical representation used to compare learned features or meaning."],
      ["Does high similarity guarantee a correct passage?", ["No, it must still be checked.", "Yes, always.", "Only when the passage is long."], 0, "Similarity helps retrieve candidates; it does not verify that a candidate is accurate or sufficient."]
    ]
  },
  "7-1": {
    story: "A language model writes a draft response to a student's question by predicting one token after another from its context.",
    steps: ["Provide a prompt and any relevant context.", "The model scores possible next tokens.", "It selects a token and repeats until a stop condition; verify factual claims separately."],
    visual: "next-token",
    assessment: [
      ["What does an LLM repeatedly predict while generating?", ["The next token.", "The next database table.", "The user's identity."], 0, "Autoregressive generation repeatedly predicts and appends a next token."],
      ["Does fluent wording guarantee a fact is true?", ["No, verify factual claims.", "Yes, grammar proves it.", "Only if it is long."], 0, "Fluency is not evidence that the claim was checked against a reliable source."]
    ]
  },
  "7-2": {
    story: "A course Q&A assistant searches official lecture notes and includes the matching passage before generating an answer.",
    steps: ["Split trusted documents into useful chunks and index them.", "Retrieve the passages most related to a question.", "Ask the model to answer from those passages and cite them—or abstain."],
    visual: "rag",
    assessment: [
      ["What does retrieval add to generation?", ["Relevant source passages as context.", "A guarantee that the model never errs.", "More training data automatically."], 0, "RAG retrieves passages and supplies them to the model as context for a response."],
      ["What should a grounded assistant do when no passage supports an answer?", ["Say the available context is insufficient.", "Invent a citation.", "Pretend it searched."], 0, "An honest system abstains rather than inventing unsupported facts or sources."]
    ]
  },
  "7-3": {
    story: "Before classmates use a Q&A helper, test answerable questions, unclear questions, and questions for which the notes contain no answer.",
    steps: ["Write a representative set of test questions before changing prompts.", "Score factual support, retrieval quality, safety and useful refusals.", "Inspect failures and record what needs to improve."],
    visual: "evaluation",
    assessment: [
      ["Why include unanswerable prompts in an evaluation set?", ["To test whether the system abstains appropriately.", "To make all scores 100%.", "To avoid testing retrieval."], 0, "Unanswerable cases test whether the assistant avoids making unsupported claims."],
      ["Should private data be added to prompts or logs by default?", ["No; use only approved data handling.", "Yes, for better examples.", "Only if it is copied to a public demo."], 0, "Protect sensitive information and follow the system's approved data-handling rules."]
    ]
  },
  "8-0": {
    story: "A class website sends feature values to a Python endpoint and receives a model prediction as JSON.",
    steps: ["Define the request fields and validate their types.", "Call the already-loaded model with validated data.", "Return a documented response and clear error for invalid input."],
    visual: "api",
    assessment: [
      ["Why validate API input before model inference?", ["To catch malformed data at the boundary.", "To change the model's training labels.", "To remove the network."], 0, "Validation produces clear client errors before bad inputs cause confusing downstream failures."],
      ["When should an API load its model?", ["Once during application startup.", "For every request if avoidable.", "Only after returning a response."], 0, "Loading once avoids repeated overhead and keeps request handling predictable."]
    ]
  },
  "8-1": {
    story: "A classmate clones your project and wants to run it without guessing which packages or commands it needs.",
    steps: ["Record dependencies and setup steps in the repository.", "Keep source, tests and documentation organized.", "Exclude secrets and private data; test the setup from a clean environment."],
    visual: "project",
    assessment: [
      ["Where should a published API key go?", ["A protected environment variable or secret manager.", "A public source file.", "A screenshot in the README."], 0, "Secrets should not be committed to source control; use an approved secret-handling mechanism."],
      ["What makes a project reproducible?", ["Clear setup, recorded dependencies and repeatable steps.", "A complex model name.", "A screenshot alone."], 0, "A documented environment and commands help others reproduce the work."]
    ]
  },
  "8-2": {
    story: "Your capstone helps students find relevant campus support resources from an approved, public set of documents.",
    steps: ["Write the user problem, data permissions and success metric.", "Build the smallest working version and compare it with a baseline.", "Evaluate errors, document limits and prepare a demo another person can run."],
    visual: "capstone",
    assessment: [
      ["Why build a baseline before a complex model?", ["To have a clear reference for added value.", "To skip evaluation.", "To guarantee a high score."], 0, "A baseline shows whether added complexity genuinely improves the result."],
      ["What belongs in a capstone evaluation?", ["A metric, held-out examples and failure inspection.", "Only the best screenshot.", "A claim with no test."], 0, "Evaluation should include measurable results and representative errors, not only a polished demo."]
    ]
  },
  "8-3": {
    story: "A recruiter or classmate should be able to understand what your project does, how you tested it, and where it should not be used.",
    steps: ["Describe the intended user and problem.", "Show evidence, setup steps and a representative failure.", "State limitations, privacy choices and your next improvement."],
    visual: "portfolio",
    assessment: [
      ["What should a useful portfolio entry include besides a model score?", ["Method, evaluation, limitations and reproducible steps.", "Only the model's name.", "A claim that it is perfect."], 0, "Context, evidence and limitations help a reader understand and reproduce the work."],
      ["What should you claim about an untested student prototype?", ["Describe it honestly as a prototype with limitations.", "Call it production-ready.", "Guarantee it works for everyone."], 0, "Do not overstate reliability; be transparent about what has and has not been tested."]
    ]
  }
};

// These fictional examples use small, local datasets rather than live services or personal data.
const realWorldExamples = {
  "0-0": {
    title: "Sorting library messages",
    scenario: "A library wants to route messages about overdue books to the right team. A simple keyword rule is a starting baseline; a trained classifier could later be compared with it on unseen, labeled messages.",
    explanation: "This rule is not machine learning: it uses a condition written by a person. A real system would need examples, evaluation and a way to handle mistakes.",
    code: `message = "My book is overdue"
route = "loans" if "overdue" in message.lower() else "general"
print(route)`
  },
  "0-1": {
    title: "Checking a study tool",
    scenario: "Before building a planner, a student saves a short Python script and runs it from the project folder to check that the interpreter is working.",
    explanation: "Save this as check.py and run python check.py. Git can then record a version of the file, but running Python does not require Git.",
    code: `hours_per_week = 4
print("Weekly study hours:", hours_per_week)`
  },
  "0-2": {
    title: "Testing a delivery-fee rule",
    scenario: "A campus store offers free delivery when an order reaches 500 currency units. Test a value just below the boundary and one exactly on it.",
    explanation: "Writing expected results first helps expose an incorrect boundary such as using > instead of >=.",
    code: `def delivery_fee(order_total):
    return 0 if order_total >= 500 else 40

assert delivery_fee(499) == 40
assert delivery_fee(500) == 0
print("Boundary checks passed")`
  },
  "1-0": {
    title: "Splitting a cafe bill",
    scenario: "Three friends share a cafe bill of 450 currency units equally. Convert a recorded text amount before dividing it.",
    explanation: "The text '450' cannot be divided until it is converted to a number. The formatted result shows two decimal places.",
    code: `bill_text = "450"
friends = 3
share = float(bill_text) / friends
print(f"Each person pays: {share:.2f}")`
  },
  "1-1": {
    title: "Checking stock levels",
    scenario: "A stationery shop wants a list of products with fewer than five items left.",
    explanation: "The loop visits each product, and the condition selects only the items that need attention.",
    code: `stock = {"pens": 3, "notebooks": 12, "erasers": 2}
for product, quantity in stock.items():
    if quantity < 5:
        print(product, "needs restocking")`
  },
  "1-2": {
    title: "Calculating a discount",
    scenario: "A shop applies the same percentage discount to several products. Put the calculation in one function instead of repeating it.",
    explanation: "The function returns a price that a receipt, shopping cart or test can reuse. This example assumes a valid discount from 0 to 100 percent.",
    code: `def discounted_price(price, percent):
    return price * (1 - percent / 100)

print(discounted_price(800, 10))
assert discounted_price(100, 0) == 100`
  },
  "1-3": {
    title: "Counting bus-stop requests",
    scenario: "A shuttle coordinator counts how often passengers request each stop from a small list of requests.",
    explanation: "A dictionary maps each stop to its count. get supplies zero the first time a stop appears.",
    code: `requests = ["Library", "Hostel", "Library", "Lab"]
counts = {}
for stop in requests:
    counts[stop] = counts.get(stop, 0) + 1
print(counts)`
  },
  "1-4": {
    title: "Reading a small expense report",
    scenario: "An expense tracker receives CSV data with an item and an amount on each row.",
    explanation: "StringIO makes this example self-contained. In a real program, open a CSV file with encoding='utf-8' and newline='', and validate data before using it.",
    code: `import csv
from io import StringIO

data = StringIO("item,amount\\nLunch,120\\nBus,30\\n")
rows = list(csv.DictReader(data))
total = sum(int(row["amount"]) for row in rows)
print("Total:", total)`
  },
  "1-5": {
    title: "Tracking a reusable water bottle",
    scenario: "A refill station records how much water is left in a bottle. Each bottle object holds its own amount.",
    explanation: "The test checks that refilling changes this bottle's state. A production version would also validate capacity and negative amounts.",
    code: `class Bottle:
    def __init__(self, millilitres):
        self.millilitres = millilitres

    def refill(self, amount):
        self.millilitres += amount

bottle = Bottle(200)
bottle.refill(300)
assert bottle.millilitres == 500
print(bottle.millilitres)`
  },
  "2-0": {
    title: "Listing available rooms",
    scenario: "A booking desk needs a sorted list of available study rooms. This example creates a temporary SQLite database in memory.",
    explanation: "SELECT chooses the columns, WHERE filters available rows, and ORDER BY sorts the result. No external database setup is needed.",
    code: `import sqlite3
db = sqlite3.connect(":memory:")
db.execute("CREATE TABLE rooms (name TEXT, available INTEGER)")
db.executemany("INSERT INTO rooms VALUES (?, ?)", [("Lab", 0), ("Library", 1), ("Hall", 1)])
for row in db.execute("SELECT name FROM rooms WHERE available = 1 ORDER BY name"):
    print(row[0])
db.close()`
  },
  "2-1": {
    title: "Finding unassigned volunteers",
    scenario: "An event organizer wants every volunteer in a report, including people who have not yet been assigned a shift.",
    explanation: "LEFT JOIN keeps both volunteers. The unmatched shift is NULL, which Python's SQLite driver represents as None.",
    code: `import sqlite3
db = sqlite3.connect(":memory:")
db.execute("CREATE TABLE volunteers (id INTEGER, name TEXT)")
db.execute("CREATE TABLE shifts (volunteer_id INTEGER, shift TEXT)")
db.executemany("INSERT INTO volunteers VALUES (?, ?)", [(1, "Asha"), (2, "Ravi")])
db.execute("INSERT INTO shifts VALUES (?, ?)", (1, "Morning"))
for row in db.execute("SELECT v.name, s.shift FROM volunteers v LEFT JOIN shifts s ON v.id = s.volunteer_id"):
    print(row)
db.close()`
  },
  "2-2": {
    title: "Summarizing support requests",
    scenario: "A help desk groups tickets by category and looks for categories with at least two requests.",
    explanation: "GROUP BY makes one group per category, COUNT counts its rows, and HAVING filters the grouped results.",
    code: `import sqlite3
db = sqlite3.connect(":memory:")
db.execute("CREATE TABLE tickets (category TEXT)")
db.executemany("INSERT INTO tickets VALUES (?)", [("Login",), ("Wi-Fi",), ("Login",)])
for row in db.execute("SELECT category, COUNT(*) FROM tickets GROUP BY category HAVING COUNT(*) >= 2"):
    print(row)
db.close()`
  },
  "2-3": {
    title: "Looking up a booking safely",
    scenario: "A room-booking app looks up a room name supplied by a user.",
    explanation: "The placeholder keeps the supplied name as data rather than SQL syntax. The example uses an in-memory table so it can be run on its own.",
    code: `import sqlite3
db = sqlite3.connect(":memory:")
db.execute("CREATE TABLE rooms (name TEXT)")
db.execute("INSERT INTO rooms VALUES (?)", ("Library",))
room_name = "Library"
print(db.execute("SELECT name FROM rooms WHERE name = ?", (room_name,)).fetchone())
db.close()`
  },
  "3-0": {
    title: "Comparing delivery locations",
    scenario: "A courier compares two locations on a simple two-dimensional grid, measured in kilometres.",
    explanation: "Euclidean distance gives the straight-line separation. Actual road travel can be longer and should use road-network data.",
    code: `from math import hypot

warehouse = (1, 2)
shop = (4, 6)
distance = hypot(shop[0] - warehouse[0], shop[1] - warehouse[1])
print("Straight-line km:", distance)`
  },
  "3-1": {
    title: "Scaling a floor plan",
    scenario: "A designer doubles the width and triples the height of a point on a simplified floor plan.",
    explanation: "Each row of the transformation matrix is multiplied by the original point. The output is a new two-component vector.",
    code: `matrix = [[2, 0], [0, 3]]
point = [4, 5]
scaled = [sum(a * b for a, b in zip(row, point)) for row in matrix]
print(scaled)`
  },
  "3-2": {
    title: "Understanding delivery times",
    scenario: "A delivery team records four typical delivery times and one unusually late delivery.",
    explanation: "Compare mean and median in minutes. The median is less affected by this single extreme value, but both summaries are useful.",
    code: `from statistics import mean, median

minutes = [20, 22, 23, 25, 100]
print("Mean:", mean(minutes))
print("Median:", median(minutes))`
  },
  "3-3": {
    title: "Adjusting a temperature estimate",
    scenario: "A toy model estimates a fixed temperature with one parameter. Its target is 20 and the initial estimate is 10.",
    explanation: "For squared error (estimate - target) ** 2, the derivative is 2 * (estimate - target). One small step against that derivative reduces the error here.",
    code: `estimate = 10.0
target = 20.0
learning_rate = 0.1
gradient = 2 * (estimate - target)
estimate -= learning_rate * gradient
print("Updated estimate:", estimate)`
  },
  "4-0": {
    title: "Flagging cold-storage readings",
    scenario: "A food-storage team checks which sample temperatures exceed its chosen 8-degree threshold.",
    explanation: "This standard-library version shows the filtering idea without installing NumPy. In NumPy, a Boolean mask can apply the condition to an array.",
    code: `readings = [4.5, 8.2, 6.1, 9.0]
above_limit = [value for value in readings if value > 8]
print("Readings above 8 C:", above_limit)`
  },
  "4-1": {
    title: "Cleaning a small survey",
    scenario: "A survey has a repeated submission ID and one response with no course. Keep the first response per ID and report incomplete entries instead of inventing a value.",
    explanation: "This is a small Python equivalent of a cleaning operation. A real survey needs an agreed duplicate policy and a reasoned treatment of missing data.",
    code: `rows = [(1, "Math"), (2, ""), (1, "Math")]
seen = set()
for response_id, course in rows:
    if response_id not in seen:
        seen.add(response_id)
        print(response_id, course if course else "course missing")`
  },
  "4-2": {
    title: "Choosing a chart for transport",
    scenario: "A city team compares how many people use bus, bicycle and walking in an example survey: 40, 25 and 35 responses.",
    explanation: "A labeled bar chart can compare these categories. State the survey size and collection method; the counts alone do not describe the entire city.",
    code: `counts = {"Bus": 40, "Bicycle": 25, "Walking": 35}
for mode, count in counts.items():
    print(f"{mode:8} {'#' * (count // 5)} {count}")`
  },
  "4-3": {
    title: "Exploring a bike-share dataset",
    scenario: "A bike-share team notices more rentals on warm days and wonders whether temperature influences demand.",
    explanation: "First check what one row represents, missing readings, seasonal effects and holidays. The association alone cannot establish that warmer weather caused the increase."
  },
  "5-0": {
    title: "Predicting equipment repairs",
    scenario: "A maintenance team wants to predict whether a machine will need service within 30 days using information known today.",
    explanation: "Reserve later machines or dates for testing, and compare with a baseline that predicts the most common outcome. Do not include repair information recorded after the prediction time."
  },
  "5-1": {
    title: "Estimating taxi fares",
    scenario: "A toy fare estimator uses a base charge of 50 plus 12 per kilometre. Compare its estimates with two observed fares.",
    explanation: "The mean absolute error is in the same currency units as the fare. These coefficients are illustrative; a real regression model would fit them using training data.",
    code: `distances = [2, 5]
actual_fares = [75, 115]
predictions = [50 + 12 * km for km in distances]
mae = sum(abs(actual - predicted) for actual, predicted in zip(actual_fares, predictions)) / len(actual_fares)
print("Predictions:", predictions, "MAE:", mae)`
  },
  "5-2": {
    title: "Reviewing damaged parcels",
    scenario: "A parcel classifier identifies 8 damaged packages correctly but misses 2 damaged packages.",
    explanation: "Recall is 8 / (8 + 2), or 0.8. A high recall can still come with false alarms, so also examine precision and review costs.",
    code: `true_positives = 8
false_negatives = 2
recall = true_positives / (true_positives + false_negatives)
print("Recall:", recall)`
  },
  "5-3": {
    title: "Deciding which plants need water",
    scenario: "A greenhouse uses a simple rule: inspect plants when soil moisture is below 30 percent.",
    explanation: "This is a hand-written one-split decision rule, not a trained tree. A learned tree would choose splits from training data and need validation on new observations.",
    code: `moisture = 24
decision = "inspect watering" if moisture < 30 else "no alert"
print(decision)`
  },
  "5-4": {
    title: "Evaluating a payment-delay model",
    scenario: "A team compares models for predicting late invoices, with missing invoice amounts in the input data.",
    explanation: "Fit imputation separately within each cross-validation training fold using a pipeline. Select the model on validation results and use a held-out test set only for the final evaluation."
  },
  "6-0": {
    title: "Estimating room energy use",
    scenario: "A tiny model combines room size and occupancy to estimate energy demand before comparing it with an observed value.",
    explanation: "This is one hand-calculated linear unit, not a trained neural network. A neural network adds trainable layers and uses gradients to reduce a chosen loss.",
    code: `size, occupants = 20, 3
prediction = 0.5 * size + 2 * occupants + 1
actual = 18
loss = (prediction - actual) ** 2
print("Prediction:", prediction, "squared error:", loss)`
  },
  "6-1": {
    title: "Training a sensor model",
    scenario: "A factory has labeled sensor inputs and output measurements and wants a PyTorch model to predict the output from new inputs.",
    explanation: "Create input and target tensors, run the model, calculate loss, clear old gradients, call backward, then step the optimizer. Test on held-out measurements; the existing worked example shows the training code."
  },
  "6-2": {
    title: "Inspecting recycling images",
    scenario: "A recycling team trains a CNN to sort images of paper, glass and plastic, then notices that it confuses clear glass with plastic.",
    explanation: "Review a per-class confusion matrix and examples from the held-out set. Add representative, permissioned training images if needed, then retrain and re-evaluate; do not judge performance from accuracy alone."
  },
  "6-3": {
    title: "Preparing text for an assistant",
    scenario: "A meeting-notes assistant needs to process the words in a short sentence before a sequence model can use them.",
    explanation: "This whitespace split is a simple illustration, not a transformer tokenizer. Real tokenizers can split words into subword tokens, and causal attention must not look at future tokens.",
    code: `sentence = "Please book the meeting room"
tokens = sentence.lower().split()
print(tokens)`
  },
  "7-0": {
    title: "Comparing note embeddings",
    scenario: "A notes search compares two example vectors representing a question and a passage.",
    explanation: "Cosine similarity compares vector direction. These toy values are not real embeddings, and a high score does not guarantee that the passage answers the question.",
    code: `from math import sqrt

question = [1.0, 2.0]
passage = [2.0, 1.0]
dot = sum(a * b for a, b in zip(question, passage))
norm_q = sqrt(sum(a * a for a in question))
norm_p = sqrt(sum(b * b for b in passage))
print("Cosine similarity:", dot / (norm_q * norm_p))`
  },
  "7-1": {
    title: "Drafting a customer reply",
    scenario: "A support assistant drafts an answer about a store's return policy from a prompt and the text provided to it.",
    explanation: "A language model generates tokens based on its context; it may still produce an unsupported statement. Check the draft against the current official policy before sending it."
  },
  "7-2": {
    title: "Answering from approved documents",
    scenario: "An employee asks an internal assistant about leave rules. The assistant retrieves approved policy passages before drafting an answer.",
    explanation: "Show the supporting source and its date, respect document permissions, and say the answer is unavailable when the retrieved text does not support it. Retrieval reduces neither errors nor access-control needs to zero."
  },
  "7-3": {
    title: "Testing a help assistant",
    scenario: "Before releasing a support assistant, a team tests one question answered by the documents and one question for which the documents contain no answer.",
    explanation: "Score both source support and appropriate abstention. Use approved or synthetic test data; never put personal customer information into a public demo or unapproved logs."
  },
  "8-0": {
    title: "Validating a prediction request",
    scenario: "An API receives a parcel weight before calculating an example delivery charge.",
    explanation: "This is a local validation function, not an HTTP server or trained model. A real endpoint should return a clear client error for invalid values and avoid exposing internal details.",
    code: `from math import isfinite

def delivery_charge(weight_kg):
    if isinstance(weight_kg, bool) or not isinstance(weight_kg, (int, float)) or not isfinite(weight_kg) or weight_kg <= 0:
        raise ValueError("weight_kg must be a finite positive number")
    return 50 + 10 * weight_kg

print(delivery_charge(2))`
  },
  "8-1": {
    title: "Handing a project to a teammate",
    scenario: "A teammate receives a forecasting project and needs to reproduce its result on another computer.",
    explanation: "Document a supported Python version, dependency versions, setup commands and a small non-sensitive sample. Test the instructions in a clean environment and keep secrets outside the repository."
  },
  "8-2": {
    title: "Building a repair-guide finder",
    scenario: "A capstone helps people find relevant passages in a small set of public appliance manuals.",
    explanation: "Start with a keyword-search baseline, measure retrieval on held-out questions, then compare any embedding-based approach. Cite sources, respect document licenses and warn users that the prototype cannot replace a qualified technician."
  },
  "8-3": {
    title: "Presenting a portfolio project",
    scenario: "A student presents a prototype that categorizes public support tickets to help a team prioritize manual review.",
    explanation: "Explain the intended user, dataset permissions, baseline, evaluation and a representative mistake. Include setup steps and make clear that the prototype has not been approved for automated decisions."
  }
};
