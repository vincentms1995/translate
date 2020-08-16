
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
