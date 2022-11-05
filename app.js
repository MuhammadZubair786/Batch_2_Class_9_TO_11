
// b=--a
// console.log(b,a)
//11
//1 0
// 1 1
//00
// a=3
// b = a + a++  - a-- + a -  --a
// console.log(b,a)

// a=5
// b= ++a - --a + a - a++ + --a + a
    // 6 - 5 + 5 - 5 +  5 + 5
    // console.log(b)

//5,11,12,14

    // 3 + 3 - 4 + 3 - 2
//4
//5
//6
//7
//10
//11
//0

// document.write("Hello world Hello world ")
// document.write("")

// var inp = prompt("Enter Number","12")
// document.write(inp)

// var inp = prompt("Enter Number")
// var len = (inp.length)
// if(len==0){
//     document.write("Please enter data")
// }
// else{
//     document.write(inp)
// }

// var a =5
// var a1= typeof a
// var b="5"
// var b1 = typeof b
// var c = a===b
// console.log(a1,b1)
// console.log(c) //true


// a=parseInt("9")
// b=parseInt("8")
// c=parseInt("10") 
// var inp1= parseInt(prompt())
// if(a>b && a>c ){
//     console.log("a is greater")
// }
// else if(b>a && b>c){
//     console.log("b is greater")

// }
// else if(c>a && c>b){
//     console.log("c is greater")

// }

a=25 //global variable
b=50
c=10
console.log(E)
if(a>b && a>c){
    var E=10 //block local variable 
    //true
    document.write("A is g")
    if(b>c){
        document.write("B is Med")
        document.write("C is small")

    }
    else{
        document.write("C is Med")
        document.write("B is Small")
    }

}
else if(b>a && b>c){
    document.write("B is g")
    if(a>c){
        document.write("A is med")
        document.write("C is small")

    }
    else{
        document.write("c is med")
        document.write("A is small")

    }
}
else if(c>b && c>a){
    document.write("C is g")
    if(b>a){
        document.write("B is med")
        document.write("A is small")
    }
    else{
        document.write("A is med")
        document.write("b is small")
    }
}



// if(a>b){
//   //block scope  
//   console.log(a + "is Greater ")
// }
// else{
//     console.log(b + "is Greater ")

// }

// Task no 1 chapter 3

// var age = prompt(("Enter age"))
// alert("HFDGS "+age)

var user ="a"
var qty =10
var product="Laptop"

var b = a= c = 10

document.write("<br>"+user + " Order  is dfbdf "+ 10 + "" +product)

document.write("<br>"+"<h1>Display this in your browser</h1>")

document.write("Variable names can only contain number,$,")

var a = 4
document.writeln("<br>"+a + " * 1 =" + a*1)
document.writeln("<br>"+a + " * 2 =" + a*2)
document.writeln("<br>"+a + " * 2 =" + a*2)

p1=650
p2=100
var q1 =  parseInt(prompt())
var q2 =  parseInt(prompt())

var sum = q1*p1  + q2*p2 

document.write("<br>"+sum+100)









