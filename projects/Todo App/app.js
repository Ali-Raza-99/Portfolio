let inp = document.getElementById("input")
let addBtn = document.getElementById("addBtn")


function addItems() {

    let li = document.createElement("li");
    let litxt = document.createTextNode(inp.value)
    li.appendChild(litxt)
    // delete button
    let delbtn = document.createElement("button");
    let delbtnTxt = document.createTextNode("Delete ")
    delbtn.appendChild(delbtnTxt);
    li.appendChild(delbtn)
    delbtn.setAttribute("id", "delbtn")
    delbtn.setAttribute("class", "btn btn-danger ml-2 ")
    
    //edit button
    let editbtn = document.createElement("button");
    let editbtnTxt = document.createTextNode("Edit Todo")
    editbtn.appendChild(editbtnTxt);
    li.appendChild(editbtn)
    editbtn.setAttribute("id", "editbtn")
    editbtn.setAttribute("class", "btn btn-info")
    // append on ul
    let todos = document.getElementById("todos");
    todos.appendChild(li)
    
    
    delbtn.setAttribute("onclick", "deleteTodo(this)")
    editbtn.setAttribute("onclick", "editItem(this)")
    
    editbtn.setAttribute("class", "btn btn-danger ml-2");




    inp.value = ""
}

function editItem(e) {
    let input = document.createElement("input");
    let text = e.parentNode.firstChild;
    text.replaceWith(input)
    input.addEventListener("blur", function () {
        input.replaceWith(input.value);
    })

}

function deleteTodo(e) {

    e.parentNode.remove()
}

function deleteAll() {
    let delAll = document.getElementById("todos");
    delAll.innerText = ""
}

// document.querySelector("body").addEventListener
// ("click", function name(e) {
//     document.body.style.backgroundColor = `rgb(${e.offsetX},${e.clientY},${e.offsetY})`
//     console.log("you move the mouse")
// })