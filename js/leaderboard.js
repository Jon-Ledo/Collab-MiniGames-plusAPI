var whacHSList = document.getElementById('whacHSList');
var whacHS = JSON.parse(localStorage.getItem('leaderboards')) || [];
var whacA = 1;

var rpsHSList = document.getElementById('whacHSList');
var rpsHS = JSON.parse(localStorage.getItem('leaderboards')) || [];
var rpsA = 1;

function whacLeaderboards(){
    whacHSList.innerHTML= whacHS.map(scores =>{
        return`<li class = "whacHS">${scores.name}-${scores.scores}</li>`
 }).join("");
}

// function rpsLeaderboards(){
//     rpsHSList.innerHTML= rpsHS.map(scores =>{
//         return`<li class = "rpsHS">${scores.name}-${scores.scores}</li>`;
//  }).join("");
//     }
