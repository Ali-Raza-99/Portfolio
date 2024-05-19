const db = firebase.firestore();
let addBtn = document.getElementById('addBtn');
let databox = document.getElementById('databox');
let inp = document.getElementById('inp');
let todosRef = db.collection('Todos');

document.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        if (inp.value === '') {
            alert('Please Enter some Todos');
        } else if (inp.value.length >= 60) {
            alert('Please Enter short Todos');
        } else {
            addTodo();
        }
    }
});

const addTodo = () => {
    if (inp.value === '') {
        alert('Please Enter some Todos');
    } else if (inp.value.length >= 60) {
        alert('Please Enter short Todos');
    } else {
        todosRef.add({
            todo: inp.value
        })
        .then((docRef) => {
            databox.innerHTML += `
                <div id='${docRef.id}' class="todos-parent row d-flex align-items-center mb-1">
                    <div class="data px-2 col-lg-9 col-md-9 col-sm-9 col-9">
                        <h4>${inp.value}</h4>
                    </div>
                    <div class="dynamic-btn col-lg-2 col-md-2 col-sm-2 col-2 d-flex">
                        <button onclick='editBtn("${docRef.id}")' class="btn btn-info mx-2">
                            <i class="fa-solid fa-pen"></i>
                        </button>
                        <button onclick='delBtn("${docRef.id}")' class="btn btn-danger">
                            <i class="fa-solid fa-minus"></i>
                        </button>
                    </div>
                </div>
            `;
            inp.value = '';
        })
        .catch((error) => {
            console.error("Error while adding document: ", error);
        });
    }
};

const delBtn = (todos_id) => {
    let todoElement = document.getElementById(todos_id);
    todosRef.doc(todos_id).delete().then(() => {
        if (todoElement) {
            todoElement.remove();
        }
        console.log("Document successfully deleted!");
    }).catch((error) => {
        console.error("Error removing document: ", error);
    });
};

const editBtn = (todos_id) => {
    let todoElement = document.getElementById(todos_id).querySelector('h4');
    let originalText = todoElement.innerText;
    todoElement.innerHTML = `<input id="editInp" type="text" class="form-control" value="${originalText}" placeholder="Edit Todo" aria-label="Edit Todo">`;
    let dynamicInput = document.getElementById('editInp');

    dynamicInput.addEventListener('blur', function() {
        if (dynamicInput.value.length >= 60) {
            alert('Please Edit and Add short Todos');
            dynamicInput.value = originalText;
        } else {
            todosRef.doc(todos_id).update({
                todo: dynamicInput.value
            })
            .then(() => {
                console.log("Document successfully updated!");
                todoElement.innerText = dynamicInput.value;
            })
            .catch((error) => {
                console.error("Error updating document: ", error);
                todoElement.innerText = originalText;
            });
        }
    });
};

const getData = () => {
    todosRef.get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            databox.innerHTML += `
                <div id='${doc.id}' class="todos-parent row d-flex align-items-center mb-1">
                    <div class="data px-2 col-lg-9 col-md-9 col-sm-9 col-9">
                        <h4>${doc.data().todo}</h4>
                    </div>
                    <div class="dynamic-btn col-lg-2 col-md-2 col-sm-2 col-2 d-flex">
                        <button onclick='editBtn("${doc.id}")' class="btn btn-info mx-2">
                            <i class="fa-solid fa-pen"></i>
                        </button>
                        <button onclick='delBtn("${doc.id}")' class="btn btn-danger">
                            <i class="fa-solid fa-minus"></i>
                        </button>
                    </div>
                </div>
            `;
        });
    });
};

getData();
