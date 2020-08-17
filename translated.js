
const helloWorld = () =>{
    console.log("Hello World");
}

const addAll = () =>{
    let n = 0;
    let sum = 0;
    let value = 0;
    n = parseInt(prompt("Please enter how many integers you want to add",""));
    
    console.log(`I entered ${n} integers`);

    for(let ctr=1; ctr<=n; ctr++){
        value = parseInt(prompt(`Enter value ${ctr}: `,''));
        sum +=value;
    }
    console.log(`The Sum of entered integers is ${sum}`);
}

const binary = () =>{
    let num = 0;
 
    num = parseInt(prompt("Please enter any integer and I will convert it to binary"));
    num = num.toString(2);
    console.log(num);
}

const diamond = () =>{

    var element = document.getElementById('display-diamond');
    element.textContent ='';
    let n = parseInt(prompt("Enter number of rows"));
    let space = n - 1;
    let word ='';
    for(let ctr = 1; ctr<=n; ctr++)
    {
        for(let ctr2 = 1; ctr2<=space; ctr2++)
        {
            word += '*';
            let tag = document.createElement("p");
            let text = document.createTextNode(word);
            tag.appendChild(text);
            element.appendChild(tag);
        }
        space--;
    }
}

//I just placed a new comment to see if it works


//Wow it works! Congrats me on finally understanding git!

const quadratic = () =>{
    let a = parseFloat(prompt("Please enter the value of a: "));
    let b = parseFloat(prompt("Please enter the value of b: "));
    let c = parseFloat(prompt("Please enter the value of c: "));
    let x1 = ((b * -1) + Math.sqrt(Math.pow(b,2)-(4 * a * c)))/(2 * a);
    let x2 = ((b * -1) - Math.sqrt(Math.pow(b,2)-(4 * a * c)))/(2 * a);
    console.log(x1);
    console.log(x2);
}