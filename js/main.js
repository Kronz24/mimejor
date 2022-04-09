
var mivideo = document.getElementByID(video1)
function playPause(){
    if(mivideo.paused)
       mivideo.play();
       else
       mivideo.paused();
            
}
function stop(){
    mivideo.pause();
    mivideo.currentTime = 0;

}
function skip(){
    mivideo.currentTime += value;
}