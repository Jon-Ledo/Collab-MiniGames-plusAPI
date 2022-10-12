// VARIABLES
const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.getElementById('timeLeft')
const score = document.getElementById('score')
const modal = document.querySelector('.modal')
const modalMsg = document.querySelector('.modal-body-text')
const closeModalBtn = document.querySelector('button[data-bs-dismiss="modal"]')

let hitConfirmed = 0
let moleLocation
let currentTime = 60
let timerId = null
// Game Functions
moveMole()
let countDownTimerId = setInterval(countDown, 1000)

// Event for when mole is hit
squares.forEach((square) => {
  square.addEventListener('mousedown', () => {
    if (square.id === moleLocation) {
      hitConfirmed++
      score.textContent = hitConfirmed
      moleLocation = null
    }
  })
})

// Event to close the modal
closeModalBtn.addEventListener('click', closeModal)

// ************
// FUNCTIONS **
// ************
function getRandomSquare() {
  squares.forEach((square) => {
    square.classList.remove('mole')
  })

  let randomSquare = squares[Math.floor(Math.random() * 9)]
  randomSquare.classList.add('mole')

  moleLocation = randomSquare.id
}

function moveMole() {
  timerId = setInterval(getRandomSquare, 500)
}

function countDown() {
  currentTime--
  timeLeft.textContent = currentTime

  if (currentTime === 0) {
    clearInterval(countDownTimerId)
    clearInterval(timerId)

    showModal()

    localStorage.setItem('highScore', hitConfirmed)
    return window.location.assign('./End screen/Endgame.html')
  }
}

function showModal() {
  modal.style.display = 'block'

  modalMsg.textContent = `Your final score is ${hitConfirmed}`
  document.querySelector('input').focus()
}

function closeModal() {
  modal.style.display = 'none'
}
