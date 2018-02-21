var suiSec = document.getElementById('suiSec');
var suiMin = document.getElementById('suiMin');
var suiHour = document.getElementById('suiHour');

setInterval(rota =>{
  date = new Date();

  degS = (360/60)*date.getSeconds();
  degM = (360/60)*date.getMinutes();
  degH = (360/12)*date.getHours();

  suiSec.style = "transform: rotate("+degS+"deg)";
  suiMin.style = "transform: rotate("+degM+"deg)";
  suiHour.style = "transform: rotate("+degH+"deg)";

}, 1000);
setInterval(opa =>{
document.getElementById('clock').style = "opacity:1";
}, 1000);
