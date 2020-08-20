let isX = true;
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
    node.setAttribute("onClick", "placeTurn(this.id)");
    node.setAttribute("id",name)
    node.setAttribute("class", "container");
    node.appendChild(text);
    document.getElementById("ticTacToe").appendChild(node);
}

const resetMe = () =>{
    document.getElementsByClassName("container").innerHTML= '';
}

const placeTurn = (id) =>{
    // console.log("You clicked me!");
    // the code on top works
    
    if(isX)
    {
        console.log('X turn');
        isX = false;
        let textNode = document.createTextNode("X");
        console.log(id);
    }
    else{
        console.log('O turn');
        isX = true;
    }
}


for(let ctr = 1; ctr<=9; ctr++){
    createDiv(`game-cell-${ctr}`, placeTurn);
}


createButton("Reset", resetMe);
