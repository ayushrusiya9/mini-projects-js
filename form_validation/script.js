let submitbtn = ()=>{
    let Name = document.querySelector("#name").value.trim()
    let Num = document.querySelector("#number").value.trim()
    let Email = document.querySelector("#email").value.trim()
    let Pass = document.querySelector("#password").value.trim()
    let Cpass = document.querySelector("#confirmPassword").value.trim()

    let Errname = document.querySelector(".errename")
    let Errnum = document.querySelector(".errorenum")
    let Errmail = document.querySelector(".erroremail")
    let Errpass = document.querySelector(".errorpass")
    let Errcpass = document.querySelector(".errorcpass")

    if(Name == ""){
        Errname.innerText = "Please Fill Your Name"
        Errname.style.visibility = "visible"
        return false
    }
    else if( isNaN(Num) ){
        Errnum.innerText = "Please Enter Numbers only"
        Errnum.style.visibility = "visible"
        return false    
    }
    else if( Num.length != 10){
        Errnum.innerText = "Please Enter Valid Number"
        Errnum.style.visibility = "visible"
        return false
    }
    else if(!(Email.includes("@",".com"))){
        Errmail.innerText = "Please Enter valid Email"
        Errmail.style.visibility = "visible"     
        return false
    }
    else if(Email == ""){
        Errmail.innerText = "Please Enter Your Email"
        Errmail.style.visibility = "visible"     
        return false
    }
    else if(Pass == ""){
        Errpass.innerText = "Please Enter Password"
        Errpass.style.visibility = "visible"     
        return false
    }
    else if(Cpass == ""){
        Errcpass.innerText = "Please Enter Confirm Password"
        Errcpass.style.visibility = "visible"     
        return false
    }
    else if(Cpass != Pass){ 
        Errcpass.innerText = "Please Enter Correct Confirm Password"
        Errcpass.style.visibility = "visible"
        document.querySelector("#confirmPassword").value = "" 
        document.querySelector("#confirmPassword").focus()
        return false
    }
    else if( !(Pass.match(/[!@#$%^&*]/) && Pass.match(/[1234567890]/) && Pass.metch(/[a-z]/) && Pass.metch(/[A-Z]/))){
        Errpass.innerText = "Please Enter Strong Password"
        Errpass.style.visibility = "visible"     
        return false    
    }
    
}