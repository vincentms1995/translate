let isX = true;
let divElements=[];
const createButton = (name, event) =>{
    let node = document.createElement("button");
    let text = document.createTextNode(name);
    node.addEventListener("click", event);
    node.appendChild(text);
    document.getElementsByTagName('body')[0].appendChild(node);
}

const createDiv = (name, event) =>{
    let node = document.createElement("div");
    // let text = document.createTextNode(name);
    node.setAttribute("onClick", "placeTurn(this)");
    node.setAttribute("id",name)
    node.setAttribute("class", "container");
    // node.appendChild(text);
    document.getElementById("ticTacToe").appendChild(node);
    divElements.push(node);
}

const resetMe = () =>{
    document.getElementById("TicTacToe").innerHTML= '';
    for(let ctr = 0; ctr < divElements.length; ctr++){
        divElements[ctr].innerHTML ="";
    }
}

const placeTurn = (obj) =>{
    // console.log("You clicked me!");
    // the code on top works
    
    if(isX)
    {
        console.log('X turn');
        isX = false;
        
        obj.innerHTML = 'X';
        
        
        console.log(obj);
    }
    else{
        console.log('O turn');
        obj.innerHTML = 'O';
        isX = true;
    }
}


for(let ctr = 1; ctr<=9; ctr++){
    createDiv(`game-cell-${ctr}`, placeTurn);
}


createButton("Reset", resetMe);
