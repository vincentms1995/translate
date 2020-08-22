"use strict";

var isX = true;
var divElements = [];
var moveCount = 0;
var tempArrayX = [];
var tempArrayO = [];

var createButton = function createButton(name, event) {
  var node = document.createElement("button");
  var text = document.createTextNode(name);
  node.addEventListener("click", event);
  node.setAttribute("class", "button");
  node.appendChild(text);
  document.getElementsByTagName('body')[0].appendChild(node);
};

var createDiv = function createDiv(name, event) {
  var node = document.createElement("div"); // let text = document.createTextNode(name);

  node.setAttribute("onClick", "placeTurn(this)");
  node.setAttribute("id", name);
  node.setAttribute("class", "container"); // node.appendChild(text);

  document.getElementById("ticTacToe").appendChild(node);
  divElements.push(name);
};

var resetMe = function resetMe() {
  // console.log(divElements);
  divElements.forEach(element = function element(item, index) {
    // console.log(`ID: ${item} Index: ${index}`)
    var div = document.getElementById(item);
    div.innerHTML = '';
    div.style.pointerEvents = 'auto';
  });
  moveCount = 0;
  isX = true;
  tempArrayX = [];
  tempArrayO = [];
};

var placeTurn = function placeTurn(obj) {
  console.log("You clicked ".concat(obj.id)); // the code on top works

  if (isX) {
    console.log('X turn');
    obj.innerHTML = 'X';
    obj.style.pointerEvents = "none";
    isX = false;
  } else {
    console.log('O turn');
    obj.innerHTML = 'O';
    obj.style.pointerEvents = "none";
    isX = true;
  } // checkWinner(tempArrayX,tempArrayO)


  moveCount++;
  console.log(moveCount);
};

var checkWinner = function checkWinner() {};

for (var ctr = 0; ctr < 9; ctr++) {
  var name = "game-cell-".concat(ctr);
  createDiv(name, placeTurn);
} // bring this back after demo


createButton("Reset", resetMe);