document.getElementById("stopWatch");

// this adds an event listener
// document.getElementById("myBtn").addEventListener("click", displayDate);

const createButton = (name, event) =>{
    let node = document.createElement("button");
    let text = document.createTextNode(name);
    node.addEventListener("click", event);
    node.appendChild(text);
    document.getElementById("stopWatch").appendChild(node);
}

const startTimer = () =>{
    console.log("Started Timer");
}

const stopTimer = () =>{
    console.log("Ended Timer");
}

const resetTimer = () =>{
    console.log("Reset Timer");
}

createButton("Start", startTimer);
createButton("Stop", stopTimer);
createButton("Reset", resetTimer);


