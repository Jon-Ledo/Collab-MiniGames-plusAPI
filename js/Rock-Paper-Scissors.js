
//Declaring the variables and scores 
let pcScore = 1;
let rpsScore = 1;
const yourScore = document.getElementById('rpsScore');
const cScore = document.getElementById('pcScore');
const buttons = document.querySelectorAll('.selection button');
const showIcon = document.querySelector('.show i');
const computerShowIcon = document.querySelector('.computer i');

const randomClasses = ["game hand-rock", "game hand-paper","game hand-scissors"];
const text = document.getElementById('demo');
const text2 = document.getElementById('demo2');

//Functionality with else if condition to the score 
const game = () =>{
    buttons.forEach(btn =>{
        btn.addEventListener('click',(e)=>{
  
           let clickedBtn = e.target.className;
           showIcon.className = clickedBtn;
           let randomNum = Math.floor(Math.random() * randomClasses.length);
           computerShowIcon.className = randomClasses[randomNum];

           if(showIcon.className === computerShowIcon.className){
               yourScore.innerHTML = yourScore.innerHTML;
               cScore.innerHTML = cScore.innerHTML;
               text.innerHTML = "It's a Tie ! ";
               text.style.color = 'orange';
               text2.innerHTML = text.innerHTML;
               text2.style.color = 'orange';
           } 
     
           else if(showIcon.className === randomClasses[0] && computerShowIcon.className === randomClasses[2]){
               yourScore.innerHTML = rpsScore;
               rpsScore++;
               text.innerHTML = "It's a Win ! ";
               text.style.color = 'rgb(1, 146, 1)';
               text2.innerHTML = text.innerHTML;
               text2.style.color = 'rgb(1, 146, 1)';
           }else if(showIcon.className === randomClasses[0] && computerShowIcon.className === randomClasses[1]){
               cScore.innerHTML = pcScore;
               pcScore++;
               text.innerHTML = "You Lose ! ";
               text.style.color = 'red';
               text2.innerHTML = text.innerHTML;
               text2.style.color = 'red';
           }else if(showIcon.className === randomClasses[1] && computerShowIcon.className === randomClasses[2]){
               cScore.innerHTML = pcScore;
               pcScore++;
               text.innerHTML = "You Lose ! ";
               text.style.color = 'red';
               text2.innerHTML = text.innerHTML;
               text2.style.color = 'red';
           }else if(showIcon.className === randomClasses[1] && computerShowIcon.className === randomClasses[0]){
               yourScore.innerHTML = rpsScore;
               rpsScore++;
               text.innerHTML = "It's a Win ! ";
               text.style.color = 'rgb(1, 146, 1)';
               text2.innerHTML = text.innerHTML;
               text2.style.color = 'rgb(1, 146, 1)';
           }else if(showIcon.className === randomClasses[2] && computerShowIcon.className === randomClasses[0]){
               cScore.innerHTML = pcScore;
               pcScore++;
               text.innerHTML = "You Lose ! ";
               text.style.color = 'red';
               text2.innerHTML = text.innerHTML;
               text2.style.color = 'red';
           }else if(showIcon.className === randomClasses[2] && computerShowIcon.className === randomClasses[1]){
               yourScore.innerHTML = rpsScore;
               urScore++;
               text.innerHTML = "It's a Win ! ";
               text.style.color = 'rgb(1, 146, 1)';
               text2.innerHTML = text.innerHTML;
               text2.style.color = 'rgb(1, 146, 1)';
           }
        });
    });
}
game();
//Time countdown
var timeleft = 15;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("timer").innerHTML = "Finished";
    localStorage.setItem("whachighScore",rpsScore);
    return window.location.assign('../End screen/Endgame.html')
  } else {
    document.getElementById("timer").innerHTML = timeleft + " seconds remaining";
  }
  timeleft -= 1;
}, 1000);

// MUSIC PLAYER JS
let music = new Audio("../Assets/music/parasail-zelda.mp3")

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