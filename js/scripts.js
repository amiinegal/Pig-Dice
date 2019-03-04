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
    var roundScore = 0;
    var gameScore = 0;
function rollDice1() {
var p1 = Math.ceil(Math.random() * 6);
    $("#player1").text(p1);
if (p1 !==1) {
  roundScore += p1;
} else {
  roundScore = 0;
}
};

function hold() {
  gameScore += roundScore;
  $("#score").text(gameScore);
};

var roundScore = 0;
var gameScore = 0;
function rollDice2() {

  var p2 = Math.ceil(Math.random() * 6);
  $('#player2').text(p2);
  if (p2 !==1) {
    roundScore += p2
  }else {
    roundScore = 0;
  }
};

function hold() {
  gameScore += roundScore;
  $("#score").text(gameScore);
};

$(document).ready(function() {
  $("#roll1").click(function() {
    rollDice1();
  });
  $("#hold").click(function() {
    hold();
  });

 $("form#input").submit(function(event){
   event.preventDefault();
   var new1 = $("#kal").val();
   var new2 = $("#mint").val();

   $("#jamila").text(new1);
   $("#jamila2").text(new2);

 });
});
