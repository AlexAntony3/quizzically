const questionRef = document.querySelector("#question");
const optionsRef = Array.from(document.querySelectorAll(".option"));
const easyQ = document.querySelector("#easy")
const mediumQ = document.querySelector("#medium")
const hardQ = document.querySelector("#hard")
const gameScreenRef = document.querySelector("#game");
const summaryScreenRef = document.querySelector("#summary");
const scoreTracker = document.querySelector("#score-tracker")

const difficultyLevel = [easyQ, mediumQ, hardQ];
const maxQuestions = 10;

let currentQuestion = [];
let userAnswer = false;
let score = 0;
let questionNumber = 0;
let availableQuestions = [];
let questions = [];

const difficultyRef = () => {
    difficultyLevel.forEach(level => {
        level.addEventListener("click", e => {
            e.preventDefault()
            fetchData(e.target.value);
        });
    });
};


const fetchData = (difficulty) => {
    fetch(`https://opentdb.com/api.php?amount=10&category=9&difficulty=${difficulty}&type=multiple`)
        .then(response => response.json())
        .then(data => convertedQuestions(data.results))
        .then((newData) => startQuiz(newData))
}

const convertedQuestions = listOfQuestions => {
    return listOfQuestions.map(singleQuestion => {
        return {
            question: singleQuestion.question,
            correctAnswer: singleQuestion.correct_answer,
            answers: [...singleQuestion.incorrect_answers, singleQuestion.correct_answer]
        };
    });
};

const startQuiz = (questions) => {
    questionNumber = 0;
    score = 0;
    availableQuestions = [...questions];
    genNewQuestion();
};


const genNewQuestion = () => {
    if (questionNumber == maxQuestions) {
        displaySummary();
    } else {
        questionNumber++;
        scoreTracker.innerHTML = `${questionNumber} / ${maxQuestions}`;
        const index = Math.floor(Math.random() * availableQuestions.length);
        currentQuestion = availableQuestions[index];
        questionRef.innerHTML = currentQuestion.question;

        optionsRef.forEach((option) => {
            const optionNum = option.dataset['answer'];
            const optionTxt = currentQuestion.answers[optionNum]
            option.innerHTML = optionTxt
        })

        availableQuestions.splice(index, 1);
        userAnswer = true;
    }
};

const checkAnswer = () => {
    optionsRef.forEach(option => {
        option.addEventListener("click", e => {
            if (!userAnswer) return;

            userAnswer = false;
            const selectedOption = e.target;
            const selectedAnswer = selectedOption.textContent;

            if (selectedAnswer == currentQuestion.correctAnswer) {
                score++
                selectedOption.parentElement.classList.add("correct");

            } else {
                selectedOption.parentElement.classList.add("incorrect");
                selectedOption.parentElement.classList.remove("incorrect");
            }
            genNewQuestion();
        })
    })
}


window.addEventListener('DOMContentLoaded', (e) => difficultyRef(), checkAnswer());