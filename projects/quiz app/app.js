
//  name.html ***************************************

function passValue(params) {
    var name = document.getElementById('nameInput').value.toUpperCase();
    localStorage.setItem('user',name);
    if (name == '' || name == null ) {
     alert("Please Enter Your Name")   
    }
    else{

        var form = document.getElementById('form')
        form.setAttribute('action','index.html')
    }
    // return false;
}


//  name.html ***************************************
 
 var questions = [
    {
        question: 'what is HTML Stands for',
        option: ['Hyper Text Markup Language',
         'Hyper Type Markup Language', "Hide Type Markup Language", "Hyper Text Mark Language"],
        answer: 'Hyper Text Markup Language'
    }
    ,
    {
        question: 'what is CSS Stands for',
        option: ['Casecading Style Script', 'Casecading Style Sheet', "Case Style Script", "Case Scipt Sytle"],
        answer: 'Casecading Style Sheet'
    }
    ,
    {
        question: 'what is ReactJs',
        option: ['Front-end frame work', 'Back-end-frame work', "Developer's software", "Full-stack framework"],
        answer: 'Front-end frame work'
    }
    ,
    {
        question: 'what is DOM stands for',
        option: ['Document Object Model', 'Document Object Modules', "Data Object Model", "Document Observe Model"],
        answer: 'Document Object Model'
    }
    ,
    {
        question: 'What is firebase FireStore',
        option: ['Freelancing Bussiness', 'Database', "front-end famework", "Hosting"],
        answer: 'Database'
    }

]


var options = document.getElementsByClassName('option');
var showQuestion = document.getElementById('question');
var optionsParent = document.getElementById("optionsparent");
var questionCount = document.getElementById("questionCompleted");
var updateOption = 0;
var updateQuestion = 0;
var count = 1;
var score = 0;


function showQuestions(e) { 
var showQuestion = document.getElementById('question');

    var options = document.getElementsByClassName('option');

    showQuestion.innerHTML = questions[e].question;

    for (let i = 0; i < options.length; i++) {
        options[i].innerHTML = questions[e].option[i];
    }

}
function nextQuestion(e) {

    
    if(questions.length == updateQuestion || count == 5){
        count--
        window.location.href = ("result.html");
    }

        validate(updateQuestion);
        count++;
        updateQuestion++;
        questionCount.innerText = count;
        showQuestions(updateQuestion);
        removeActiveClass();

        showQuestions(updateQuestion);
        removeActiveClass();
}

function validate(e) {
     var active= document.getElementsByClassName('active');

        if (active[0].innerHTML == questions[e].answer) {
            score+=10;
            localStorage.setItem('score',score);
            console.log(score);
         }

}

function putActiveClass(e) {
    removeActiveClass();
    e.className+=' active';
}

function removeActiveClass() {
   var active= document.getElementsByClassName('active');
    for (let i = 0; i < active.length; i++) {
        active[i].classList.remove('active');
    }
}


