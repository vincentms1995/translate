"use strict";

var addButton = document.getElementById('add');
addButton.setAttribute('onClick', "getString()");

var createListItem = function createListItem(name) {
  var node = document.createElement("li");
  var textbox = document.createElement("input");
  textbox.setAttribute("type", "text");
  textbox.setAttribute("value", name);
  textbox.disabled = true;
  var checkBox = document.createElement("input");
  checkBox.setAttribute('type', 'checkbox');
  node.setAttribute("class", "container to-do"); // node.setAttribute("onClick", "placeTurn(this)");

  checkBox.addEventListener("change", function () {
    var parent = this.parentNode;
    console.log(parent.id);
    parent.remove();
    document.getElementById("completed").appendChild(parent);
  });
  node.appendChild(checkBox);
  node.appendChild(textbox);
  node.appendChild(createButton('Edit'));
  node.appendChild(createButton('Delete'));
  document.getElementById('to-do').appendChild(node);
};

var createButton = function createButton(name, event) {
  var node = document.createElement("button");
  var text = document.createTextNode(name);

  if (name === 'Delete') {
    node.addEventListener("click", function () {
      var parent = this.parentNode;
      parent.remove();
    });
  } else if (name === 'Edit') {
    node.addEventListener("click", function () {
      var parent = this.parentNode;
      parent.children[1].disabled = !parent.children[1].disabled;
    });
  }

  node.setAttribute("class", "button");
  node.appendChild(text);
  return node;
};

var editListItem = function editListItem() {
  console.log("add");
};

var getString = function getString() {
  var listItem = document.getElementById('listItem');

  if (listItem.value === '') {
    return alert("Please Input a value");
  } else {
    console.log(listItem.value);
    createListItem(listItem.value);
  }
};