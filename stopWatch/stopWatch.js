document.getElementById("stopWatch");

// this adds an event listener
// document.getElementById("myBtn").addEventListener("click", displayDate);
let milliSecondsDisplay = document.getElementById('milliSeconds');
let secondsDisplay = document.getElementById('seconds');
let minutesDisplay= document.getElementById("minutes");


const createButton = (name, event) =>{
    let node = document.createElement("button");
    let text = document.createTextNode(name);
    node.addEventListener("click", event);
    node.appendChild(text);
    document.getElementById("buttons").appendChild(node);
}

const startTimer = () =>{
    console.log("Started Timer");
    startTime = Date.now();
    let msec = 0;
    let sec = 0;
    let min = 0;
    interval = setInterval(function(){
        let difference = Date.now() - startTime;
        let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((difference % (1000 * 60)) / 1000);
        let milliseconds = Math.floor((difference % (1000 * 60)) / 100);
        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;
        milliseconds = (milliseconds < 100) ? (milliseconds < 10) ? "00" + milliseconds : "0" + milliseconds : milliseconds;
        milliSecondsDisplay.textContent = milliseconds;
        secondsDisplay.textContent = seconds;
        minutesDisplay.textContent = minutes;

    });
}


const stopTimer = () =>{
    console.log("Ended Timer");
    clearInterval(interval);

}

const resetTimer = () =>{
    console.log("Reset Timer");
    milliSeconds.textContent = '00';
    seconds.textContent = '00';

}



createButton("Start", startTimer);
createButton("Stop", stopTimer);
createButton("Reset", resetTimer);


