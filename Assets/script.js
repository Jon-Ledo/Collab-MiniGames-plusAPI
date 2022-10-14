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
                    createDiv.setAttribute('data-number', response.board[row][column])
                    createDiv.innerText = ' '
                    game.appendChild(createDiv)
                }
            }

        })
        .then(response => {
            var score = 0
            var time = 60
            var timer = document.getElementById('timer')
            var timeout = setInterval(function countdown() {
                timer.innerText = 'Time: ' + time;

                time--
                if (time <= 0) {
                    timer.textContent = 'Time over ';
                    clearInterval(timeout)
                }
            }, 1000)

            const boxes = document.querySelectorAll('.box')

            for (var box = 0; box < boxes.length; box++) {
                boxes[box].onclick = function reveal(e) {

                    if (this.dataset.number == -1) {
                        // this.textContent = '💣'

                        var removeBox = document.getElementById('selectedGame').getElementsByClassName('box')

                        for (var i = 0; i < removeBox.length; i++) {

                            removeBox[i].parentNode.removeChild(removeBox[i])
                        }
                        clearInterval(timeout)
                        score = 60 - time
                        timer.innerText = 'GameOver \n' + 'Score :' + score
                    }

                    else if (this.dataset.number == '4') {
                        this.textContent = '🚩'
                    }
                    else {
                        this.textContent = this.dataset.number
                    }

                }
            }
        })


        .catch(err => console.error(err));
}