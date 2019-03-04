// function rollDice1() {
//   var player1 = document.getElementById("player1") ;
//   var hold = document.getElementById("hold") ;
// var score = document.getElementById("score");
// var p1 = Math.ceil(Math.random() * 6);
// var pt1 = Math.ceil(Math.random() *6);
// var hod = Math.ceil(Math.random() *0) +1;
// var total1 = p1 + pt1 ;
// if(p1!==1){
//   return 0
// }else{
//   player1.innerHTML = p1 && pt1 ;
//   score.innerHTML = "You rolled"+p1+".";
//   hold.innerHTML = total1;
// }
// if (total1 > 11) {
//   hold.innerHTML += "Hurrah!! you WIN";
// };
// };
  var roundScore1 = 0;
  var gameScore1 = 0;
function rollDice1() {
var p1 = Math.ceil(Math.random() * 6);
    $("#player1").text(p1);
if (p1 !==1) {
  roundScore1 += p1;
} else {
  roundScore1 = 0;
};
};

function hold1() {
  gameScore1 += roundScore1;
  $("#score1").text(gameScore1);
};

var roundScore2 = 0;
var gameScore2 = 0;
function rollDice2() {

  var p2 = Math.ceil(Math.random() * 6);
  $('#player2').text(p2);
  if (p2 !==1) {
    roundScore2 += p2
  console.log(roundScore2)
  }
  else {
    roundScore2-=roundScore2;
  }
};


function hold2() {
  console.log(roundScore2)
  gameScore2 += roundScore2;
  $("#score2").text(gameScore2);
};

$(document).ready(function() {
  $("#roll1").click(function() {
    rollDice1();
    $("#current1").text(roundScore1)
  });
  $("#hold1").click(function() {
    hold1();
  });

  $("#roll2").click(function(){
    rollDice2();

    $("#current2").text(roundScore2)
  });
  $("#hold2").click(function() {
    hold2();
  })

 $("form#input").submit(function(event){
   event.preventDefault();
   var new1 = $("#kal").val();
   var new2 = $("#mint").val();

   $("#jamila").text(new1);
   $("#jamila2").text(new2);

 });
});
