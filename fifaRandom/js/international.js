var inter = [
  "Belgium",
  "France",
  "Brazil",
  "England",
  "Portugal",
  "Spain",
  "Argentina",
  "Uruguay",
  "Mexico",
  "Italy",
  "Croatia",
  "Denmark",
  "Germany",
  "Netherlands",
  "Colombia",
  "Switzerland",
  "Chile",
  "Wales",
  "Poland",
  "Senegal",
  "Sweden",
  "USA",
  "Austria",
  "Ukraine",
  "Peru",
  "Japan",
  "Serbia",
  "Turkey",
  "Slovakia",
  "Russia",
  "Czech Republic",
  "Iceland",
];



function randomNum(low, high){
  var rando = Math.floor(Math.random() * (high - low + 1)) + low;
  return rando;
}


function getInter(){
  var min = 0;
  var max = inter.length - 1;
  var randomIndex = randomNum(min, max);
  return inter[randomIndex];
}


function displayInter1(){
  document.getElementById("InterTeam1").innerHTML = getInter();
}

function displayInter2(){
  document.getElementById("InterTeam2").innerHTML = getInter();
}
