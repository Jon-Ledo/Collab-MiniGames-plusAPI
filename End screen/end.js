var username = document.getElementById("username");
var saveScoreBtn = document.getElementById("saveScoreBtn");
var finalScore = document.getElementById("finalScore")
var highScore = localStorage.getItem("highScore");

finalScore.innerText = highScore;

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value
})

function saveScore(event){
    console.log("clicked on the save button!");
    event.preventDefault();
}