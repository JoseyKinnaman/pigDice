// <!--Back End -->

// Backend For Game
function Game (player1, player2){
  this.player1 = player1;
  this.player2 = player2;
  this.currentPlayer = "player1";
};

// Switch player Turn ==>
Game.prototype.switchTurn = function () {
  if(this.currentPlayer === "player1"){
    this.currentPlayer = "player2"
  } else {
    this.currentPlayer = "player1"
  }
}

// Backend for Player//
function Player() {
  this.roll = 0;
  this.score = 0; 
  this.total = 0;
}

// Roll button method  ==> outputs a random number 
Game.prototype.playerTurn = function () {
  var newRoll = Math.floor(Math.random() * 6) + 1;
  // this.roll = newRoll;
  // this[this.currentPlayer]
  //who is playing? 

  if (newRoll === 1) {
    this[this.currentPlayer].roll = 0;
    this[this.currentPlayer].score = 0;
    alert("You rolled 1! Score is 0. Your turn is over!")
    this.switchTurn();
    // $("#p1").toggleClass("yellow-background");
    // $("#p2").toggleClass("yellow-background");
  } else {
    this[this.currentPlayer].score += newRoll;
  }
  console.log("current score: ", this.player1.score)
  console.log("current roll: ", this.player1.roll)
}

    

// Ui-Front Logic
// Creates our two players for the game.
$(document).ready(function () {
var player1 = new Player();
var player2 = new Player();
var game = new Game(player1, player2); 

// Hold button for players
  $("#hold").click(function () {
    
    // var player = game.switchTurn();
    $("#player-one-total").text(" " + player1.score);
    $("#player-two-total").text(" " + player2.score);
  });

// Roll button for players 
  $("#roll").click(function () {
    var player = new Game(currentPlayer);
    player.playerTurn();
   $("#dice-box").text(" " + currentPlayer.roll);
// $("#diceman").toggle();




  });
});











    


