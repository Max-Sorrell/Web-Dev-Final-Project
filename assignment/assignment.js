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
  updateHeight();
}


function updateHeight(){
  var location = document.getElementById("sun-and-moon-image");
  var samHeight = document.getElementById("sun-and-moon").offsetHeight;
  samHeight = samHeight - 160; // remove the amount of room the header takes up
  var test = (counter / 28) * samHeight;
  location.style.paddingTop = test + "px";

}



updateHeight();
changeAudio();
