let myArr
if (!localStorage.getItem('users'))
    myArr = [];
else myArr = JSON.parse(localStorage.getItem('users'))

$('#btn1').click(function() {


    let myUser = {
        username: $('#sname').val(),
        email: $('#semail').val(),
        password: $('#spassword').val()
    }
    myArr.push(myUser)
    localStorage.setItem('users', JSON.stringify(myArr))
    alert("Succesfully")
    if ($('#semail').val() == null) {
        alert("email is required")

    }
})



// let names = document.getElementById("sname")
// let emails = document.getElementById("semail")
// let passwords = document.getElementById("spassword")
// let form = document.getElementById("signup")

// let myArr = []
// if (localStorage.getItem('userdata')) {
//     myArr = JSON.parse(localStorage.getItem('userdata'))
//     console.log(myArr);
// }


// document.getElementById("btn-1").addEventListener("click", function(e) {
//     e.preventDefault()

//     let person = new ObjCreate(names.value, emails.value, passwords.value)
//     myArr.push(person)
//     let myjsontxt = JSON.stringify(myArr)
//     localStorage.setItem("userdata", myjsontxt)
// })

// function ObjCreate(n, e, p) {
//     this.name = n
//     this.email = e
//     this.password = p

// }