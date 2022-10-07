var username = document.getElementById("username");
var saveScoreBtn = document.getElementById("saveScoreBtn");
var finalScore = document.getElementById("finalScore")
var highScore = localStorage.getItem("highScore");

var leaderboards = JSON.parse(localStorage.getItem('leaderboards')) || [];

finalScore.innerText = highScore;

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value
})

function saveScore(event){
    console.log("clicked on the save button!");
    event.preventDefault();
    var scores = {
        scores: highScore,
        name: username.value
    };
    
    leaderboards.push(scores);
    
    leaderboards.sort((a,b) => b.scores - a.scores);

    leaderboards.splice(30);
    
    localStorage.setItem('leaderboards', JSON.stringify(leaderboards)) 
}