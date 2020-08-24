"use strict";

var createListItem = function createListItem(name, event) {
  var node = document.createElement("div");
  var text = document.createTextNode(name); // node.setAttribute("onClick", "placeTurn(this)");

  node.setAttribute("id", name);
  node.setAttribute("class", "container");
  node.appendChild(text); //createButton('add','addListItem')

  document.getElementsByTagName('body')[0].appendChild(node);
};

var createButton = function createButton(name, event) {
  var node = document.createElement("button");
  var text = document.createTextNode(name);
  node.addEventListener("click", event);
  node.setAttribute("class", "button");
  node.appendChild(text);
  document.getElementsByTagName('body')[0].appendChild(node);
};

var addButton = document.getElementById('add');
addButton.setAttribute('onClick', "getString()");

var getString = function getString() {
  var listItem = document.getElementById('listItem');
  console.log(listItem.value);
  createListItem(listItem.value);
};