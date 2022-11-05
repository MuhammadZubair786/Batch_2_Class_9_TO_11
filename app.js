// // A=4
// // var inp = parseInt(prompt(""))

// // if(inp==A){
// //     console.log("Correct")
// // }
// // else if(inp+1==A){
// //     console.log("Close enough to the correct answer")
// // }
// // else{
// //     console.log("Incorrecct")
// // }

// A= (Math.random()*100).toFixed()
// alert(A)

// var inp = parseInt(prompt(""))

// if(inp==A){
//     console.log("Correct")
// }
// else if(inp+1==A){
//     console.log("Close enough to the correct answer")
// }
// else{
//     console.log("Incorrecct")
// }

// a=prompt()
// var b =a%3
// console.log(b)
// if(b == 0){
//     console.log("3 is divide")

// }
// else{
//     console.log("not divisible")
// }

// var a1=prompt("Enter Number",5)
// console.log(a1)
// if(a1=="" || a1==undefined){
//     document.write("enter correct data")
// }
// else{
//     document.write("<b class='table'>"+a1+"* "+ 1 +" ="+a1*1)
//     document.write("<br/>"+a1+"* "+ 2 +" ="+a1*2)
//     document.write("<br/>"+a1+"* "+ 3 +" ="+a1*3)
//     document.write("<br/>"+a1+"* "+ 4 +" ="+a1*4)
//     document.write("<br/>"+a1+"* "+ 5 +" ="+a1*5+"<b>")
// }

var char = prompt("Enter Character")
console.log(char.length)
if(char.length==0){
    alert("Must Enter One Chaarcter")
}
else if(char.length==1){
    console.log("check character")
    console.log(char.charCodeAt(0))
    var getacii = char.charCodeAt(0)
    if(getacii>=65  && getacii<=90){
        document.write("Capital Letter Enter")

    }
    else if(getacii>=97  && getacii<=122){
        document.write("small Letter Enter")

    }
    else if(getacii>=48  && getacii<=57){
        document.write("number  Enter")

    }
}
else{
    console.log("only enter one cha")
}
