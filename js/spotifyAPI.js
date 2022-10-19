// const nameEl = document.querySelector('#song-name')
// const albumEl = document.querySelector('#song-album')
// const timeEl = document.querySelector('#song-length')
// const albumPicture = document.querySelector('#cover-img')


var inputEl = document.querySelector('#spotify-search')
var searchBtn = document.querySelector('#search-btn')
var modalBG = document.querySelector('#modal')
var modalClose = document.querySelector('.modal-close')
var spotifyCard = document.querySelector('#modal-content')


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a6a0cba826mshbb2ed3fd7a3b37cp1dc64ajsnf1e121c1d87f',
		'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
	}
};

// opens modal displaying search results from API call
searchBtn.addEventListener('click', function() {
    modalBG.classList.remove('hidden')
    spotifyCard.classList.remove('hidden')
    var input = inputEl.value
    var fetchAPI = 'https://spotify81.p.rapidapi.com/search?q=' + input + '&type=tracks&offset=0&limit=10&numberOfTopResults=10'
    
    fetch(fetchAPI , options)
    .then(function (response) {
        return response.json()
    })
    .then(function (response) {
        // var iterate = response.tracks
        var newH3 = document.createElement('h3')
        newH3.innerHTML = input + "\'s top 10 tracks"
        spotifyCard.append(newH3)
        // iterate.forEach(() => {
            for(i = 0; i < response.tracks.length; i++){
            getData(response.tracks[i], i)
            }
        // })                      
     })
    .catch(function (err) {
         console.error(err)
        alert('Please enter a valid song name, artist or album.')
    });
    inputEl.textContent = ''
})

function getData(path, i) {
    var newDiv = document.createElement('div')
    var newIMG = document.createElement('img')
    var newP =  document.createElement('p')
    var newP2 = document.createElement('p')
    var newP3 = document.createElement('p')

    newDiv.classList.add('track-card')
    newDiv.id = 'song' + i
    spotifyCard.append(newDiv)

    //song IMG
    newIMG.setAttribute('src', path.data.albumOfTrack.coverArt.sources[0].url)
    newDiv.appendChild(newIMG)
    
    //song name
    newP.innerHTML = 'Song Name: ' + path.data.name
    newDiv.appendChild(newP)
    
    //album name
    newP2.innerHTML = 'Album: ' + path.data.albumOfTrack.name
    newDiv.appendChild(newP2)
    
    //song length
    var songSeconds = Math.floor((path.data.duration.totalMilliseconds / 1000) % 60)
    var songMin = Math.floor((path.data.duration.totalMilliseconds / 1000) / 60)
    var songLength = songMin + ':' + songSeconds + ' min'
    newP3.innerHTML = 'Song Length: ' + songLength
    newDiv.appendChild(newP3)
}

//function clears modal card when exiting modal 
function clearModal() {
    var h3El = document.querySelector('h3')
    h3El.remove()
    for (i = 0; i < 10; i++) {
        var idRender = '#song' + i
        var songId =  document.querySelector(idRender)
        songId.remove()
}}


// closes modal when clicked on exit button 
modalClose.addEventListener('click', function(){
    spotifyCard.classList.add('hidden')
    modalBG.classList.add('hidden')
    clearModal()
})

// closes modal when clicked outside modal window
window.addEventListener('click', clickOutside)

function clickOutside(e) {
    if (e.target === modal){
        modalBG.classList.add('hidden')
        clearModal()
}}

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