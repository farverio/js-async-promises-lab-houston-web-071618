const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question;
let questionContainer = document.querySelector('#question-container')
let 

function appendQuestion(question) {
  questionContainer.innerHTML = += question
}

function askQuestionThen(time) {
  question = question[0]
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(question)
    }, time)
  })
}

function removeQuestion() {
  
}

function askQuestionThenRemoveQuestion() {
  
}

function toggleTrueAndFalseButtons() {
  class="section center-align true-false-list"
}

function displayQuestionOnClick() {
  
}
