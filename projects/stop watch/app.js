// ******************** stop watch code ***************************

let min = 0;
let sec = 0;
let miliSec = 0;
let minText = document.getElementById("min");
let secText = document.getElementById("sec");
let miliSecText = document.getElementById("miliSec");
// buttons<>
let startbtn = document.getElementById("start");
let pausebtn = document.getElementById("pause");
let resetbtn = document.getElementById("reset");
let lapbtn = document.getElementById("lap");

resetbtn.disabled = true
pausebtn.disabled = true
lapbtn.disabled = true
// variable name is change because its a function or method
// boutton</>
let msg = document.getElementById("msg");

function timer() {
    miliSec++
    miliSecText.innerHTML = miliSec;
    if (miliSec >= 100) {
        sec++
        secText.innerHTML = sec;
        miliSec = 0
    }
    else if (sec >= 60) {
        min++
        minText.innerHTML = min
        sec = 0

    }
}

let run;
let interval;
let lapCount = 1;

function start(e) {
    interval = setInterval(timer, 10)
    e.parentNode.children[0].disabled = true;
    resetbtn.disabled = false
    pausebtn.disabled = false
    lapbtn.disabled = false
    // document.body.children[0].firstElementChild.style.color = `rgb(250, 79, 79)`;
    document.getElementById("msg").children[0].style.color = `rgb(250, 79, 79)`
    msg.firstElementChild.innerHTML = "Runing";
}

function pause(e) {
    clearInterval(interval)
    e.parentNode.children[0].disabled = false
    pausebtn.disabled = true
    lapbtn.disabled = true
    document.getElementById("msg").children[0].style.color = `aqua`

    msg.firstElementChild.innerHTML = "Pause"
}

function reset(e) {

     sec = 0;
     min = 0;
     miliSec = 0;

    secText.innerHTML = sec
    minText.innerHTML = min
    miliSecText.innerHTML = miliSec
    clearInterval(interval)
    e.parentNode.children[0].disabled = false
    resetbtn.disabled = true
    pausebtn.disabled = true
    lapbtn.disabled = true
    document.getElementById("msg").children[0].style.color = `rgb(31, 236, 168)`
    ul.innerHTML = ""
    msg.firstElementChild.innerHTML = "Reset"
    setTimeout(() => {
        msg.firstElementChild.innerHTML = "Watch has Reset"
    }, 400);
    lapCount = 1

}

document.getElementById("lap").addEventListener("click", function (e) {
    lapCount++
})

function lap(e) {

    let val = document.createTextNode(`Lap : ${lapCount} | ${min} M : ${sec} S : ${miliSec} Ms`)
    let li = document.createElement("li")
    ul.appendChild(li)
    li.appendChild(val)
    document.getElementById("msg").children[0].style.color = `rgb(29, 188, 216)`
    let delbtn = document.createElement("button")
    let delbtnTxt = document.createTextNode("Delete")
    delbtn.appendChild(delbtnTxt)
    delbtn.setAttribute("class", "btn btn-outline-warning ml-2")
    delbtn.setAttribute("id", "delete")
    delbtn.setAttribute("onclick", "delLap(this)")
    li.appendChild(delbtn)
    msg.firstElementChild.innerHTML = "Laped"
    setTimeout(() => {
        msg.firstElementChild.innerHTML = "Runing"
        document.getElementById("msg").children[0].style.color = `rgb(250, 79, 79)`
    }, 500);

}

function delLap(e) {
    e.parentNode.remove()
}

