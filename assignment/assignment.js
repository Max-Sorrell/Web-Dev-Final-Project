var tempDay = 100;
var tempNight = 100;
var tempTop = 0;
var tempBottom = 0;

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
  var calculateThePosition = (counter / 28) * samHeight;
  location.style.paddingTop = calculateThePosition + "px";
  opacity();
  

  if(counter > 14){
    changeSunToMoon();
    

  }
}

function changeSunToMoon(){
  var toBeChanged = document.getElementById("sun-and-moon-image");
  toBeChanged.src = "pics/moon.jpg";
}



function opacity(){
  //100 / 28 = 3.57142857143
  var day = document.getElementById("day");
  var night = document.getElementById("night");
  var top = document.getElementById("background-top");
  var bottom = document.getElementById("background-bottom");

  tempDay = tempDay -"3.57142857143%";
  tempNight = tempNight -3.57142857143;
  tempTop = tempTop + 3.57142857143;
  tempBottom = tempBottom + 3.57142857143;


  day.style.opacity = tempDay+"%";
  night.style.opacity = tempNight;

  
  
  top.style.opacity = tempTop;
  bottom.style.opacity = tempBottom; 


  console.log("day Temp: " + tempDay + " plus check " + day.style.opacity);
  console.log("night Temp: " + tempNight + " plus check " + night.style.opacity);

  console.log("Top Temp: " + tempTop + " plus check " + top.style.opacity);
  console.log("Bottom Temp: " + tempBottom + " plus check " + bottom.style.opacity);

  //this tells me it works but it does no such thing

}

changeSunToMoon();
opacity();
updateHeight();
changeAudio();
