// Questions and answers
const questions = [
  {
    question: "What Does HTML Stand For?",
    choices: [
      "HighText Machine Language",
      "HyperText and links Markup Language",
      "HyperText Markup Language",
      "HyperText Mixed Language",
    ],
    answer: "HyperText Markup Language",
  },
  {
    question: "What Does CSS Stand For?",
    choices: [
      "Cascade Style Sheets",
      "Colour and Style Sheets",
      "Complete Style Sheets",
      "Cascading Style Sheets",
    ],
    answer: "Cascading Style Sheets",
  },
  {
    question: "What is an API?",
    choices: [
      "Application Programming Interface",
      "Application Profile Interface",
      "Application Portfolio Interface",
      "Application Public Interface",
    ],
    answer: "Application Programming Interface",
  },
  {
    question: "What Does DOM Stand For?",
    choices: [
      "Document Observe Model",
      "Document Object Model",
      "Document Option Model",
      "Document Open Model",
    ],
    answer: "Document Object Model",
  },
  {
    question:
      "Which of the following is a client-side storage mechanism in web browsers that allows websites to store data persistently on a user's device?",
    choices: ["Local Storage", "PHP Sessions", "Cookies", "Session Storage"],
    answer: "Local Storage",
  },
];

let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 60; // Initial time limit

// Function to start the quiz
function startQuiz() {
  document.getElementById("start").style.display = "none";
  document.getElementById("questions").classList.remove("hide");
  displayQuestion();
  startTimer();
}

function displayQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  document.getElementById("question-title").textContent =
    currentQuestion.question;
  const choicesContainer = document.getElementById("choices");
  choicesContainer.innerHTML = "";
  currentQuestion.choices.forEach((choice) => {
    const button = document.createElement("button");
    button.textContent = choice;
    button.addEventListener("click", () => handleAnswer(choice));
    choicesContainer.appendChild(button);
  });
}

function handleAnswer(choice) {
  if (choice === questions[currentQuestionIndex].answer) {
    score++;
  } else {
    timeLeft -= 10; // minus 10 seconds for each wrong answer
  }
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    displayQuestion();
  } else {
    endQuiz();
  }
}

function startTimer() {
  const timer = setInterval(() => {
    timeLeft--;
    document.getElementById("time").textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timer);
      endQuiz();
    }
  }, 1000);
}

function endQuiz() {
  document.getElementById("questions").classList.add("hide");
  const endScreen = document.getElementById("end-screen");
  endScreen.classList.remove("hide");
  document.getElementById("final-score").textContent = score;
}
