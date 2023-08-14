const db = firebase.firestore();
let addBtn = document.getElementById('addBtn');
let databox = document.getElementById('databox');
let inp = document.getElementById('inp');
let counter = 0;
let todosRef = db.collection('Todos');

document.addEventListener('keypress', function (e) {
    if (e.keyCode == '13') {
        if (inp.value == '') {
            alert('Please Enter some Todos')
        }
        else if (inp.value.length >= 60) {
            alert('Please Enter short Todos')
        }
        else{
            addTodo()
        }
    }
})

const addTodo = () => {
    
    
    if (inp.value == '') {
        alert('Please Enter some Todos')
    }
    else if (inp.value.length >= 60) {
        alert('Please Enter short Todos')
    }
    else{
    counter = counter += 1

    todosRef.doc(`${counter}`).set({
        todo : inp.value
        })
        .then(() => {
            console.log("Document successfully added!");
        })
        .catch((error) => {
            console.error("Error while adding document: ", error);
        });

    databox.innerHTML+=`
    <div id='todos${counter}' class="todos-parent row d-flex align-items-center mb-1">
        <div  class="data px-2 col-lg-9 com-md-9 col-sm-9 col-9">
            <h4 id='editInp${counter}'>${inp.value}</h4>
        </div>
        <div class="dynamic-btn  col-lg-2 col-md-2 col-sm-2 col-2 d-flex">
            <button onclick="editBtn(editInp${counter},${counter})" class="btn btn-info mx-2"><i class="fa-solid fa-pen"></i></button>
            <button onclick="delBtn(todos${counter},${counter})" class="btn btn-danger"><i class="fa-solid fa-minus"></i></button>
        </div>
    </div>
    `
    inp.value = ''

    }
    
    // console.log( 'counter'+' ' +counter)
}

const  delBtn = (todos_id,idCounter)=> {

    todosRef.doc(`${idCounter}`).delete().then(() => {
        console.log("Document successfully deleted!");
    }).catch((error) => {
        console.error("Error removing document: ", error);
    });

    todos_id.remove()
}

const editBtn = (todos_id,idCounter) =>{

    todos_id.innerHTML = `<input id="editInp" type="text" class="form-control" placeholder="Edit Todo" aria-label="Recipient's username" aria-describedby="button-addon2">`
    let dynamicInput = document.getElementById('editInp');

    dynamicInput.addEventListener('blur',function edittedTodos(e) {

    dynamicInput.setAttribute('value',dynamicInput.value)

    if (dynamicInput.value.length >= 60) {
        alert('Please Edit and Add short Todos')
        }
        else{
        todos_id.innerHTML = dynamicInput.value
        todosRef.doc(`${idCounter}`).set({
            todo : dynamicInput.value
        })
        .then(() => {
            console.log("Document editted written!");
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });
        }
    })  
}

const getData = ()=> {
    
    todosRef.get().then((querySnapshot) => {
       
        querySnapshot.forEach((doc) => {
        databox.innerHTML+=`
        <div id='todos${doc.id}' class="todos-parent row d-flex align-items-center mb-1">
            <div  class="data px-2 col-lg-9 com-md-9 col-sm-9 col-9">
                <h4 id='editInp${doc.id}'>${doc.data().todo}</h4>
            </div>
            <div class="dynamic-btn  col-lg-2 col-md-2 col-sm-2 col-2 d-flex">
                <button onclick="editBtn(editInp${doc.id},${doc.id})" class="btn btn-info mx-2"><i class="fa-solid fa-pen"></i></button>
                <button onclick="delBtn(todos${doc.id},${doc.id})" class="btn btn-danger"><i class="fa-solid fa-minus"></i></button>
            </div>
        </div>
        `
        });
    });
}

getData()
