//Query selectors
const optionsRef = Array.from(document.querySelectorAll(".option"));
const difficultyLevel = Array.from(document.querySelectorAll(".difficulty"));
const questionRef = document.querySelector("#question");
const homeScreenRef = document.querySelector("#home");
const gameScreenRef = document.querySelector("#game");
const summaryScreenRef = document.querySelector("#summary");
const questionTrackerRef = document.querySelector("#question-tracker")
const questionDifficultyRef = document.querySelector("#question-difficulty")
const scoreTrackerRef = document.querySelector("#score-tracker")
const feedbackRef = document.querySelector("#feedback");
const resultsRef = document.querySelector("#results");


const maxQuestions = 10;

//Pre=requisites
let currentQuestion = [];
let userAnswer = false;
let score = 0;
let questionNumber = 0;
let availableQuestions = [];

/**
 * Register what difficulty of questions is selected by the user. 
 * The difficulty values are fetched and displayed in the game page.
 */
const difficultyRef = () => {
    difficultyLevel.forEach(level => {
        level.addEventListener("click", e => {
            e.preventDefault()
            fetchData(e.target.value);
            questionDifficultyRef.innerHTML = `Difficulty: <br> ${e.target.value}`;
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

/**
 * Data is converted to required data from the fetched API.
 * @param {Array} listOfQuestions is mapped into an array containing required information. 
 * @returns The question stated in the fetched data.
 * @returns The correct answer in the fetched data.
 * @returns A randomly assorted array combining the correct and incorrect answers.
 */
const convertedQuestions = listOfQuestions => {
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
 * displayGame function is called.
 * genNewQuestion function is called.
 * @param {Array} questions list of questions from the API. 
 */
const startQuiz = (questions) => {
    questionNumber = 0;
    score = 0;
    availableQuestions = [...questions];
    displayGame();
    genNewQuestion();
};

/**
 * Function to generate new question.
 * If a total of 10 questions have been answered, then the summary sceen function is called.
 * Question number tracker increments according to number of questions answered.
 * Questions are randomised and displayed according to fetched data.
 * randomised answers for the relative question is inputted into each data set. 
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

        optionsRef.forEach((option) => {
            const optionNum = option.dataset['answer'];
            const optionTxt = currentQuestion.answers[optionNum]
            option.innerHTML = optionTxt
        })
        //completed question is removed from available questions index and user is allowed to answer question.
        availableQuestions.splice(index, 1);
        userAnswer = true;
    }
};

/**
 * function to check if option selected is correct or incorrect and therefore adds classes required to
 * turn answer box to green if correct and red if incorrect.
 * after each selection a delay is set and genNewQuestion function is called.
 */
const checkAnswer = () => {
    optionsRef.forEach(option => {
        option.addEventListener("click", e => {
            if (!userAnswer) return;

            userAnswer = false;
            const selectedOption = e.target;
            const selectedAnswer = selectedOption.textContent;

            if (selectedAnswer == currentQuestion.correctAnswer) {
                //score is increased due to correct answer being selected and value is displayed in the HUD of game.
                score++
                scoreTrackerRef.innerHTML = `score: <br> ${score}`;
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

//function to display game screen and hide the home screen.
const displayGame = () => {
    homeScreenRef.classList.add("hidden");
    gameScreenRef.classList.remove("hidden");
}
/**
 * function to display summary screen and hide game screen.
 * Feedback from quiz added according to score obtained. 
 */
const displaySummary = () => {
    gameScreenRef.classList.add("hidden");
    if (score < 4) {
        feedbackRef.innerHTML = "You completed the quiz, but you need to brush up on your general knowledge";
    } else if (score < 7) {
        feedbackRef.innerHTML = "You completed the quiz, you did amazing! but you can always do better";
    } else {
        feedbackRef.innerHTML = "You completed the quiz, you'll be number 1 in your local pub quiz!"
    };
    resultsRef.innerHTML = `WOW! you scored <strong>${score}</strong> out of a possible ${maxQuestions} questions! <br> follow our social media accounts for any news! or press the home button below to attempt the quiz again`;
    summaryScreenRef.classList.remove("hidden");
}

//calling functions difficultyRef and checkAnswer once HTML document has parced. 
window.addEventListener('DOMContentLoaded', (e) => difficultyRef(), checkAnswer());