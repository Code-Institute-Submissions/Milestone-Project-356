// Get references to HTML elements using their IDs and classes
const quiz = document.getElementById("quiz");
const answerElements = document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitButton = document.getElementById("submit");
const timerElement = document.getElementById("timer");

// Initialize variables to keep track of quiz state and score
let currentQuiz = 0;
let score = 0;
let timeLeft = 0;

// Function to shuffle the order of elements in an array
const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };
  
  // Function to clear the selection of answer choices
  const deselectAnswers = () => {
    answerElements.forEach((answer) => (answer.checked = false));
  };
  
  // Function to get the ID of the selected answer choice
  const getSelected = () => {
    let answer;
    answerElements.forEach((answerElement) => {
      if (answerElement.checked) answer = answerElement.id;
    });
    return answer;
  };
  
  // Function to load and display the current quiz question and answer choices
  const loadQuiz = () => {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionElement.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
  
    // Counts what questions the user is on and increments by one
    const questionCounterElement = document.getElementById("question-counter");
    questionCounterElement.innerText = `${currentQuiz + 1} of ${quizData.length}`;
  
    // If it's the first question, set the initial time and start the timer
    if (currentQuiz === 0) {
      timeLeft = 60; // Time left for quiz (in seconds).
      updateTimerDisplay();
      startTimer();
    }
  };