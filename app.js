

// arr[3]
// for(var i in arr){
//     // i=>1
//     // arr[0]=>1
//     // console.log(arr[i])
//     if(arr[i]%5!=0){
//         arr.splice(i,1)//value remove 
//         console.log(arr)
//         // [2,5,18,10,15]
//         i=i-1
//         // break;


//     }

// }
// var arr =[1,2,25,5,18,10,15,79,50]
// for(var i=0;i<arr.length;i++){
//     if(arr[i]%5==0){
//         console.log("yes")
//     }
//     else{
//         arr.splice(i,1)
//         console.log(arr)
//         i=i-1
//     }
// }

// var students = ["Asad","basil","kamran","Car","Hadi","daniyal","aqib"];

// for(i=0;i<students.length;i++){
// //   console.log(students[i].charCodeAt(0))
//   if(students[i].charCodeAt(0)==65 ||  
//    students[i].charCodeAt(0)==97||
//    students[i].charCodeAt(0)==66 ||  
//    students[i].charCodeAt(0)==98 ||
//    students[i].charCodeAt(0)==67 ||  
//    students[i].charCodeAt(0)==99
//    )  
//   {
//     console.log(students[i])
//   }
//   else{
//     // console.log("Remove ",students[i])
//     students.splice(i,1)
//     i=i-1
//   }
  
// }

// console.log(students)

arr =[1,2,4,56,78,34,82,45,-3,67]
lg=arr[0]
sm= arr[0]
for(j of arr){
    if(lg<j){
        lg=j
    }
    if(sm>j){
        sm=j
    }
}

// console.log("large : "+lg+"small : "+sm)

// for(j in arr){
//     console.log(j)//return index 
//     console.log(arr[j])//return value
// }

// for( k of arr){
//     console.log(k)//retunr value 

// }

var newstud =new Array(100)

// var edu = ["SSC"," HSC", "BCS", ]

// document.write("<h1>Data </h1>")
// for (var j in edu){
//     document.write("<h3>"+ parseInt(parseInt(j)+1) +")"+edu[j]+"<br></h3>")

// }

var name =["a","b","ali"]
var score =[100,200,300]

for(var j in score){
    document.write("Studen name "+name[j]+"s core "+ score[j]+" =" +score[j]/500*100 +"<br>")
}


