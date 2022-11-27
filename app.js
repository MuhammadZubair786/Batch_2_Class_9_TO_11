// // a = ["Sunday", "Monday", "Tuesday", "Wednesday"]
// // n1 = new Date()
// // // n1.setDate(16)
// // console.log(n1.getDay())
// // switch (n1.getDay()) {
// //     case 0:
// //         console.log(a[0])

// //         console.log("case 0")

// //         break


// //     case 1:
// //         console.log(a[1])
// //         break


// //     case 2:
// //         console.log(a[2])
// //         break

// //     case 3:
// //         console.log(a[3])
// //         break

// //     default:
// //         console.log("data ")
// // }

// var a =20
// var b =30
// var op = prompt("op")

// switch(op){
//     case "+":
//         console.log(a+b)
//         break
      
//     case "-":
//            console.log(a-b)
//            break
    
/*    default :
//     console.log("invalid op")
// */
// jwshdjhsd

function imgover(){
    // document.write("<h1>image on mouse</h1>")
}

function imgout(){
    // document.write("<h1>image on mouse</h1>")
}

function ontextblur(th){
    th.style.backgroundColor='red'
}

function onfoucfun(t){
    t.style.backgroundColor='yellow'
}

function imgch1(e){
    console.log(e)
    e.style.height="1000px"
    e.style.border="10px solid red"
    e.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpDe5TWvxdQQY5uTpU3GTL8fjW_veIrpi--TCkaK5Y&s"

}

function chgbg(p){
    console.log(p.innerText)
    var getcol = p.style.backgroundColor
    console.log(getcol)
    if(getcol==""){
        p.style.backgroundColor="red"
    }
    else if(getcol=="red"){
        p.style.backgroundColor="yellow"
    }
    else{
        p.style.backgroundColor="red"
    }
}

// function chngbg1(p){
//     console.log(p.innerText)
//     p.style.backgroundColor="white"


// }