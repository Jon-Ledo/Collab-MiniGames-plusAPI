// VARIABLES
const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.getElementById('timeLeft')
const score = document.getElementById('score')
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
    // TODO replace alert with modal
    alert('GAME OVER! Your final score is ' + hitConfirmed)
  }
}

