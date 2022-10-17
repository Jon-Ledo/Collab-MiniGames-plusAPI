var username = document.getElementById("username");
var saveScoreBtn = document.getElementById("saveScoreBtn");
var finalScore = document.getElementById("finalScore");
var whachighScore = localStorage.getItem("whachighScore");
var rpshighScore = localStorage.getItem("rpshighScore");
var leaderboards = JSON.parse(localStorage.getItem('leaderboards')) || [];
var repeatBtn = document.getElementById('repeatBtn')
var highScore = [whachighScore, rpshighScore];
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
    
        localStorage.setItem('whacleaderboards', JSON.stringify(leaderboards)) 
        return window.location.assign('../index.html')
}

function playAgain(){
    window.history.back();
}