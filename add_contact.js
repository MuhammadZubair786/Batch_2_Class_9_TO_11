var name1= document.getElementById("name")
var contact= document.getElementById("contact")
var address= document.getElementById("address")

var data = localStorage.getItem("uid")//get current user 
console.log(data)//current user uid 

var btn = document.getElementsByTagName("button")
btn[0].addEventListener("click",function(){
    event.preventDefault()
    

    var key =  firebase.database().ref(`users/${data}/`).child("contact").push().getKey()
console.log(key)
    var obj = {
        "name" : name1.value,
        "contact":contact.value,
        "address":address.value,
        "contact_key": key 

    }

    firebase.database().ref(`users/${data}/`).child("contact/").child(key).set(obj)


})
