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
    divElements.push(name);
}

const resetMe = () =>{
    // console.log(divElements);
    divElements.forEach(element = (item, index) => {
        // console.log(`ID: ${item} Index: ${index}`)
        let div = document.getElementById(item)
        div.innerHTML = '';
        div.style.pointerEvents = 'auto';
    });
}

const placeTurn = (obj) =>{
    // console.log("You clicked me!");
    // the code on top works
    
    if(isX)
    {
        console.log('X turn');
        isX = false;  
        obj.innerHTML = 'X';
        obj.style.pointerEvents = "none";
        
    }
    else{
        console.log('O turn');
        obj.innerHTML = 'O';
        isX = true;
        obj.style.pointerEvents = "none";
    }
}


for(let ctr = 1; ctr<=9; ctr++){
    createDiv(`game-cell-${ctr}`, placeTurn);
}

// bring this back after demo
 createButton("Reset", resetMe);
