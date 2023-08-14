let inp = document.getElementById('inp');
let results = document.getElementById('result')
let pending = document.getElementById('pending');
let footer = document.getElementById('footer')

document.addEventListener('keydown', function (e) {
    e.keyCode == '13' ? run() : false;
})

const run = () => {

    if (inp.value == '') {
        alert('Please Enter some Value')
    }
    else if (!isNaN(inp.value)) {
        pending.innerHTML = 'Please Wait...'
        setTimeout(() => {
            result()
            pending.innerHTML = 'Access Granted'
            setTimeout(() => {
                pending.innerHTML = '.......'
            }, 1000);

        }, 2000);
    }

    else if (isNaN(inp.value)) {
        alert('please Enter value in Numbers')
        inp.value = ''
    }
}

const result = () => {

    if (isNaN(inp.value)) {
        alert('Please Enter value in Numbers')
    }
    else {
        pending.innerHTML = ''
        let hundred = 0
        let ten = 0
        let fifty = 0
        let value = 0

        if (true) {
            value = inp.value % 100
            hundred = Math.floor(inp.value / 100)

            if (true) {

                fifty = Math.floor(value / 50)
                value = value % 50

                if (true) {

                    ten = Math.floor(value / 10)
                    value = value % 10
                }

            }
        }

    results.innerHTML = `
    <div  class="notes col-xl-6 col-lg-6 col-md-6 col-sm-12"><h5>Total Hundred's Notes : ${hundred}</div>
    <div  class="notes col-xl-6 col-lg-6 col-md-6 col-sm-12"><h5>Total Fifty's Notes : ${fifty}</div>
    <div  class="notes col-xl-6 col-lg-6 col-md-6 col-sm-12"><h5>Total Ten's Notes : ${ten}</div>
    <div  class="notes col-xl-6 col-lg-6 col-md-6 col-sm-12"><h5>Rest of Amount ${value}</div>
    `
        footer.innerHTML = `<h5>Total Amount : ${inp.value}</h5>`
    }

    inp.value = ''
}



