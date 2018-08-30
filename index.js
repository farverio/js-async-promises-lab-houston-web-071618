const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

const questionContainer = document.querySelector('.question-container')
const trueAndFalseButtons = document.querySelector('.true-false-list')
let hidingButtonsFlag = true
const askButton = document.querySelector('.waves-effect')


function appendQuestion(question) {
  questionContainer.innerHTML = question
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
  trueAndFalseButtons.childrenNode.classList.remove('hide')

  setInterval(()=> {
    trueAndFalseButtons.childrenNode.classList.add('hide')
  }, 5000)
}

function displayQuestionOnClick() {
  console.log("hello")
}

askButton.addEventListener('click', ()=> displayQuestionOnClick)
