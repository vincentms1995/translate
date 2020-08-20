const createButton = (name, event) =>{
    let node = document.createElement("button");
    let text = document.createTextNode(name);
    node.addEventListener("click", event);
    node.appendChild(text);
    document.getElementsByTagName('body')[0].appendChild(node);
}

const createDiv = (name, event) =>{
    let node = document.createElement("div");
    let text = document.createTextNode(name);
    node.addEventListener("click", event);
    node.setAttribute("class", "container");
    node.appendChild(text);
    document.getElementById("ticTacToe").appendChild(node);
}

const resetMe = () =>{
    document.getElementsByClassName("container").innerHTML= '';
}

const placeTurn = () =>{
    console.log("You clicked me!");
}


for(let ctr = 1; ctr<=9; ctr++){
    createDiv(`${ctr}`, placeTurn);
}


createButton("Reset", resetMe);
