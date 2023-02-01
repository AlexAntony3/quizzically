const questionRef = document.querySelector("#question");
const optionsRef = Array.from(document.querySelectorAll(".option"));
const easyQ = document.querySelector("#easy")
const mediumQ = document.querySelector("#medium")
const hardQ = document.querySelector("#hard")
const gameScreen = document.querySelector("#game");
const summaryScreen = document.querySelector("#summary");

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
}



function startQuiz() {
    questionNumber = 0;
    score = 0;
    genNewQuestion();
};


function genNewQuestion() {
    if (questionNumber == maxQuestions) {
        displaySummary();
    } else {
        questionNumber++;
        const index = Math.floor(Math.random() * questions.length);
        currentQuestion = questions[index];
        questionRef.innerHTML = currentQuestion.question;

        let correctAnswer = currentQuestion.correct_answer;
        let incorrectAnswers = currentQuestion.incorrect_answers;
        const optionList = [...incorrectAnswers, correctAnswer];

        console.log(currentQuestion);
        console.log(currentQuestion.incorrect_answers[0]);
        console.log(`This is option list: ${optionList}`);

        optionsRef.forEach((option) => {
            const optionNum = option.dataset['answer'];
            const optionTxt = optionList[optionNum]
            option.innerText = optionTxt
        })

        questions.splice(index, 1);
        userAnswer = true;
    }
};

optionsRef.forEach(option => {
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