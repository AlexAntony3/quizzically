const optionsRef = Array.from(document.querySelectorAll(".option"));
const difficultyLevelRef = Array.from(document.querySelectorAll(".difficulty"));
const questionRef = document.querySelector("#question");
const homeScreenRef = document.querySelector("#home");
const gameScreenRef = document.querySelector("#game");
const summaryScreenRef = document.querySelector("#summary");
const questionTrackerRef = document.querySelector("#question-tracker");
const questionDifficultyRef = document.querySelector("#question-difficulty");
const scoreTrackerRef = document.querySelector("#score-tracker");
const endGameBtn = document.querySelector("#end-game-btn");
const feedbackRef = document.querySelector("#feedback");
const resultsRef = document.querySelector("#results");

const maxQuestions = 10;
let currentQuestion = [];
let isUserReady = false;
let score = 0;
let questionNumber = 0;
let availableQuestions = [];

/**
 * Register what difficulty of questions is selected by the user. 
 * The difficulty values are fetched and displayed in the game page.
 */
const difficultySelector = () => {
    difficultyLevelRef.forEach(level => {
        level.addEventListener("click", e => {
            e.preventDefault();
            fetchData(e.target.value);
            questionDifficultyRef.innerHTML = `Difficulty: <br> ${e.target.value}`;
        });
    });
};

/**
 * Fetching data from api according to difficulty.
 * @param {string} difficulty value is determined by selected difficulty.
 */
const fetchData = (difficulty) => {
    fetch(`https://opentdb.com/api.php?amount=10&category=9&difficulty=${difficulty}&type=multiple`)
        .then(response => response.json())
        .then(data => convertedQuestions(data.results))
        .then(questions => startQuiz(questions))
        .catch(error => console.log(error));
};

/**
 * Data is converted to required data from the fetched API.
 * @returns Questions, correct answer and shuffled total answers.
 */
const convertedQuestions = (listOfQuestions) => {
    return listOfQuestions.map(singleQuestion => {
        return {
            question: singleQuestion.question,
            correctAnswer: singleQuestion.correct_answer,
            answers: [...singleQuestion.incorrect_answers, singleQuestion.correct_answer].sort(() => Math.random() - 0.5)
        };
    });
};

/**
 * pre-requisite parameters are set and questions array are spread into an available questions array.
 * @param {Array} questions list of questions from the API. 
 */
const startQuiz = (questions) => {
    questionNumber = 0;
    score = 0;
    availableQuestions = [...questions];
    displayGame();
    genNewQuestion();
    endGameBtn.addEventListener('click', () => displaySummary());
};

/**
 * Function to generate new question with shuffled answer options 
 */
const genNewQuestion = () => {
    if (questionNumber == maxQuestions) {
        displaySummary();
    } else {
        questionNumber++;
        questionTrackerRef.innerHTML = `Question: <br> ${questionNumber} / ${maxQuestions}`;

        const index = Math.floor(Math.random() * availableQuestions.length);
        currentQuestion = availableQuestions[index];
        questionRef.innerHTML = currentQuestion.question;

        optionsRef.forEach(option => {
            const optionNum = option.dataset.answer;
            option.innerHTML = currentQuestion.answers[optionNum];
        });
        
        availableQuestions.splice(index, 1);
        isUserReady = true;
    }
};

/**
 * Function to check if option selected is correct or not.
 */
const checkAnswer = () => {
    optionsRef.forEach(option => {
        option.addEventListener("click", e => {
            if (!isUserReady) return;

            isUserReady = false;
            const selectedOption = e.target;
            const selectedAnswer = selectedOption.textContent;

            if (selectedAnswer === currentQuestion.correctAnswer) {
                score++;
                scoreTrackerRef.innerHTML = `score: <br> ${score}`;

                selectedOption.parentElement.classList.add("correct");

                setTimeout(() => {
                    selectedOption.parentElement.classList.remove("correct");
                    genNewQuestion();
                }, 1300);

            } else {
                selectedOption.parentElement.classList.add("incorrect");

                setTimeout(() => {
                    selectedOption.parentElement.classList.remove("incorrect");
                    genNewQuestion();
                }, 1300);
            }
        });
    });
};

/**
 *  function to display game screen and hide the home screen.
 */
const displayGame = () => {
    homeScreenRef.classList.add("hidden");
    gameScreenRef.classList.remove("hidden");
};

/**
 * function to display summary screen and hide game screen.
 * Feedback from quiz added according to score obtained. 
 */
const displaySummary = () => {
    summaryScreenRef.classList.remove("hidden");
    gameScreenRef.classList.add("hidden");
    if (score < 4) {
        feedbackRef.innerHTML = "You completed the quiz, but you need to brush up on your general knowledge";
        resultsRef.innerHTML = `Ouch! you scored <strong>${score}</strong> out of a possible ${maxQuestions} questions! <br> Follow our social media accounts for any news! or press the home button below to attempt the quiz again`;
    } else if (score < 7) {
        feedbackRef.innerHTML = "You completed the quiz, you did amazing! but you can always do better";
        resultsRef.innerHTML = `Not bad! you scored <strong>${score}</strong> out of a possible ${maxQuestions} questions! <br> Follow our social media accounts for any news! or press the home button below to attempt the quiz again`;
    } else {
        feedbackRef.innerHTML = "You completed the quiz, you'll be number 1 in your local pub quiz!";
        resultsRef.innerHTML = `WOW! you scored <strong>${score}</strong> out of a possible ${maxQuestions} questions! <br> Follow our social media accounts for any news! or press the home button below to attempt the quiz again`;
    }
};

/**
 * Calling functions once HTML document has parsed. 
 */ 
window.addEventListener('DOMContentLoaded', e => {
    difficultySelector();
    checkAnswer();
});