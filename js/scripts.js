function rollDice1() {
  var player1 = document.getElementById("player1") ;
  var hold = document.getElementById("hold") ;
var score = document.getElementById("score");
var p1 = Math.ceil(Math.random() * 6);
var pt1 = Math.ceil(Math.random() *6);
var hod = Math.ceil(Math.random() *0) +1;
var total1 = p1 + pt1 ;
if(p1!==1){
  return 0
}else{
  player1.innerHTML = p1 && pt1 ;
  score.innerHTML = "You rolled"+p1+".";
  hold.innerHTML = total1;
}
if (total1 > 11) {
  hold.innerHTML += "Hurrah!! you WIN";
};
};
function rollDice2() {
  var player2 = document.getElementById("player2") ;
  var hold = document.getElementById("hold") ;
  var score = document.getElementById("score");
  var p2 = Math.ceil(Math.random() * 6);
  var pt2 = Math.ceil(Math.random() * 6);
  var hod = Math.ceil(Math.random() *0) +0;
  var total2 = p2 + pt2;
  if(p2!=1){
    return 0
  }else {
    player2.innerHTML = p2 && pt2 ;
    score.innerHTML = "You rolled "+p2+".";
    hold.innerHTML = total2;
  }

  if (total2 > 11) {
    hold.innerHTML += "Hurrah!! you've WON"+".";
  };
};
$(document).ready(function() {
 $("form#input").submit(function(event){
   event.preventDefault();
   var new1 = $("#kal").val();
   var new2 = $("#mint").val();

   $("#jamila").text(new1);
   $("#jamila2").text(new2);

 });
});
