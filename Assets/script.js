var game2 = document.getElementById('game2')
game2.addEventListener('click', minesweeper)
function minesweeper() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'e0f23252c6msh20f31f98818a1f3p1ca85bjsnd09303c40ea0',
            'X-RapidAPI-Host': 'minesweeper1.p.rapidapi.com'
        }
    };

    fetch('https://minesweeper1.p.rapidapi.com/boards/new?r=10&c=10&bombs=10', options)
        .then(response => response.json())

        .then(response => {
            var game = document.getElementById('selectedGame')

            for (row = 0; row <= 9; row++) {
                for (column = 0; column <= 9; column++) {
                    createDiv = document.createElement('div')
                    createDiv.setAttribute('class', 'box')
                    createDiv.setAttribute('value', response.board[row][column])
                    game.appendChild(createDiv)
                }
            }

        })
        .then(response => {
            const boxes = document.querySelectorAll('.box')
            console.log(boxes)
            for (var box = 0; box < boxes.length; box++) {
                boxes[box].addEventListener('click', function reveal() {
                    if (this.attributes.value == '-1') {
                        console.log('💣')
                    }
                    else {
                        console.log(this.attributes.value)
                    }
                })
            }
        })

        .catch(err => console.error(err));
}
