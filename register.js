// let reg=document.getElementById("reg");
// reg.addEventListener("click",()=>{
//     alert("you are now at register page ")
// })

let registerData=JSON.parse(localStorage.getItem("registerData")) || [];
let registerForm= document.getElementById("registerForm");


registerForm.addEventListener("submit",()=>{

let firstName=document.getElementById("firstName").value;
let lastName=document.getElementById("lastName").value;
let email=document.getElementById("email").value
let password=document.getElementById("password").value;
let date=document.getElementById("date").value;
let mobile=document.getElementById("mobile").value;

let obj={firstName,lastName,email,password,date,mobile};

registerData.push(obj);
 
localStorage.setItem("registerData",JSON.stringify(registerData))
})


















