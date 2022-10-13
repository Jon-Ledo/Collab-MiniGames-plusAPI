var whacHSList = document.getElementById('whacHSList');
var whacHS = JSON.parse(localStorage.getItem('leaderboards')) || [];

whacHSList.innerHTML= whacHS.map(scores =>{
   return`<li class = "whacHS">${scores.name}-${scores.scores}</li>`
 }).join("")
