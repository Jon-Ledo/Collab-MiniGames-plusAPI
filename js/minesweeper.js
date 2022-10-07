// Variables
const minefield = document.querySelector('.board')

// ****************
// API and FETCH **
// ****************
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'ab28c4b632mshc8742727159b347p19c425jsn30615a86f040',
    'X-RapidAPI-Host': 'minesweeper1.p.rapidapi.com',
  },
}

fetch(
  // Parameters
  // r > # of rows
  // c > # of columns
  // bombs > # of bombs
  'https://minesweeper1.p.rapidapi.com/boards/new?r=10&c=10&bombs=10',
  options
)
  .then((response) => response.json())
  .then((response) => {
    // Build board based on response
    // default board size 10x10 with 10 mines
    createBoard(response)
  })
  .catch((err) => console.error(err))

// FUNCTIONS
function createBoard(data) {
  const board = data.board

  board.forEach((boardLine, index) => {
    // const lineNumber = index + '0'

    boardLine.forEach((square) => {
      const createdDiv = document.createElement('div')
      createdDiv.classList.add('square')
      if (square > 0) {
        createdDiv.textContent = square
      } else if (square < 0) {
        createdDiv.textContent = '💣'
      }

      // determine colour of number in square
      if (createdDiv.textContent === '1') {
        createdDiv.classList.add('blue')
      } else if (createdDiv.textContent === '2') {
        createdDiv.classList.add('green')
      } else if (createdDiv.textContent === '3') {
        createdDiv.classList.add('red')
      }

      // createdDiv.classList.add('hide')
      minefield.append(createdDiv)

      createdDiv.addEventListener('mousedown', (e) => {
        rightClick(e)
      })
    })
  })
}

// testing right click events to disarm the mines for game func
function rightClick(e) {
  if (e.which === 3) {
    console.log('right clicked')
    console.log(e)
  }
}
