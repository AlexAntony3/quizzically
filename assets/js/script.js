const question = document.getElementById("question");
const options = Array.from(document.getElementsByClassName("option"));
const easyQ = document.getElementById("easy")
const mediumQ = document.getElementById("medium")
const hardQ = document.getElementById("hard")


let currentQuestion = [];
let userAnswer = false;
let score = 0;
let questionNumber = 0;
let possibleQuestions = [];

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
        option1: "answer5",
        option2: "answer6",
        option3: "answer7",
        option4: "answer8",
        answer: 2
    },
    {
        question: "this is question number 3",
        option1: "answer9",
        option2: "answer10",
        option3: "answer11",
        option4: "answer12",
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

    options.forEach( option => {
        const answer = option.dataset['answer'];
        option.innerText = currentQuestion['option' + answer];
    })

    possibleQuestions.splice(questionList, 1);

    acceptingAnswers = true;
};

options.forEach(choice => {

})

startQuiz();
