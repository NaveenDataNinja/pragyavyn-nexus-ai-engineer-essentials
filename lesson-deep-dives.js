const lessonDeepDives = {
  "0-0": {
    analogy: "Think of a mail sorter: a person can write a fixed rule, or teach a sorter from many examples of mail that people already classified.",
    steps: ["Define the job: flag messages that may be spam, not decide what is true.", "Use labeled past messages to train a model; keep different messages aside for testing.", "For a new message, ask the trained model for a prediction and let a person review uncertain cases."],
    connection: "An AI engineer connects data, model, evaluation and a usable interface. The model is only one part of the system.",
    question: "A new message is fed into an already trained model. Is this training or inference?",
    answer: "Inference: the model is using patterns it already learned. Training is the separate process that adjusts the model using examples."
  },
  "0-1": {
    analogy: "Your editor is a workbench, Python is the machine that runs your instructions, and Git is a photo album of selected project snapshots.",
    steps: ["Write a tiny Python file in the editor and save it.", "Open a terminal in that folder and run the file with Python; check the output.", "Stage the file and make a Git commit so that version can be found again."],
    connection: "AI projects also need scripts that others can run and versions of code that can be inspected and reproduced.",
    question: "You edited a file but only saved it. Does that create a Git commit?",
    answer: "No. Saving changes the file; staging and committing record a Git snapshot."
  },
  "0-2": {
    analogy: "Before cooking, read the recipe, identify the ingredients and decide how to tell whether the result is ready.",
    steps: ["For a free-delivery rule, identify the input: order total, and output: delivery fee.", "Write the rule explicitly: totals of 500 or more have a zero fee; lower totals have a fee of 40.", "Try 499 and 500: their expected fees are 40 and 0, so a boundary error becomes visible."],
    connection: "The same habit turns an AI request into a measurable task with defined inputs, outputs, constraints and tests.",
    question: "Why test 500 as well as 499?",
    answer: "500 is the boundary. It checks whether the rule includes the threshold rather than starting only above it."
  },
  "1-0": {
    analogy: "A label on a container tells you what you have; the text '450' is a label containing digits, not yet a numeric amount for arithmetic.",
    steps: ["Receive the bill as text: '450'.", "Convert it to a number, then divide by three people.", "Check the result: each share is 150; adding the shares returns 450."],
    connection: "Model features often arrive as text in files or requests. Convert and validate them before calculations or prediction.",
    question: "What must happen before dividing the input text '450' by 3?",
    answer: "Convert the string to a number, for example with int or float. Invalid numeric text needs appropriate error handling."
  },
  "1-1": {
    analogy: "A shopkeeper checks each shelf in turn and puts a reorder note only on shelves below the agreed threshold.",
    steps: ["Take the stock counts for pens, notebooks and erasers: 3, 12 and 2.", "Visit each item once and ask whether its count is less than 5.", "Flag pens and erasers; do not flag notebooks."],
    connection: "Loops and conditions help an AI pipeline inspect records and apply checks before model training or inference.",
    question: "If the threshold is strictly less than 5, should a stock count of 5 be flagged?",
    answer: "No. Five is equal to the threshold, not less than it. Use <= only if the business rule includes five."
  },
  "1-2": {
    analogy: "A function is like a reusable recipe: give it ingredients, follow one set of instructions, and receive a result.",
    steps: ["Define a function that accepts a price and a discount percentage.", "For a price of 800 and a 10% discount, calculate 800 × (1 - 0.10).", "Return 720 so another part of the program can print it, store it or test it."],
    connection: "Reusable functions keep preprocessing, prediction and evaluation steps consistent across an AI project.",
    question: "If a function only prints 720, can its caller automatically use 720 as its returned result?",
    answer: "No. Printing displays text; return gives a value back to the caller. A function without an explicit return normally returns None."
  },
  "1-3": {
    analogy: "A dictionary is like a labeled set of drawers: use a label to find the corresponding contents. A list is more like an ordered queue.",
    steps: ["Record stop requests: Library, Hostel, Library.", "Use each stop name as a dictionary key and add one to its current count.", "Read the result: Library has 2 requests and Hostel has 1."],
    connection: "Lists organize examples and dictionaries connect feature names or labels to their values in data-processing code.",
    question: "Which collection is a natural starting point for looking up a count by stop name?",
    answer: "A dictionary: the stop name can be the key and its count the value."
  },
  "1-4": {
    analogy: "A file is a notebook that remains after you close the app; a with block is a promise to close that notebook when you finish.",
    steps: ["Read a CSV row with an item and an amount.", "Convert the amount and add it to the total; report a malformed row rather than silently treating it as zero.", "Use a context manager for real files so they are closed even if an error occurs."],
    connection: "AI systems load datasets and save results; explicit file handling and clear errors make those pipelines dependable.",
    question: "If an amount says 'unknown', should it silently become zero?",
    answer: "No. Zero is a real amount and changes the total. Report or handle the missing value according to an explicit rule."
  },
  "1-5": {
    analogy: "A class is a blueprint for a bottle; each actual bottle is a separate object with its own amount of water.",
    steps: ["Create one bottle containing 200 ml.", "Refill it with 300 ml; its stored amount becomes 500 ml.", "Assert that the result is 500, and separately test invalid inputs if the class is extended to reject them."],
    connection: "Classes can group model configuration and behavior; tests help detect changes that break expected pipeline behavior.",
    question: "Does changing one bottle object's amount necessarily change every other bottle?",
    answer: "No. Instance attributes belong to each object. Shared class attributes are different and need deliberate handling."
  },
  "2-0": {
    analogy: "A database table is like a register: rows are entries and columns describe each entry.",
    steps: ["Start with rooms and their availability values.", "Use WHERE to retain available rooms and SELECT to choose the names.", "Use ORDER BY to present the names in a predictable order."],
    connection: "Training datasets often begin as database queries. Selecting the correct records and columns is essential before modeling.",
    question: "Which SQL clause filters individual rows before the result is sorted?",
    answer: "WHERE filters rows. ORDER BY sorts the resulting rows."
  },
  "2-1": {
    analogy: "Match volunteers to a shift list using an ID; keep a name on the report even if the shift list has no match.",
    steps: ["Put all volunteers on the left and assignments on the right.", "Match rows where the volunteer IDs agree.", "With LEFT JOIN, an unassigned volunteer remains, with NULL in the missing shift column."],
    connection: "Joins combine features from related sources; an incorrect key or join type can lose records or duplicate them.",
    question: "Will an INNER JOIN keep a volunteer with no matching shift?",
    answer: "No. An INNER JOIN keeps matching pairs only; a LEFT JOIN keeps the unmatched left-side volunteer."
  },
  "2-2": {
    analogy: "Sort receipts into category piles, count each pile, then choose which piles are large enough to investigate.",
    steps: ["Group tickets by category.", "Count rows within each group: Login, Login and Wi-Fi produce counts of 2 and 1.", "Use HAVING to retain groups with at least 2 tickets; only Login remains."],
    connection: "Aggregations create useful summaries, but their meaning depends on what each row represents and which rows were included.",
    question: "Which clause filters groups by COUNT(*)?",
    answer: "HAVING filters aggregated groups. WHERE filters input rows before grouping."
  },
  "2-3": {
    analogy: "A form has separate boxes for the question and its answer; do not paste a visitor's answer into the instructions themselves.",
    steps: ["Write the SQL with a placeholder where the room name belongs.", "Pass the room name as a bound value rather than joining it into the SQL text.", "Use constraints and transactions where appropriate to protect the consistency of related records."],
    connection: "AI applications often fetch documents or features from databases. Parameterized queries protect that data boundary.",
    question: "Why use a parameter instead of adding a user's text directly into an SQL command?",
    answer: "A bound parameter is handled as data, preventing the input from being interpreted as part of the SQL command."
  },
  "3-0": {
    analogy: "An address on a grid has coordinates; a feature vector similarly lists measurements in a consistent order.",
    steps: ["Represent the warehouse as (1, 2) and the shop as (4, 6), in kilometres.", "Subtract matching coordinates to get differences of 3 and 4.", "Use sqrt(3² + 4²) = 5 for straight-line distance; actual road distance may differ."],
    connection: "Models and embeddings represent examples as vectors; matching dimensions and sensible feature scales matter when comparing them.",
    question: "If you swap the coordinate order for only one location, is the distance still a meaningful comparison?",
    answer: "No. Corresponding components must describe the same dimensions in the same order."
  },
  "3-1": {
    analogy: "A photocopier can stretch a floor plan differently in each direction; a matrix can describe that transformation.",
    steps: ["Start at the point (4, 5).", "Apply the scale matrix with 2 for x and 3 for y.", "The transformed point is (8, 15); compare each output coordinate with its matching scale."],
    connection: "Model layers use matrix operations to transform batches of features. Checking shapes catches many errors before training.",
    question: "What shape results when a 2×3 matrix multiplies a 3×1 vector?",
    answer: "2×1. The inner dimensions match, and the outer dimensions form the result."
  },
  "3-2": {
    analogy: "One extremely late delivery can pull an average upward even when most deliveries arrived on time.",
    steps: ["Sort the times 20, 22, 23, 25 and 100 minutes.", "The middle value is 23, so the median is 23.", "The mean is 190 / 5 = 38; investigate the late delivery rather than hiding it."],
    connection: "Understanding distributions and outliers helps engineers clean data, choose metrics and explain model behavior.",
    question: "Which is larger in this example, the mean or median, and why?",
    answer: "The mean is 38 and the median is 23. The 100-minute outlier pulls the mean upward."
  },
  "3-3": {
    analogy: "On a foggy hill, a local slope tells you which nearby direction rises; walking a little in the opposite direction can lower your height.",
    steps: ["Use squared error (estimate - target)² with estimate 10 and target 20.", "The gradient is 2 × (10 - 20) = -20. With learning rate 0.1, subtract 0.1 × -20.", "The new estimate is 12 and its squared error is 64, down from 100."],
    connection: "Gradient-based optimization adjusts model parameters to reduce a loss, although an unsuitable learning rate can cause instability.",
    question: "Why subtract a negative gradient in this example?",
    answer: "Subtracting -2 increases the estimate from 10 to 12, moving it toward the target and reducing this loss."
  },
  "4-0": {
    analogy: "A Boolean mask is like a stencil: it keeps positions that meet a rule and hides the others.",
    steps: ["Take readings 4.5, 8.2 and 6.1 degrees.", "Compare each reading with 8: the mask is false, true, false.", "Select the true position to get 8.2; retain the units when reporting it."],
    connection: "Array masks make it easier to select, clean and summarize many numerical features used by models.",
    question: "Does a condition of reading > 8 select a reading exactly equal to 8?",
    answer: "No. It selects only readings greater than 8; use >= if the rule includes the boundary."
  },
  "4-1": {
    analogy: "Before tallying survey forms, remove confirmed duplicate submissions and place incomplete forms in a clearly marked pile.",
    steps: ["Check what one row and a response ID represent before cleaning.", "Keep one row per ID only when that matches the survey's duplicate policy.", "Count missing course names separately instead of pretending they are a real course."],
    connection: "Data cleaning decisions change what a model learns; document those decisions and avoid leaking information from test data.",
    question: "Why is replacing every missing course name with 'Math' unsafe?",
    answer: "It invents data and can distort group counts. Investigate missingness and choose an explicit, justified treatment."
  },
  "4-2": {
    analogy: "A bar chart is a row of measuring sticks: taller bars mean larger category counts, provided the scale is clear.",
    steps: ["For Bus 40, Bicycle 25 and Walking 35, choose one bar per category.", "Label the category axis and the count axis; show that the total is 100 responses.", "Explain how the survey was collected before treating it as representative of a city."],
    connection: "Visual checks can reveal imbalanced classes or unusual values before training an AI model.",
    question: "Do 40 bus responses prove that 40% of every city's residents use buses?",
    answer: "No. The proportion is 40% of this sample; whether it represents a wider population depends on sampling and other evidence."
  },
  "4-3": {
    analogy: "A detective observes clues before deciding what they mean; a pattern in a chart is a clue, not a verdict.",
    steps: ["Define one row: for example, one day's bike-rental count and temperature.", "Inspect missing data and plot rentals against temperature.", "Ask whether holidays or season might also explain the pattern; report uncertainty."],
    connection: "Exploratory analysis helps form sensible features and questions while preventing unsupported claims about causation.",
    question: "If warmer days have more rentals, does that alone prove warmth caused the increase?",
    answer: "No. Other factors may influence both. The observation shows an association that needs further investigation."
  },
  "5-0": {
    analogy: "A practice exam helps a student learn; a separate exam with new questions checks whether the learning transfers.",
    steps: ["Define the service prediction, its deadline and the information available at prediction time.", "Split training and test data in a way that reflects future use; fit the model on training data.", "Compare against a simple baseline on unseen data, and inspect mistakes."],
    connection: "This workflow is the backbone of an AI engineer's modeling work; avoiding leakage matters more than a flattering score.",
    question: "Should you use a repair outcome recorded after prediction time as an input?",
    answer: "No. That would leak future information unavailable when the real prediction is made."
  },
  "5-1": {
    analogy: "A taxi meter turns distance into a numeric fare estimate; regression predicts numbers rather than categories.",
    steps: ["Use the example rule: fare = 50 + 12 × kilometres.", "For 2 km and 5 km, predict 74 and 110; compare with observed fares 75 and 115.", "Absolute errors are 1 and 5, so mean absolute error is (1 + 5) / 2 = 3 currency units."],
    connection: "Regression can estimate demand, cost or time. Evaluate on held-out data and inspect errors in the units people understand.",
    question: "Does an MAE of 3 mean every fare is wrong by exactly 3?",
    answer: "No. It is the average absolute error; individual errors here are 1 and 5."
  },
  "5-2": {
    analogy: "A parcel inspector tries to catch damaged packages; some damaged ones can be missed and some safe ones can be flagged.",
    steps: ["Count 8 damaged packages correctly flagged and 2 damaged packages missed.", "Recall is 8 / (8 + 2) = 0.8, or 80% of actual damaged packages found.", "Also count false alarms and consider the cost of each mistake before choosing a threshold."],
    connection: "Choosing a metric and threshold requires understanding real-world consequences, not just reporting overall accuracy.",
    question: "Can you calculate precision from 8 true positives and 2 false negatives alone?",
    answer: "No. Precision also needs the number of false positives: true positives divided by all predicted positives."
  },
  "5-3": {
    analogy: "A decision tree resembles a flowchart of questions: each answer follows a branch until reaching a prediction.",
    steps: ["A hand-written example asks whether soil moisture is below 30%.", "At 24%, follow the yes branch and inspect watering; at 35%, follow the no-alert branch.", "A trained tree learns splits from data; compare its training and validation behavior to check for overfitting."],
    connection: "Trees are useful baselines for structured data; forests combine many trees but still need careful evaluation and monitoring.",
    question: "Does the hand-written 30% rule prove that a trained tree discovered the best threshold?",
    answer: "No. It is a rule chosen for illustration; a trained tree learns splits from data and must be evaluated on unseen cases."
  },
  "5-4": {
    analogy: "When practicing for an exam, do not peek at the answer key for the questions you are using to judge your preparation.",
    steps: ["Split the data into a final test set and development data.", "Inside each cross-validation fold, fit preprocessing only on that fold's training portion, then score its validation portion.", "Choose the pipeline using validation results; evaluate the chosen approach on the held-out test set."],
    connection: "Pipelines tie preprocessing to the estimator, helping keep validation and test information out of training.",
    question: "Why not calculate a missing-value replacement from all rows before cross-validation?",
    answer: "It uses validation information when preparing the training data, which can make performance look better than it really is."
  },
  "6-0": {
    analogy: "A mixing desk combines several signals with adjustable volume controls; a neural network combines inputs using trainable weights.",
    steps: ["For size 20 and occupancy 3, use the toy calculation 0.5 × 20 + 2 × 3 + 1 = 17.", "If the observed target is 18, squared error is (17 - 18)² = 1.", "Training uses gradients to adjust weights; real neural networks may have multiple layers and nonlinear activations."],
    connection: "Inputs, parameters, predictions and loss are the pieces an engineer checks when debugging a neural model.",
    question: "Is the single hand-calculated linear unit automatically a trained deep neural network?",
    answer: "No. It illustrates a weighted combination. Training and multiple layers require additional steps and structure."
  },
  "6-1": {
    analogy: "Each training batch is practice: try a prediction, measure the mistake, work out a correction, and update the model.",
    steps: ["Put inputs and target outputs into compatible tensors and run the model.", "Compute loss; clear old gradients before calling backward to calculate new ones.", "Let the optimizer update the weights, and evaluate separately on held-out data."],
    connection: "A correct PyTorch training loop makes model behavior reproducible and helps identify shape and gradient errors.",
    question: "Why clear gradients before the next optimization step?",
    answer: "PyTorch accumulates gradients by default. Clearing them prevents unintended accumulation when that is not desired."
  },
  "6-2": {
    analogy: "A person may first notice edges and textures in a picture before combining those clues into an object; CNN filters learn local patterns.",
    steps: ["Prepare labeled images and check their shapes and permitted use.", "Train on one set and evaluate on separate images.", "Inspect per-class mistakes, such as glass confused with plastic, rather than relying only on total accuracy."],
    connection: "Computer-vision engineers combine data quality, model evaluation and error analysis before using predictions.",
    question: "Why inspect a confusion matrix when overall accuracy seems high?",
    answer: "It can reveal that particular classes are frequently confused or missed, even if the overall score looks good."
  },
  "6-3": {
    analogy: "When completing a sentence, a reader uses earlier words as context; a causal model must not peek at the words it is meant to predict.",
    steps: ["Split text into tokens using the model's actual tokenizer; a simple whitespace split is only an illustration.", "Represent token positions as vectors and use attention to combine relevant context.", "For next-token prediction, mask future positions so they cannot reveal the answer."],
    connection: "Tokenization, context limits and attention are foundational to using and evaluating language models.",
    question: "Why block future tokens during causal next-token prediction?",
    answer: "Future words would reveal information unavailable at generation time, making the prediction task misleading."
  },
  "7-0": {
    analogy: "An embedding is like a map coordinate: nearby points can represent similar items, but a short distance alone does not prove a match is useful.",
    steps: ["Convert a question and a passage into vectors using the same suitable embedding model.", "Compare their vectors with a measure such as cosine similarity.", "Read and verify a retrieved passage before relying on it; similarity is a ranking signal, not proof."],
    connection: "Embedding search helps AI applications retrieve candidate documents for a user question.",
    question: "Does a high similarity score guarantee the passage answers the question correctly?",
    answer: "No. It suggests a possible match; the passage and its source must still be checked."
  },
  "7-1": {
    analogy: "An autocomplete system extends text one piece at a time; fluent completion is not the same as checking a fact.",
    steps: ["Provide a prompt and relevant approved context.", "The model predicts and appends tokens until it reaches a stopping condition.", "Verify a draft's claims against reliable current sources before using it."],
    connection: "AI engineers manage context, generation, evaluation and user expectations rather than assuming a confident answer is correct.",
    question: "Does a polished answer prove that a model checked the store's return policy?",
    answer: "No. The wording alone gives no such guarantee; inspect the actual source and verification process."
  },
  "7-2": {
    analogy: "An open-book assistant first looks up a page, then answers using that page instead of relying only on memory.",
    steps: ["Index approved documents while respecting who is allowed to see them.", "Retrieve relevant passages for the question and provide them as context.", "Answer with supporting sources, or say the available context is insufficient; verify the result."],
    connection: "Retrieval-augmented generation combines search and a language model, but still requires access control and evaluation.",
    question: "What should the assistant do if none of its retrieved passages supports an answer?",
    answer: "Acknowledge insufficient evidence or ask for help; it should not invent a supporting source."
  },
  "7-3": {
    analogy: "A driving test checks difficult situations as well as easy roads; an assistant evaluation should include questions it cannot answer.",
    steps: ["Prepare permitted, representative answerable and unanswerable test questions.", "Check retrieval, source support, helpfulness and whether the system abstains when evidence is missing.", "Inspect failures and compare results after changes without exposing private data."],
    connection: "Evaluation helps an AI engineer identify failure modes before and after deployment; a single flattering example is not enough.",
    question: "Why include a question whose answer is absent from the source documents?",
    answer: "It tests whether the assistant admits uncertainty instead of inventing an answer."
  },
  "8-0": {
    analogy: "A reception desk checks that a form is complete before passing it to a specialist; an API validates input before calling a model.",
    steps: ["Receive a parcel weight and verify that it is a finite positive number.", "Reject invalid values with a clear client-facing error in the actual API.", "For valid input, run the intended calculation or model and return a documented response."],
    connection: "Reliable AI services need clear input contracts, safe error handling and an already loaded model where appropriate.",
    question: "Should a negative parcel weight be passed to the prediction logic as if it were valid?",
    answer: "No. Reject it at the boundary with an understandable validation error."
  },
  "8-1": {
    analogy: "A recipe another person can repeat needs ingredients, quantities and instructions, not just a photo of the finished meal.",
    steps: ["Record the supported environment and dependencies.", "Document setup and a small permitted sample, without committing secrets.", "Follow the instructions in a clean environment and correct any missing steps."],
    connection: "Reproducibility helps teammates run, evaluate and maintain an AI project instead of relying on one developer's laptop.",
    question: "Does a screenshot alone let a teammate reproduce a model result?",
    answer: "No. They also need the relevant code, permitted data or sample, dependencies and repeatable instructions."
  },
  "8-2": {
    analogy: "Build a bicycle before a race car: a simple working baseline shows what is useful before adding complex machinery.",
    steps: ["Define a repair-guide search problem, permitted documents and an evaluation set.", "Start with keyword search and measure results on held-out questions.", "Compare an improved approach, inspect failures and document limitations and safety boundaries."],
    connection: "A capstone demonstrates the whole AI engineering cycle: problem, data, baseline, interface, evaluation and honest limitations.",
    question: "Why keep a keyword-search baseline when trying embeddings?",
    answer: "It gives a reference for whether the added complexity actually improves results on the chosen evaluation."
  },
  "8-3": {
    analogy: "A trustworthy project demonstration is like a map with a legend: it shows where it works and where the map stops.",
    steps: ["Explain the user, problem and permitted data.", "Show a baseline, evaluation results and at least one representative failure.", "Give setup steps and state what the prototype has not been tested or approved to do."],
    connection: "Clear evidence and limitations help others judge whether an AI project is reproducible and suitable for its intended use.",
    question: "Should an untested prototype be described as ready for automated decisions?",
    answer: "No. Describe it honestly as a prototype and specify its tested scope and limitations."
  }
};
