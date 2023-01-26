const question = document.getElementById("question");
const options = Array.from(document.getElementsByClassName("option"));

let currentQuestion = [];
let userAnswer = false;
let score = 0;
let questionNumber = 0;
let possibleQuestions = [];
let difficultyLevel = '';

let questions = [];

const maxQuestions = 10;

startQuiz = () => {
    questionNumber = 0;
    score = 0;
    possibleQuestions = [...questions];
    genNewQuestion();
};

genNewQuestion = () => {
    questionNumber++;
    const questionList = Math.floor(Math.random() * possibleQuestions.length);
    currentQuestion = possibleQuestions(questionList);
    question.innerText = currentQuestion.question;
}
