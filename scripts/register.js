// let reg=document.getElementById("reg");
// reg.addEventListener("click",()=>{
//     alert("you are now at register page ")
// })

let registerData=JSON.parse(localStorage.getItem("registerData")) || [];
let registerForm= document.getElementById("registerForm");

registerForm.addEventListener("submit" , registerFormDAta)
async function registerFormDAta(event){
    try{
        event.preventDefault()
        let firstName=document.getElementById("firstName").value;
        let lastName=document.getElementById("lastName").value;
        let email=document.getElementById("email").value
        let password=document.getElementById("password").value;
        let date=document.getElementById("date").value;
        let mobile=document.getElementById("mobile").value;

        let obj={firstName,lastName,email,password,date,mobile}
        registerData.push(obj);
 
        localStorage.setItem("registerData",JSON.stringify(registerData))

        let request_data = await fetch("http://localhost:5555/users" , {
            method : "POST" ,
            body: JSON.stringify(obj),
            headers:{
                "Content-Type" : "application/json" ,
            }
        });
        if (request_data.ok){
            alert("User has been Created so please login!")
            window.location.href = "login.html"
        }else{
            alert("Bad Request")
        }
    }catch(err){
        alert("something wrong")
    }
}























