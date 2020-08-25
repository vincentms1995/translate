let addButton = document.getElementById('add');
addButton.setAttribute('onClick', "getString()");



const createListItem = (name) =>{
    let node = document.createElement("li");

    let textbox = document.createElement("input");
    textbox.setAttribute("type","text");
    textbox.setAttribute("value",name)
    textbox.disabled = true;


    let checkBox = document.createElement("input");
    checkBox.setAttribute('type','checkbox');

    node.setAttribute("class", "container to-do");
  
    checkBox.addEventListener("change", function(){
        const parent = this.parentNode;
        const id = parent.parentNode.id;
        parent.remove();
        if(id === 'to-do')
        {
            parent.children[1].disabled = true;
            parent.children[2].disabled = true;
            document.getElementById("completed").appendChild(parent);
            
        }
        else if(id === 'completed'){
            const toDo = document.getElementById("to-do");
            parent.children[1].disabled = true;
            parent.children[2].disabled = false;
            toDo.appendChild(parent);
        }
    });

    

    node.appendChild(checkBox);
    node.appendChild(textbox);
    node.appendChild(createButton('Edit'));
    node.appendChild(createButton('Delete'));
    
    
    document.getElementById('to-do').appendChild(node);
    
}

const createButton = (name, event) =>{
    let node = document.createElement("button");
    let text = document.createTextNode(name);
    if(name === 'Delete'){
        node.addEventListener("click", function(){
            const parent = this.parentNode;
            
            parent.remove();

        });
    }else if(name==='Edit'){
        node.addEventListener("click", function(){
            const parent = this.parentNode;
            parent.children[1].disabled= !parent.children[1].disabled;
            
        });
    }
    node.setAttribute("id",name);
    node.setAttribute("class", "button");
    node.appendChild(text);
    return node;
}


const getString = () =>{
    let listItem = document.getElementById('listItem');
    if(listItem.value === ''){
        return alert("Please Input a value");
    }
    else{
        console.log(listItem.value);
        createListItem(listItem.value);
    }
    
}
