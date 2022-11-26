
// do{
//     console.log(i)
//     i++

    
// }while(i<=10)

// arr=[]
// do{
//     console.log(arr[i])
//     i++
// }while(i<arr.length)

// i=0
// arr=[1,2,3,4,3,5,6,7,3,4,5,3]
// chk=3
// do{
//     if(arr[i]==chk){
//         console.log(i)
       
//     }
//     i++
// }while(i<arr.length)

// Math Method
// var a = Math.sin(90)
// console.log(a.toFixed())
// A=100.9089
// 100.9089
// Math.round(2)
// 2
// Math.round(A)
// 101
// A.toFixed(3)
// '100.909'
// Math.sqrt(4)
// 2
// Math.cbrt(8)
// 2

// =15.06
// 15.06
// Math.ceil(a)
// 16
// Math.floor(a)
// 15

var date = new Date()
console.log(date)
console.log(date.getMonth())

var currentdate = new Date()
var d_o_b = new Date("25 feb 2001")
currentdate.getFullYear()-d_o_b.getFullYear()
currentdate.getMonth()-d_o_b.getMonth()
currentdate.getDate()-d_o_b.getDate()


// console.log(date.toString().substring(0,3))

currentdate = new Date()
// currentdate.setFullYear(2020)
currentdate.setMonth("april")
console.log(currentdate)
