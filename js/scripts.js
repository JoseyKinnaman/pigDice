// <!--Back End for Game-->

function Game (player1, player2){
  this.player1 = player1;
  this.player2 = player2;
  this.currentPlayer = true;
};

Game.prototype.switchTurn = function () {
  if (this.currentPlayer) {
    this.currentPlayer = false
  } else {
    this.currentPlayer = true
  }
}

Game.prototype.currentPlayer = function(){
  if (this.currentPlayer) {
    return this.player1
  } else {
    return this.player2
  }
}
//  Backend for Player//
function Player() {
  this.roll = 0;
  this.score = 0; 
  this.total = 0;
}

Player.prototype.playerTurn = function () {
  var newRoll = Math.floor(Math.random() * 6) + 1;
  this.roll = newRoll;
  if (newRoll === 1) {
    this.roll = 0;
    this.score = 0;
    alert("You rolled 1! Score is 0. Your turn is over!")
    game.switchTurn();
    $("#p1").toggleClass("yellow-background");
    $("#p2").toggleClass("yellow-background");
  } else {
    this.score += newRoll;
  }
  return this.score;
}

Player.prototype.totalDisplayed = function(totalCurrent, totalAdded){
totalCurrent.text(this.score);
totalAdded.text(this.total);
}


  Player.prototype.holdTurn = function (game) {
    
    
    
    // var roll = newRoll
    // if (roll != 1 ){
    //   return this.score += roll;
    // }else if (roll= 1) {
    //   $("#hold").toggle();
      
    //   return this.score
    // }
  }

// Ui-Front Logic
// Creates our two players for the game.
var player1 = new Player();
var player2 = new Player();
var game = new Game(player1, player2); 

$(document).ready(function () {
  $("#roll").click(function (event) {
    event.preventDefault();
    $("#diceman").toggle();
    if (this.currentPlayer) { 
       $("#display-dice").prepend("<li>" + player1.playerTurn() + "</li>");
    } else {
      $("#display-dice").prepend("<li>" + player2.playerTurn() + "</li>");
    }
  });
});

$(document).ready(function () {
  $("#hold").click(function (event) {
    event.preventDefault();
    $("#player-one-total").text(" " + this.score);
 });
}); 








// player.hold();
    // $("#player-two-total").text(" " + player1.score);

    
  

// function attachContactListeners() {
//   $("#dice-box").on("click", function(){
//     showTotal(this.total)
//   })
// }

