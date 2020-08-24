const createListItem = (name, event) =>{
    let node = document.createElement("div");
    let text = document.createTextNode(name);
    // node.setAttribute("onClick", "placeTurn(this)");
    node.setAttribute("id",name)
    node.setAttribute("class", "container");
    node.appendChild(text);
    //createButton('add','addListItem')
    document.getElementsByTagName('body')[0].appendChild(node);
    
}

const createButton = (name, event) =>{
    let node = document.createElement("button");
    let text = document.createTextNode(name);
    node.addEventListener("click", event);
    node.setAttribute("class", "button");
    node.appendChild(text);
    document.getElementsByTagName('body')[0].appendChild(node);
}

let addButton = document.getElementById('add');
addButton.setAttribute('onClick', "getString()");

const getString = () =>{
    let listItem = document.getElementById('listItem');
    console.log(listItem.value);
    createListItem(listItem.value);
}
