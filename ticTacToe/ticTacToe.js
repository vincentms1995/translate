let isX = true;
let divElements=[];
let winningCombinations = {
    row1 : ["game-cell-1","game-cell-2","game-cell-3"],
    row2 : ["game-cell-4","game-cell-5","game-cell-6"],
    row3 : ["game-cell-7","game-cell-8","game-cell-9"],
    col1 : ["game-cell-1","game-cell-4","game-cell-7"],
    col2 : ["game-cell-2","game-cell-5","game-cell-8"],
    col3 : ["game-cell-3","game-cell-6","game-cell-9"]
};

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
}


for(let ctr = 1; ctr<=9; ctr++){
    createDiv(`game-cell-${ctr}`, placeTurn);
}

// bring this back after demo
 createButton("Reset", resetMe);
