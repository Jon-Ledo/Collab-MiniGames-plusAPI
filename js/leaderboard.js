var whacHSList = document.getElementById('whacHSList');
var whacHS = JSON.parse(localStorage.getItem('leaderboards')) || [];
var whacA = 1;

function whacLeaderboards(){
    whacHSList.innerHTML= whacHS.map(scores =>{
        return`<li class = "whacHS">${scores.name}-${scores.scores}</li>`
 }).join("");
    if(whacA == 1){
        document.getElementById('hidden').style.display = 'block'
        return whacA - 1;
    }
}
