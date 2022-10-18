


let count = 0

function calculate() {

    document.querySelector('.headings').style.border = "none"
    document.querySelector('.nameHeading').style.border = "none"
 

    var user_date = document.getElementById('date')
    var user_month = document.getElementById('month')
    var user_year = document.getElementById('year')
    var serial = document.getElementById('serial');
    var age = document.getElementById("age");
    var name = document.getElementById("name")
    var inp_name= document.getElementById("inp-name") 
    var ul = document.getElementById("list-item") 
    var create_name = document.createElement("li")
    var create_age= document.createElement("li")
    var create_serial = document.createElement("li")
    var name_hr =document.createElement('hr')
    var age_hr =document.createElement('hr')
    var serial_hr =document.createElement('hr')
    var current_year = new Date().getFullYear()

    var ul = document.createAttribute('class','data-border')

if(user_date.value== '' || user_month.value =='' || user_year.value =='' || inp_name.value ==''){
    alert("full fill all Inputs")
}
else if( !isNaN(inp_name.value)){
    alert("please enter the correct Name")
}
else if (user_date.value > 31 || user_date.value == 0 || user_month.value > 13 || user_month.value == 0 ) {
    alert("enter correct date month and year")
}
else if(isNaN(user_date.value) && isNaN(user_month.value) && isNaN(user_year.value)){
    alert("please enter date only numbers")
}

else if (user_year.value < current_year && !isNaN(user_date.value) && !isNaN(user_month.value) && !isNaN(user_year.value)) {
    var set_date = new Date(`${user_month.value} ${user_date.value}, ${user_year.value}`)
    // var months = [0, 'jan', 'feb', 'mar', 'april', 'may', 'june', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']
    var current_date = new Date;
    var result = current_date - set_date
    var day = Math.floor(result / (1000 * 60 * 60 * 24))
    var month = Math.floor(result / (1000 * 60 * 60 * 24 * 30))
    var year = Math.floor(result / (1000 * 60 * 60 * 24 * 30 * 12))
    // user_month = months[user_month]
    create_serial.innerHTML = ( count = ++count)
    serial.appendChild(create_serial)
    
    // age.className += 'agePadding'
    create_name.innerHTML = (inp_name.value)
    name.appendChild(create_name)
    create_age.innerHTML = (`Years : ${year} || Months : ${month} || Days : ${day}  `)
    age.appendChild(create_age)
  
    name.appendChild(name_hr)
    serial.appendChild(serial_hr)
    age.appendChild(age_hr)

    create_name.className = 'namePadding'
    create_serial.className = 'serialPadding'
    console.log(create_name)
    // console.log(inp_name.value)
}


else{
    alert("Please Enter the Correct Date")
}
    user_date.value = '';
    user_year.value = '';
    user_month.value = '';
    inp_name.value=''
}