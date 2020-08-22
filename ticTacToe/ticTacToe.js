let isX = true;
let divElements=[];
let moveCount =0;
let tempArrayX = [];
let tempArrayO = [];

const createButton = (name, event) =>{
    let node = document.createElement("button");
    let text = document.createTextNode(name);
    node.addEventListener("click", event);
    node.setAttribute("class", "button");
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
    moveCount=0;
    isX = true;
    tempArrayX = [];
    tempArrayO = [];

}

const placeTurn = (obj) =>{
    console.log(`You clicked ${obj.id}`);
    // the code on top works
    
    if(isX){
        console.log('X turn');
        obj.innerHTML = 'X';
        obj.style.pointerEvents = "none";
        isX = false; 
    }
    else{
        console.log('O turn');
        obj.innerHTML = 'O';
        obj.style.pointerEvents = "none";
        isX = true;
    }
    // checkWinner(tempArrayX,tempArrayO)
    moveCount++;
    console.log(moveCount);
}

const checkWinner = () =>{
    
    
 
}


for(let ctr = 0; ctr<9; ctr++){
    let name=`game-cell-${ctr}`;
    createDiv(name, placeTurn);
}

// bring this back after demo
 createButton("Reset", resetMe);
