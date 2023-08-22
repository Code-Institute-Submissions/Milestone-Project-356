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