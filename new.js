
// get all ref data
var email = document.getElementById("email")
var username = document.getElementById("name")

var table = document.getElementsByTagName("table")


var data = localStorage.getItem("uid")//get current user 
console.log(data)//current user uid 
// firebase.database().ref("users/").child(data).once("value",(snapshot)=>{
    firebase.database().ref(`users/${data}`).once("value",(data1)=>{    
console.log(data1.toJSON())
    
    var data = data1.toJSON()

    var email1 = data["email"]
    console.log(email1)
    email.innerText += `: ${email1}` 

    var name1 = data["name"]
    console.log(name1)

    username.innerText += ` : ${name1}`
})

console.log(table[0])

// firebase.database().ref("users/").once("value",(snapshot)=>{
//     console.log(snapshot.toJSON())
//     var data = snapshot.toJSON()
//     var value = Object.values(data)//object to array 
//     value.map((v,i)=>{
//         console.log(v)
//         console.log(i)
//     // table[0].innerHTML += `
//     // <tr>
//     // <td>${i+1}</td>
//     //         <td>${v.name}</td>
//     //         <td>${v.email}</td>
//     //         <td>${v.password}</td>
//     //         <td>${v.role}</td>
//     //         <td>View</td>
//     //     </tr>
//     // `

//         //show html table

//     })

// })


var data = localStorage.getItem("uid")//get current user 
console.log(data)//current user uid 

firebase.database().ref(`users/${data}/contact`).once("value",(snapshot)=>{
    console.log(snapshot.toJSON())
    var data = snapshot.toJSON()
    console.log(data)
    if(data !=null){
    var value = Object.values(data)//object to array 
    value.map((v,i)=>{
        console.log(v)
        console.log(i)
    table[0].innerHTML += `
    <tr>
    <td>${i+1}</td>
            <td>${v.name}</td>
            <td>${v.address}</td>
            <td>${v.contact}</td>
         
            <td>View</td>
        </tr>
    `

        //show html table

    })
}

})




