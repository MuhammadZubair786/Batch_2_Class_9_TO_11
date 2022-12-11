// // var data = document.getElementsByTagName("div")
// // console.log(data[0].innerHTML)
// // data[0].innerHTML="<b>hello</b>"
// // console.log(data[0].innerHTML)
// // data[1].innerText="hello user"
// // for(var i=0;i<data.length;i++){
// //     data[i].style.color="red"
// // }

// // data[2].innerText+=`
// // <p>
// // hello user</p>
// // <b>bold</b>
// // `

// // var chk = document.getElementById("h1")
// // // console.log(chk.innerHTML)
// // var p2 = chk.getElementsByTagName("p")
// // console.log(p2)
// // console.log(p2[0].innerText)
// // p2[0].innerText="data user"
// // p2[1].style.color="red"

// // var data = document.childNodes[1].childNodes[2].childNodes[9].childNodes[2]
// // console.log(data.nodeType)
// // if(data.nodeType==3){
// //     console.log("chk")
// //    var chk1=  document.childNodes[1].childNodes[2].childNodes[9].childNodes[3]
// // console.log(chk1.innerText)
// // }

// // var data = document.getElementById("h1")
// // var chkl = data.childNodes
// // console.log(data.parentNode)
// // if(chkl.firstChild.nodeType==3){
// //     console.log(chkl[1])

// // }

// // var data = document.getElementById("h1")
// // console.log(data.childNodes[1])

// // console.log(data.childNodes[1].innerText)

// var ullist= document.getElementById("data")

// // console.log(chk.childNodes[3].innerText="new")
// var li1 = ullist.getElementsByTagName("li")
// console.log(li1.length)
// var i= 0
// var b1 = document.getElementById("b1")//button
// var inp = document.getElementById("text")//inp
// b1.addEventListener("click",function(){
//     if(i>=li1.length){
//         alert("Time over")
//     }
//     else{
//         li1[i].innerText=inp.value
//         li1[i].removeAttribute("class")
//     }
//     i +=1
    
// })

var h1 = document.getElementsByTagName("h1")
console.log(h1)

var data = document.getElementById("data")

function abc(){
    
   h1[0].setAttribute("id","ge")

   var d = document.getElementById("ge")

d.addEventListener("click",function(){
    console.log("hello new user")
})

}





function data1(){
    alert("ok")
    h1[0].removeAttribute("onclick")
}

data.addEventListener("click", ()=> abc())