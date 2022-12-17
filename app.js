// // var h1 = document.getElementsByTagName("h1")
// // console.log(h1[0].hasAttribute("style"))//check 

// // var bt = document.getElementsByTagName("button")
// // console.log(bt[1])

// // var but1 = document.getElementById("data")
// // but1.addEventListener("mouseover",function(){
// //     // alert("click")
// //     var chl = h1[0].hasAttribute("class")
// //     console.log(  h1[0].classList)
// //     // h1[0].classList
// //     // h1[0].setAttribute("class","col")
// //     h1[0].classList="col"
   
// //     console.log(bt[1].getAttribute("disabled"))
// //     if(bt[1].getAttribute("disabled")){
// //         bt[1].removeAttribute("disabled")

// //     }
// //     else{
// //         bt[1].setAttribute("disabled",true)
// //     }
// // //    if(chl){
// // //     console.log("checvk ")
// // //     console.log(h1[0].style.display)
// // //     if(h1[0].style.display=="none"){
// // //         h1[0].style.display="block"
// // //     }
// // //     else{
// // //         h1[0].style.display="none"
// // //     }

// // //    }
// //     // if(chl){
// //     //     console.log("style attr set")
// //     //     var setdata = h1[0].getAttribute("style")
// //     //     // console.log(setdata)
        
// //     // //    
// //     //     h1[0].setAttribute("style",`${setdata}display:none`)
        
      
       

// //     // }
// //     // else{
// //     //     h1[0].setAttribute("style","display:block")
// //     // }
// // })

// var inp = document.getElementsByTagName("input")
// var btn = document.getElementsByTagName("button")
// var ul  =document.getElementsByTagName("ul")

// var del = document.getElementById("del")
// console.log(inp)
// btn[0].addEventListener("click",function(){
//     var elem = document.createElement("LI") //tag make
//     // console.log(elem)
//     var textnode = document.createTextNode(inp[0].value)
//     // var text = inp[0].value
//     // console.log(text)
//     elem.appendChild( textnode)
//     // console.log(elem)
//     ul[0].appendChild(elem)

//     b1= document.createElement("button")
//     textb1 = document.createTextNode("Edit")
//     b1.appendChild(textb1)
//     b1.setAttribute("onclick",`edit(this)`)
//     console.log(b1)
//    b1.setAttribute("class","class1")
//    elem.setAttribute("style","margin:10px")

//    elem.appendChild(b1)

//    b1= document.createElement("button")
//     textb1 = document.createTextNode("Delete")
//     b1.appendChild(textb1)
//     b1.setAttribute("onclick",`delet(this)`)
//     elem.appendChild(b1)
// })

// function delet(e){
//     // console.log(e.parentNode)
//     e.parentNode.remove()

// }

// function edit(e){
// var data = e.parentNode.childNodes[0]
// console.log(data)
// var p = prompt("enter data ",data.nodeValue)
// e.parentNode.childNodes[0].nodeValue= p
// }

// del.addEventListener("click",function(){
//     console.log("hdgshgd")
//     ul[0].innerHTML=""
// })