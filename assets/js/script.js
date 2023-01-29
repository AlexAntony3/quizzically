const question = document.getElementById("question");
const options = Array.from(document.getElementsByClassName("option"));
const easyQ = document.getElementById("easy")
const mediumQ = document.getElementById("medium")
const hardQ = document.getElementById("hard")
const gameScreen = document.getElementById("game");
const summaryScreen = document.getElementById("summary");

const difficultyLevel = [easyQ, mediumQ, hardQ];
const maxQuestions = 10;

let currentQuestion = [];
let userAnswer = false;
let score = 0;
let questionNumber = 0;
let possibleQuestions = [];
let difficulty = "";
let questions = [];

difficultyLevel.forEach(level => {
    level.addEventListener("click", e => {
        difficulty = e.target.value;
        fetchData(difficulty);
    });
});

const fetchData = (difficulty) => {
    fetch(`https://opentdb.com/api.php?amount=10&category=9&difficulty=${difficulty}&type=multiple`)
        .then(response => response.json())
        .then(data => questions = [...data.results])
        .then(() => startQuiz());

    let correctAnswer = [questions.correct_answer];
    let incorrectAnswer = [questions.incorrect_answer];
    let optionList = incorrectAnswer;
    questions.answer = Math.floor(Math.random() * 4), +1;
    optionList.splice(questions.answer - 1, 0, correctAnswer);

    console.log(correctAnswer);

}

startQuiz = () => {
    questionNumber = 0;
    score = 0;
    genNewQuestion();
};


genNewQuestion = () => {
    if (questionNumber == maxQuestions) {
        displaySummary();
    } else {
        questionNumber++;
        const index = Math.floor(Math.random() * questions.length);
        currentQuestion = questions[index];
        question.innerText = currentQuestion.question;

        options.forEach((option) => {
            const answer = option.dataset['answer'];
            option.innerText = currentQuestion['option' + answer];
        })

        questions.splice(index, 1);
        userAnswer = true;
    }
};

options.forEach(option => {
    option.addEventListener("click", e => {
        if (!userAnswer) return;

        userAnswer = false;
        const selectedOption = e.target;
        const selectedAnswer = selectedOption.dataset["answer"];

        if (selectedAnswer == currentQuestion.answer) {
            score++
            selectedOption.parentElement.classList.add("correct");

        } else {
            selectedOption.parentElement.classList.add("incorrect");
            selectedOption.parentElement.classList.remove("incorrect");
        }
        genNewQuestion();
    })
})