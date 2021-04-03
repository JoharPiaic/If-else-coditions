// // // if else if conditions

// var age = +prompt("Enter our age ")
// if(age == 25){
//     alert("Your Age is Equal")
// }
// else if(age > 24){
//     alert("You are a MAN")
// }

// else{
//     alert("You are Young")
// }


var age = +prompt("Enter our age ")
var gender = +prompt("Enter Gender ")
if(age < 18 && gender == "Male"){
    alert("You are allow")
}
else if(age < 18){
    alert("You are allow")
}

else{
    alert("You are not allow")
}