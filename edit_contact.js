var contact_key = localStorage.getItem("Current_Key")
console.log(contact_key)
var uid = localStorage.getItem("uid")
var name1= document.getElementById("name")
var contact= document.getElementById("contact")
var address= document.getElementById("address") 
var btn= document.getElementsByClassName("btn-primary")

firebase.database().ref("users/").child(uid+"/").child("contact/").child(contact_key)
.once("value",(snp)=>{

    console.log(snp.toJSON().name)

    name1.value=snp.toJSON().name
    contact.value= snp.toJSON().contact
    address.value=snp.toJSON().address
    

})

btn[0].addEventListener("click",async function(){
    event.preventDefault()
    var obj = {
        "name" : name1.value,
        "contact":contact.value,
        "address":address.value,
        "contact_key": contact_key 

    }
   
  await  firebase.database().ref("users/").child(uid+"/").child("contact/").child(contact_key).update(obj)
    window.location.href="new.html"

})