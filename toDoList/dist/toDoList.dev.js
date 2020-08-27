"use strict";

var addButton = document.getElementById('add');
addButton.setAttribute('onClick', "getString()");

var createListItem = function createListItem(name) {
  var today = new Date();
  var date = today.getMonth() + 1 + '/' + today.getDate() + '/' + today.getFullYear();
  var node = document.createElement("li");
  var text = document.createTextNode(date);
  var textbox = document.createElement("input");
  textbox.setAttribute("type", "text");
  textbox.setAttribute("value", name);
  textbox.disabled = true;
  var checkBox = document.createElement("input");
  checkBox.setAttribute('type', 'checkbox');
  node.setAttribute("class", "container to-do");
  checkBox.addEventListener("change", function () {
    var parent = this.parentNode;
    var id = parent.parentNode.id;
    parent.remove();
    var today = new Date();
    var timeNow = time = today.getHours() + ":" + today.getMinutes();
    var text = document.createTextNode(timeNow);

    if (id === 'to-do') {
      parent.children[1].disabled = true;
      parent.children[2].disabled = true; // parent.appendChild(text);

      document.getElementById("completed").appendChild(parent);
    } else if (id === 'completed') {
      var toDo = document.getElementById("to-do");
      parent.children[1].disabled = true;
      parent.children[2].disabled = false;
      toDo.appendChild(parent);
    }
  });
  node.appendChild(text);
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

  node.setAttribute("id", name);
  node.setAttribute("class", "button");
  node.appendChild(text);
  return node;
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