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

}

function startQuiz() {
    questionNumber = 0;
    score = 0;
    genNewQuestion();
};
// startQuiz = () => {
//     questionNumber = 0;
//     score = 0;
//     genNewQuestion();
// };


function genNewQuestion() {
    if (questionNumber == maxQuestions) {
        displaySummary();
    } else {
        questionNumber++;
        const index = Math.floor(Math.random() * questions.length);
        currentQuestion = questions[index];
        question.innerHTML = currentQuestion.question;

        let correctAnswer = currentQuestion.correct_answer;
        let incorrectAnswers = currentQuestion.incorrect_answers;
        const optionList = [...incorrectAnswers, correctAnswer];

        console.log(currentQuestion);
        console.log(currentQuestion.incorrect_answers[0]);
        console.log(`This is option list: ${optionList}`);

        options.forEach((option) => {
            const optionNum = option.dataset['answer'];
            const optionTxt = optionList[optionNum]
            option.innerText = optionTxt
        })

        questions.splice(index, 1);
        userAnswer = true;
    }
};
// genNewQuestion = () => {
//     if (questionNumber == maxQuestions) {
//         displaySummary();
//     } else {
//         questionNumber++;
//         const index = Math.floor(Math.random() * questions.length);
//         currentQuestion = questions[index];
//         question.innerText = currentQuestion.question;
//         console.log(currentQuestion);
//         console.log(currentQuestion.incorrect_answers[0]);
//         console.log(`This is option list: ${optionList}`);

//         options.forEach((option) => {
//             const answer = option.dataset['answer'];
//             console.log(`This is option: ${option}`)
//             option.innerText = currentQuestion['option' + answer];
//             console.log(option.dataset['incorrect_answer'])
//             console.log(`This is an answer: ${answer}`);
//             console.log(`This is the option.inner text: ${currentQuestion['option' + answer]}`)
//         })

//         questions.splice(index, 1);
//         userAnswer = true;
//     }
// };

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