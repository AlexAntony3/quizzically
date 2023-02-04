const optionsRef = Array.from(document.querySelectorAll(".option"));
const difficultyLevel = Array.from(document.querySelectorAll(".difficulty"));
const questionRef = document.querySelector("#question");
const homeScreenRef = document.querySelector("#home");
const gameScreenRef = document.querySelector("#game");
const summaryScreenRef = document.querySelector("#summary");
const questionTracker = document.querySelector("#question-tracker")
const questionDifficulty = document.querySelector("#question-difficulty")
const scoreTracker = document.querySelector("#score-tracker")
const feedback = document.querySelector("#feedback");
const resultsRef = document.querySelector("#results");

const maxQuestions = 10;

let currentQuestion = [];
let userAnswer = false;
let score = 0;
let questionNumber = 0;
let availableQuestions = [];
let questions = [];

/**
 * Register what difficulty of questions is selected by the user. 
 * The difficulty values are fetched and displayed in the game page.
 */
const difficultyRef = () => {
    difficultyLevel.forEach(level => {
        level.addEventListener("click", e => {
            e.preventDefault()
            fetchData(e.target.value);
            questionDifficulty.innerHTML = `Difficulty: <br> ${e.target.value}`;
        });
    });
};

/**
 * Fetching data from api according to difficulty.
 * Json file is converted to format required for the game.
 * Data is then transferred to the start quiz function. 
 * @param {string} difficulty value is determined by button clicked.
 */
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
            answers: [...singleQuestion.incorrect_answers, singleQuestion.correct_answer].sort(() => Math.random() - 0.5)
        };
    });
};


const startQuiz = (questions) => {
    questionNumber = 0;
    score = 0;
    availableQuestions = [...questions];
    displayGame();
    genNewQuestion();
};


const genNewQuestion = () => {
    if (questionNumber == maxQuestions) {
        displaySummary();
    } else {
        questionNumber++;
        questionTracker.innerHTML = `Question: <br> ${questionNumber} / ${maxQuestions}`;

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
                scoreTracker.innerHTML = `score: <br> ${score}`;
                selectedOption.parentElement.classList.add("correct");
                setTimeout(() => {
                    selectedOption.parentElement.classList.remove("correct");
                    genNewQuestion();
                }, 1000);
            } else {
                selectedOption.parentElement.classList.add("incorrect");
                setTimeout(() => {
                    selectedOption.parentElement.classList.remove("incorrect");
                    genNewQuestion();
                }, 1000);
            };
        });
    });
};

const displayGame = () => {
    homeScreenRef.classList.add("hidden");
    gameScreenRef.classList.remove("hidden");
}

const displaySummary = () => {
    gameScreenRef.classList.add("hidden");
    if (score < 4) {
        feedback.innerHTML = "You completed the quiz, but you need to brush up on your general knowledge";
    } else if (score < 7) {
        feedback.innerHTML = "You completed the quiz, you did amazing! but you can always do better";
    } else {
        feedback.innerHTML = "You completed the quiz, you'll be number 1 in your local pub quiz!"
    };
    resultsRef.innerHTML = `WOW! you scored ${score} out of a possible ${maxQuestions} questions! <br> follow our social media accounts for any news! or press the home button below to attempt the quiz again`;
    summaryScreenRef.classList.remove("hidden");
}


window.addEventListener('DOMContentLoaded', (e) => difficultyRef(), checkAnswer());