function OTPagain() {
    setTimeout( () =>{
        let num = "1234567890";
        let OTP= "";
      
        for(let i=0;i<4;i++){
            OTP += num[Math.floor(Math.random()*10)];
        }
        alert("Your OTP is "+ OTP )
        console.log(OTP)
        
        localStorage.setItem("OTP", JSON.stringify(OTP))
    },1000)
    
}

document.getElementById("ButtonSigup").addEventListener("click",function(){
    setTimeout( () =>{
            let num = "1234567890";
            let OTP= "";
          
            for(let i=0;i<4;i++){
                OTP += num[Math.floor(Math.random()*10)];
            }
            alert("Your OTP is "+ OTP )
            console.log(OTP)
            location.href="otp.html";
            localStorage.setItem("OTP", JSON.stringify(OTP))
    },1000)

    let num = document.getElementById("inputName").value;
localStorage.setItem("num:",JSON.stringify(num));
           

    
});






document.getElementById("ButtonOTPvarification").addEventListener("click" ,function(){
    let GetOTP = JSON.parse(localStorage.getItem('OTP'));
    console.log(GetOTP)

    let GetInput = document.getElementById("inputOTP").value
    console.log(GetInput)

    if(GetOTP == GetInput){
        alert("Login Successfully")
        location.href="index.html";
        document.getElementById("invalidOTP").style.display = "none";
    
    }
    else{
        let invalidOTP = document.getElementById("invalidOTP");
       

        const displayData = (parentNode) => {
    
                let div = document.createElement("div");
                invalidOTP.innerText="";
                let invalid = document.createElement("p");
                invalid.textContent = "Invalid OTP!";
                invalid.style.color = "red"
                div.append(invalid)
                parentNode.append(div)
            }
            
            displayData(invalidOTP);
            
        }
       
})