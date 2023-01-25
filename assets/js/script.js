const question = document.getElementById("question");
const options = document.getElementsByClassName("option");



fetch("https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple")
.then(res = res.json())
.then(rawData = console.log(rawData.results))