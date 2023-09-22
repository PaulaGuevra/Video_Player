const $video = document.querySelector("#video");
const $play = document.querySelector("#play");
const $pause = document.querySelector("#pause");
const $backward = document.querySelector("#backward");
const $forward = document.querySelector("#forward");

$play.addEventListener('click', handlePlay)
$pause.addEventListener('click', handlePause)

function handlePlay() {
    $video.play();
    $play.hidden = true;
    $pause.hidden = false;
    console.log('le di click al play')
}

function handlePause() {
    $video.pause();
    $pause.hidden = true;
    $play.hidden = false;
}

$backward.addEventListener('click', handleBackward)

function handleBackward() {
    $video.currentTime -= 10;
    console.log('10 seg para atras', $video.currentTime)
}


$forward.addEventListener('click', handleForward)

function handleForward() {
    $video.currentTime += 10;
    console.log('10 seg para adelante', $video.currentTime)
}

$video.addEventListener('loadedmetadata', handleLoaded)
$video.addEventListener('timeupdate', handleTimeUpdate)

const $progress = document.querySelector('#progress')
function handleLoaded() {
    $progress.max = $video.duration;
    console.log('hacargado un video', $video.duration)
}

function handleTimeUpdate(){
    $progress.value = $video.currentTime;
}

$progress.addEventListener('input', handleInput)

function handleInput() {
    $video.currentTime = $progress.value;
}