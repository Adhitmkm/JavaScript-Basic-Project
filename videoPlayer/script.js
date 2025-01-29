let playBtn = document.getElementById('play-btn')
let video = document.querySelector('.video')
let progressBar = document.querySelector(".progress-bar")
let progressrange = document.querySelector('.progress-range')


let isVideoPlaying = false;

//Lets play or pause function
function playOrPauseVideo(e) {
    console.log(e)
    if(!isVideoPlaying) {              //if(!isVideoPlaying)or if(isVideoPlaying == false) both are same
        video.play()
        isVideoPlaying = true;
        playBtn.classList.replace("fa-play","fa-pause") //.replacil 2 value pass cheyyan 1- nilavil ulla value 2- replace cheyyanda eath classilek aano aa class name or aa name
    }else{
        video.pause()
        isVideoPlaying = false;
        playBtn.classList.replace("fa-pause","fa-play")
    }
}

// ivadey update progressbar 
function updateProgressbar(event) {
    // console.log(event.target.currentTime,event.target.duration)
    let currentTime = event.target.currentTime;
    let duration = event.target.duration;
    progressBar.style.cssText = `width: ${(currentTime/duration)*100}%`

    // const percent = (currentTime /duration ) * 100; // ith nammal calculation correct aavan cheyyunnath width currect aakan
    // topil ullath or progressBar.style.cssText = `width: ${percent}%`  // ith namal event ntey ulliley value aan edukeyndath so nammal template litrels use cheyyanam pinnet px kodukkan marakkal bcz css ntey kodey enth koduthalum pixel or unit kodukkanam ivadey pixel wrong aan % ayal aan time duration correct avullu
}

// ivadey update seekbar
function updateSeekbar(event) {
    console.log(event)
    // console.log(event.offsetX,event.target.clientWidth)
    let currectPoint = event.offsetX;
    // let progressbarWidth = event.target.clientWidth;
    let progressbarWidth = this.clientWidth;
    let currentRange = (currectPoint / progressbarWidth)* video.duration;
    // console.log(currentRange)
    video.currentTime = currentRange;      // .currentTime ith inbuit aayitullath aan
    // eppol error aan bcz click timil progressbar click aavumbo marunnilla progressrange aan vendath so nammal window enn property use aakanam appo currect kittum 
    // so event. maati this . aaakiyal mathi this . window properties kittum toppil mqatiyittund event maati this aaki

}
//or 
// function updateSeekbar(event) {

// let calculateWidth = progressrange.getBoundingClientRect();
// console.log(calculateWidth)

// let currectPoint = event.offsetX;
// let progressbarWidth = this.clientWidth;
// let currentRange = (currectPoint / progressbarWidth)* video.duration;
// video.currentTime = currentRange;

// }

document.addEventListener('keydown', function(e) { 
    if (e.code === 'Space') { // Check if the space key is pressed
        playOrPauseVideo(e); // Call the function to play/pause video
        e.preventDefault(); // Prevents page scrolling when pressing space
    } 
});


//Add event lisner
playBtn.addEventListener('click'|| 'keypress',playOrPauseVideo)
video.addEventListener('click',playOrPauseVideo)
video.addEventListener('timeupdate', updateProgressbar)
progressrange.addEventListener('click',updateSeekbar)
