// temp js
var counter = 1;
function changeAudio() {
  var audio = document.getElementById("track");
  audio.src = "music/" + counter + ".mp3";
  document.getElementById("player").load();
  counter++;
  if(counter > 28){
    counter = 1;
  }

  


}
function updateHeight(){
  var divProgress = document.getElementById("progress");
  divProgress.style.height = "20px";
}

updateHeight();
changeAudio();
