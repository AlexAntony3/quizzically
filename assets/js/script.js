const question = document.getElementById("question");
const options = Array.from(document.getElementsByClassName("option"));
const easyQ = document.getElementById("easy")
const mediumQ = document.getElementById("medium")
const hardQ = document.getElementById("hard")
const gameScreen = document.getElementById("game");
const summaryScreen = document.getElementById("summary");

const difficultyLevel = [easyQ, mediumQ, hardQ];

let currentQuestion = [];
let userAnswer = false;
let score = 0;
let questionNumber = 0;
let possibleQuestions = [];
let difficulty = "";


difficultyLevel.forEach(level => {
    level.addEventListener("click", e => {
        difficulty = e.target.value;
        fetchData(difficulty);
    });
});


let questions = [{
        "difficulty": "easy",
        "question": "Who is the protagonist in the game &quot;The Walking Dead: Season One&quot;?",
        "correct_answer": "Lee Everett",
        "incorrect_answers": [
            "Clementine",
            "Kenny",
            "Rick Grimes"
        ]
    },
    {
        "difficulty": "hard",
        "question": "In the game Nuclear Throne, what organization chases the player character throughout the game?",
        "correct_answer": "The I.D.P.D",
        "incorrect_answers": [
            "The Fishmen",
            "The Bandits",
            "The Y.V.G.G"
        ]
    },
    {
        "difficulty": "medium",
        "question": "Which of these is not a real character in the cartoon series My Little Pony: Friendship is Magic?",
        "correct_answer": "Rose Marene",
        "incorrect_answers": [
            "Pinkie Pie",
            "Maud Pie",
            "Rainbow Dash"
        ]
    },
];


const maxQuestions = 10;

startQuiz = () => {
    questionNumber = 0;
    score = 0;
    possibleQuestions = [...questions];
    genNewQuestion();
};

genNewQuestion = () => {
    if (questionNumber == maxQuestions) {
        displaySummary();
    } else {
        questionNumber++;
        const index = Math.floor(Math.random() * possibleQuestions.length);
        currentQuestion = possibleQuestions[index];
        question.innerText = currentQuestion.question;

        options.forEach(option => {
            const answer = option.dataset['answer'];
            option.innerText = currentQuestion['option' + answer];
        })

        possibleQuestions.splice(index, 1);

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





startQuiz();