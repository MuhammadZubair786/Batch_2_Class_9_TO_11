var email = document.getElementById("email")  //global 
var h1 = document.getElementById("h1")
var password = document.getElementById("password")
var eye = document.getElementById("eye")
var ctry = document.getElementById("SELECTCTRY")
var numbset = document.getElementById("settext")
getpass = "123abc"
function getdata(){
    event.preventDefault()
    if(password.value==getpass){
       
        console.log(password.value)
        eye.className="hide"
    }
    else{
      console.log(eye.className)
      eye.className="show"
    }

}

function chngtype(){
    console.log(password.type)
    if(password.type=="password"){
        password.type="text"
    }
    else{
        password.type="password"
    }
    

}

function setnumb(){
    console.log(ctry.value)
    var cntry =ctry.value 
    if(cntry.value!=""){
        document.getElementById("cntrytxt").classList = "hide red"
    }
    if(cntry=="pak"){
        document.getElementById("setpkprovince").classList="show"
        document.getElementById("setindprovince").classList="hide"
        numbset.value="+92"

    }
    else if (cntry =="ind"){
        document.getElementById("setindprovince").classList="show"
        document.getElementById("setpkprovince").classList="hide"
        numbset.value = "+91"
    }
    else if(cntry=="sa"){
        numbset.value="+23"
    }
}

function chkdata(){
    event.preventDefault()
    if(email.value== ""){
        document.getElementById("emailtxt").classList = "show red"
       

    }
    else if(password.value==""){
        document.getElementById("emailtxt").classList = "hide red"
        document.getElementById("passwordtxt").classList = "show red"


    }
    else if(ctry.value==""){
        document.getElementById("passwordtxt").classList = "hide red"
        document.getElementById("cntrytxt").classList = "show red"
    }

}


