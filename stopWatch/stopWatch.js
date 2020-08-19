document.getElementById("stopWatch");

// this adds an event listener
// document.getElementById("myBtn").addEventListener("click", displayDate);
let milliSecondsDisplay = document.getElementById('milliSeconds');
let secondsDisplay = document.getElementById('seconds');
let minutesDisplay= document.getElementById("minutes");
let hoursDisplay= document.getElementById("hours");
let difference =0;
let savedTime =0;
let isRunning = false;
let isPaused = false;
const createButton = (name, event) =>{
    let node = document.createElement("button");
    let text = document.createTextNode(name);
    node.addEventListener("click", event);
    node.appendChild(text);
    document.getElementById("buttons").appendChild(node);
}

const startTimer = () =>{
    isRunning = true;
    if(isPaused === true)
    console.log("Started Timer");
    startTime = Date.now();
    interval = setInterval(function(){


        if(isPaused === true){
            difference = Date.now() - startTime + savedTime;
        }
        else{
            difference = Date.now() - startTime;
        }


        let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((difference % (1000 * 60)) / 1000);
        let milliseconds = Math.floor((difference % (1000 * 60)) / 10);
        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;
        milliseconds = (milliseconds < 10) ? "0" + milliseconds : milliseconds;
        milliSecondsDisplay.textContent = milliseconds;
        secondsDisplay.textContent = seconds;
        minutesDisplay.textContent = minutes;
        hoursDisplay.textContent = hours;
    });
}


const stopTimer = () =>{
    console.log("Ended Timer");
    clearInterval(interval);
    savedTime = difference;
    isRunning = false;
    isPaused = true;

}

const resetTimer = () =>{
    console.log("Reset Timer");
    hoursDisplay.textContent ='00';
    minutesDisplay.textContent= '00';
    milliSecondsDisplay.textContent = '00';
    secondsDisplay.textContent = '00';
    isRunning = false;
    isPaused = false;

}



createButton("Start", startTimer);
createButton("Stop", stopTimer);
createButton("Reset", resetTimer);


