const question = document.getElementById("question");
const options = Array.from(document.getElementsByClassName("option"));

let currentQuestion = [];
let userAnswer = true;
let score = 0;
let questionNumber = 0;
let possibleQuestions = [];
let difficultyLevel = '';

let questions = [
    {
        question: "this is question number 1",
        option1: "answer1",
        option2: "answer2",
        option3: "answer3",
        option4: "answer4",
        answer: 1
    },
    {
        question: "this is question number 2",
        option1: "answer1",
        option2: "answer2",
        option3: "answer3",
        option4: "answer4",
        answer: 2
    },
    {
        question: "this is question number 3",
        option1: "answer1",
        option2: "answer2",
        option3: "answer3",
        option4: "answer4",
        answer: 3
    }
];

const maxQuestions = 10;

startQuiz = () => {
    questionNumber = 0;
    score = 0;
    possibleQuestions = [...questions];
    console.log(possibleQuestions);
    genNewQuestion();
};

genNewQuestion = () => {
    questionNumber++;
    const questionList = Math.floor(Math.random() * possibleQuestions.length);
    currentQuestion = possibleQuestions[questionList];
    question.innerText = currentQuestion.question;

    options.forEach( choice => {
        const number = option.dataset['answer'];
        option.innerText = currentQuestion['option' + number];
    })
};

startQuiz();
