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

// Function to shuffle the order of elements in the array
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

  // Function to update the timer display with the remaining time
const updateTimerDisplay = () => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
   
    // Check if time is 10 seconds or less, and apply red color if true
    if (timeLeft <= 10) {
      timerElement.style.color = "red"; // Change the color to red
    } else {
      timerElement.style.color = "black"; // Change the color back to black 
    }
    timerElement.innerText = `Time Left: ${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  let timerInterval;

  // Function to start the countdown timer
const startTimer = () => {
    timerInterval = setInterval(() => {
      timeLeft--;
      updateTimerDisplay();
      if (timeLeft <= 0) {
        // Time's up, end the quiz
        clearInterval(timerInterval);
        endQuiz();
      }
    }, 1000); // Timer update interval set to 1 second (1000 ms).
  };
  
  // Function to display the final score and end of the quiz
  const endQuiz = () => {
    quiz.innerHTML = ` <h2>You answered ${score}/${quizData.length} questions correctly</h2> 
            <button onclick="history.go(0)">Play Again</button>
            <button><a href="index.html" style="color: white; text-decoration: none;">Return to Home</a></button> `;
  };

  // Shuffle the quiz questions before starting the quiz
shuffleArray(quizData);

// Load the first question and start the quiz
loadQuiz();

// Add event listener to the submit button to handle user answers
submitButton.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    // Check if the selected answer is correct and update the score
    if (answer === quizData[currentQuiz].correct) score++;
    // Move to the next question if available, otherwise end the quiz
    currentQuiz++;
    if (currentQuiz < quizData.length) loadQuiz();
    else {
      // End of quiz, display final score and option to play again
      quiz.innerHTML = ` <h2>You answered ${score}/${quizData.length} questions correctly</h2> 
          <button onclick="history.go(0)">Play Again</button>
          <button><a href="index.html" style="color: white; text-decoration: none;">Return to Home</a></button> `;
    }
  }
});