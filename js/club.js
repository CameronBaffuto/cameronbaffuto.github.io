var clubs = [
  "Bayern Munich",
  "Athletico Madrid",
  "Salzburg",
  "Lokomotiv",
  "Real Madrid",
  "Mgladbach",
  "Bayer Leverkusen",
  "Inter",
  "Man City",
  "FC Porto",
  "Olympiacos",
  "Marseille",
  "Liverpool",
  "Atalanta",
  "Ajax",
  "Valencia CF",
  "Chelsea",
  "Sevilla",
  "AS Roma",
  "Olympique Lyonnais",
  "Dortmund",
  "Lazio",
  "Tottenham",
  "Werder Bremen",
  "Juventus",
  "Barcelona",
  "Dynamo Kyiv",
  "VfB Stuttgart",
  "PSG",
  "RB Leipzig",
  "Man United",
  "Arsenal",
  "Milan",
  "Napoli",
  "Leicester City",
  "Wolfsburg",
  "Eintracht Frankfurt",
  "Celtic",
  "Everton",
  "West Ham",
];



function randomNum(low, high){
  var rando = Math.floor(Math.random() * (high - low + 1)) + low;
  return rando;
}

console.log(randomNum(1,10));

//Returns a random string from challenges array
function getClub(){
  var min = 0;
  var max = clubs.length - 1;
  var randomIndex = randomNum(min, max);
  return clubs[randomIndex];
}

function displayClub1(){
  document.getElementById("ClubTeam1").innerHTML = getClub();
}

function displayClub2(){
  document.getElementById("ClubTeam2").innerHTML = getClub();
}
