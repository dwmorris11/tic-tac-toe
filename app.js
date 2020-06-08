window.onload = function () {
//model
var board = [["","",""],["","",""],["","",""]];
var player = ['X', 'O']
var turn = player[0];
var counter = 0;

//diagnol winners
//R1[0],R2[1],R3[2]
//R1[2],R2[1],R3[0]

var checkForWinner = function() {

  for(var i=0;i<3;i++){
    //check columns
    if( board[0][i] === board[1][i] && board[0][i] === board[2][i] ) {
      if(board[0][i] !== ""){
        displayWinner(turn, false);
        return;
      }
    }
    //check rows
    if( board[i][0] === board[i][1] && board[i][0] === board[i][2]) {
      if(board[i][0] !==""){
        displayWinner(turn, false);
        return;
      }
    }
  }
  //check major diagnol
  if(board[0][0] === board[1][1] && board[0][0] === board [2][2]){
    if(board[0][0] !== "") {
       displayWinner(turn, false);
       return;
    }
  }
  //check minor diagnol
  if(board[0][2] === board[1][1] && board[0][2] === board [2][0]){
    if(board[0][2] !== "") {
      displayWinner(turn, false);
      return;
    }
  }
  //check for end of game
  if(counter === 9) {
    displayWinner(-1,false);
  }

}

//controller
var modifyText = function (space) {
    changeView(space);
   //update the model
    if((space.id)[0] == 0){
      board[0][(space.id)[1]] = turn;
    }
    if((space.id)[0] == 1){
      board[1][(space.id)[1]] = turn;
    }
    if((space.id)[0] == 2){
      board[2][(space.id)[1]] = turn;
    }
    //update number of turns taken
    counter++;
    //check for winner
    checkForWinner();
    (turn === player[0]) ? turn=player[1] : turn=player[0];
}


//create event listeners
for(var i=0;i<9;i++) {
  var ids = ['00','01','02','10','11','12','20','21','22'];
  const el = document.getElementById(ids[i]);
  el.addEventListener("click", (e)=>modifyText(el), false);
}

const el = document.getElementById('new');
el.addEventListener('click', (e)=>resetGame(e), false);


//view
var changeView = function(space) {
  space.innerText = turn;
}

var displayWinner = function(player, toggle) {
  const el = document.getElementById("winner");
  if(player === -1){
    el.innerText =`GAME IS A TIE!!`;
  }else {
    el.innerText = `${player} is the winner!!`;
  }
  el.hidden = toggle;
}

var resetGame = function(e) {
  e.preventDefault();
  //reset board model
  board = [["","",""],["","",""],["","",""]];
  player = ['X', 'O']
  turn = player[0];
  counter = 0;
  //reset view
  var els = document.getElementsByClassName('grid-item');
  for (let i = 0; i < els.length ; i++) {
    els[i].innerText = "";
  }
  displayWinner(-1,true);
}
}