function sendOTP() {
    const email = document.querySelector("#email");
    const otpverify = document.querySelector(".otpverify")[0];

    //create a SMTP creditenials 
    let otp_value = Math.floor(Math.random() * 10000);
    let emailBody = `<h2> Your OTP is ${otp_value} </h2> `;


    // 7b9dfe1f-e505-47cf-95b7-6dd84a2be155
    // Email.send({
    //     SecureToken : "7b9dfe1f-e505-47cf-95b7-6dd84a2be155",
    //     To : "sakthi130597@gmail.com",
    //     From : "sakthi130597@gmail.com",
    //     Subject : "OTP sent from SMTP creditenials",
    //     Body : emailBody
    // // }).then(
    // //   message => alert(message)
    // // );


    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "sakthi130597@gmail.com",
        Password: "15F25F4F2497B19460BC9CEF34BADCDDBBE7",
        From: "sakthi130597@gmail.com",
        To: "sakthi130597@gmail.com",
        Subject: "OTP sent from SMTP creditenials",
        Body: emailBody
    }).then(message => {
        if (message === "OK") {
            alert("Booyeah!! OTP sent to your email :-" + email.value);
            // otpverify.style.display = "block";
            const otp_inp = document.querySelector("#otp_inp");
            const otp_btn = document.querySelector("#otp_btn")
            otp_btn.addEventListener("click", () => {
                //checking wether sent email is valid
                if (otp_inp.value == "1402") {
                    alert("Logged in successfully!");
                } else {
                    alert("Invalid OTP");
                }
            })
        }
    });

}
