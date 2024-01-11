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
function progressTime(){
    var img = document.getElementById("sun-and-moon-image");
    img.opacity; "10%";

}

changeAudio();
progressTime();