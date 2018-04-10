var iRandom, iScore, iWins, iLosses;
var sRandom, sScore, sWins, sLosses;
var vCrystal = [0, 0, 0, 0];
var sCrystal;
var sStatus;

function Reset() {
  iRandom = Math.floor(Math.random() * 102) + 19;
  sRandom.text(iRandom);
  iScore = 0;
  sScore.text(0);
  for (var i = 0; i < vCrystal.length; i++) {
    while (true) {
      // make sure random numbers are unique
      var unique = true;
      var x = Math.floor(Math.random() * 12) + 1;
      for (j = 0; j < i; j++) {
        if (vCrystal[j] == x) {
          unique = false;
          break;
        }
      }
      if (unique) {
        vCrystal[i] = x;
        break;
      }
    }
    vCrystal[i] = x;
  }
  //console.log(vCrystal);
}

function clickCrystal() {
  iScore += vCrystal[$(this).attr("value")];
  sScore.text(iScore);

  if (iScore < iRandom) {
    sStatus.empty();
    return;
  }
  if (iScore == iRandom) {
    iWins++;
    sWins.text(iWins);
    sStatus.text("You won!");
  } else {
    iLosses++;
    sLosses.text(iLosses);
    sStatus.text("You lost!");
  }
  Reset();
}

$(document).ready(function() {
  sRandom = $("#random");
  sScore = $("#score");
  sWins = $("#wins");
  sLosses = $("#losses");
  sStatus = $("#status");
  sCrystal = $(".crystal");

  iScore = 0;
  sScore.text(0);
  iWins = 0;
  sWins.text(0);
  iLosses = 0;
  sLosses.text(0);

  Reset();

  sCrystal.on("click", clickCrystal);
});
