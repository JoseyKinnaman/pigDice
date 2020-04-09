// <!--Back End for Game-->

function Game (player1, player2){
  this.player1 = player1;
  this.player2 = player2;
  this.currentPlayer = true;
}

// Game.prototype.getCurrentPlayer = function () {
  
// }









//player 1 rolls the dice, if the number equals 1 then our total score is going to equal 0, then it turns over

// player 2 rolls dice agian if they get a number higher than 1 it adds to their total. 
 
//player 1 rolls agian and then their total is added. 

//player 1 holds their turn 

//player 2 rolls and adds to total 

//player 1 rolls and gets 100

//player 1 wins 


// Game.prototype.winner = function(){
//   if ((this.total +this.score) >= 100){
//     $(".winner").show();
//   }






//  Backend for Player//
function Player() {
  this.roll = 0;
  this.score = 0; 
  this.total = 0;
}

// Player.prototype.switchTurns = function() {
//   this.currentPlayer = !this.currentPlayer;
// }

Player.prototype.playerTurn = function () {
  var newRoll = Math.floor(Math.random() * 6) + 1;
  this.roll = newRoll;
  if (newRoll === 1) {
    this.roll = 0;
    this.score = 0;
  } else {
    this.score += newRoll;
  }

  return this.score;
}





// Ui-Front Logic
// Creates our two players for the game.
var player1 = new Player();
var player2 = new Player();
var newGame = new Game(player1, player2);
// newGame.addPlayer(player1);
// newGame.addPlayer(player2);
  console.log(newGame);

$(document).ready(function () {
  $("#roll").click(function (event) {
    event.preventDefault();
    $("#diceman").toggle();
    $("#display-dice").text(player1.playerTurn());
  });
});

// function attachContactListeners() {
//   $("#dice-box").on("click", function(){
//     showTotal(this.total)
//   })
// }














