let gameover = false
let turn = 'X'
let boxes = document.getElementsByClassName('box')
let boxText = document.getElementsByClassName('boxtext')
let ting = new Audio("ting.mp3")




const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext')
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
            document.querySelector('.info').innerHTML = ` <h3> ${boxtext[e[0]].innerText} Won <hr class="border border-info border-2 opacity-100 mt-1"></h3>`
            document.querySelector('.win').getElementsByTagName('img')[0].style.height = "200px";
            gameover = true

         setTimeout(() => {
            let boxtexts = document.querySelectorAll('.boxtext')
            Array.from(boxtexts).forEach(element => {
                element.innerHTML = ''
            })
            document.getElementsByClassName("info")[0].innerHTML = `<span style="font-size: 1.75rem;font-weight: 500;" class="info">Turn for X <hr class="border border-info border-2 opacity-100 mt-1"></span>`
        }, 1000);
         setTimeout(() => {
            document.querySelector('.win').getElementsByTagName('img')[0].style.height = "0px";
         }, 2000);
        }
    })
}


Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {

        if (boxtext.innerText == '') {
            boxtext.innerText = turn
            turn = changeTurn()
            ting.play();
            checkWin()
            if (!gameover) {
                document.getElementsByClassName('info')[0].innerHTML = `<span style="font-size: 1.75rem;font-weight: 500;" class="info">Turn for ${turn} <hr class="border border-info border-2 opacity-100 mt-1"></span>`
            }
        }

        gameOver();

    })
})


const changeTurn = () => {
    return turn === 'X' ? '0' : 'X'
}

let btn = document.querySelector('.btn')
btn.addEventListener('click', () => {
    let boxtext = document.querySelectorAll('.boxtext')
    Array.from(boxtext).forEach(element => {
        element.innerHTML = ''
    })
    turn = 'X'
    document.querySelector('.win').getElementsByTagName('img')[0].style.height = "0px"
    document.getElementsByClassName("info")[0].innerHTML = `<span style="font-size: 1.75rem;font-weight: 500;" class="info">Turn for ${turn} <hr class="border border-info border-2 opacity-100 mt-1"></span> `
    gameover = false
})

function gameOver() {
    let boxtext = document.getElementsByClassName('boxtext')
    let count = 0
    Array.from(boxtext).forEach(element => {
        if (element.innerHTML != "") {
            count = count += 1
        }
    });
    console.log(count)
    if (count == 9) {
        document.getElementsByClassName("info")[0].innerHTML = `<span style="font-size: 1.75rem;font-weight: 500;" class="info">Game Over <hr class="border border-info border-2 opacity-100 mt-1"></span>`
        setTimeout(() => {
            Array.from(boxtext).forEach(element =>{
                element.innerHTML = ''
            })
            document.getElementsByClassName("info")[0].innerHTML = `<span style="font-size: 1.75rem;font-weight: 500;" class="info">Turn for X  <hr class="border border-info border-2 opacity-100 mt-1"></span>`
        }, 500);
    }
}



