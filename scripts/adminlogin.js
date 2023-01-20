document.querySelector("#admin").addEventListener("click",adminlog)
function adminlog(event) {
    event.preventDefault()
    var userName = document.querySelector("#admin_username").value;
    var userPass = document.querySelector("#admin_password").value;
    if (userName == "admin" && userPass == "1234") {
        alert("Logged in successfully!!")
        window.location.href = "dashboard.html"
        
    } else {
        alert("Incorrect Credentials")
    }
}


document.querySelector("#admin form").addEventListener("click",LoginFunction)
async function LoginFunction(event) {
    try {
        event.preventDefault();
        let obj = {
            userName : document.querySelector("#admin_username").value,
            userPass : document.querySelector("#admin_password").value,
        }
        let login_request = await fetch("http://localhost:5555/login", {
            method: "POST",
            body: JSON.stringify(obj),
            headers: {
                "Content-Type": "application/json"
            },
        })
        if (login_request.ok) {
            let token = await login_request.json();
            sessionStorage.setItem("access_token", token.accessToken);
            alert("User has been successfully Logged In.");
            window.location.href = ".html";
        } else {
            alert("User not found.");
        }
    } catch (error) {
        console.log(error);
        alert("wrong username or password. Please try again later.");
    }
}





