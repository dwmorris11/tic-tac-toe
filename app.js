window.onload = function () {
//model
var R1 = ['','',''];
var R2 = ['','',''];
var R3 = ['','',''];
var player = ['X', 'O']
var turn = player[0];

//diagnol winners
//R1[0],R2[1],R3[2]
//R1[2],R2[1],R3[0]

//controller
var modifyText = function (space) {
    space.setAttribute("value", turn);
    turn === player[1] ? player[0] : player[1];
}


//create event listeners
for(var i=1;i<9;i++) {
  const el = document.getElementById(String(i));
  el.addEventListener("click", (i)=>modifyText(el), false);
}
//view
var c1 = document.getElementById("row1");
var c2 = document.getElementById("row2");
var ctx1 = c1.getContext("2d");
ctx1.fillStyle = "black";
ctx1.fillRect(3,3,100,100);
}