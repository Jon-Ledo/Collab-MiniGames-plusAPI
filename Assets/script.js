function minesweeper() {
    // document.getElementById('selectedGame').innerHTML = ""
    // if (document.getElementById('timer').innerText != "") {
    //     document.getElementById('timer').innerText = ""
    // }
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
                    createDiv.innerText = '\n'
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
                    this.ri

                    if (this.dataset.number == -1) {
                        // document.getElementById('selectedGame').remove()
                        // this.textContent = '💣'

                        var removeBox = document.getElementById('selectedGame').getElementsByClassName('box')
                        while (removeBox[0]) {
                            removeBox[0].classList.remove('box')
                        }
                        // for (var i = 0; i <= removeBox.length; i++) {

                        //     removeBox[i].parentNode.removeChild(removeBox[i])
                        // }
                        clearInterval(timeout)
                        score = 60 - time
                        timer.textContent = 'GameOver \n' + 'Score :' + score
                        document.getElementById('selectedGame').textContent = '\t'
                        var home = document.getElementById('home')
                        home.style.display = 'block'
                    }


                    else {
                        this.textContent = this.dataset.number
                    }

                }
            }
        })


        .catch(err => console.error(err));
}
minesweeper()

// MUSIC PLAYER JS
let music = new Audio("./Assets/music/parasail-zelda.mp3")

function play() {
        music.play()
}

function pause() {
    music.pause()
    console.log(music.currentTime)
}

function stop() {
    music.load()
    music.currentTime = 0
}