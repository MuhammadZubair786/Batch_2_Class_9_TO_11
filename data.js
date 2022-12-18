// // var arr=[
// // ['zia','saif','umer'],
// // ['zia','saif','umer'],
// // ['zia','saif','umer'],
// // ]
// var div = document.getElementsByTagName("div")
// // var tb=document.createElement("table")
// // tb.style.border='2px solid black'
// // for(var i=0;i<arr.length;i++){
// //     var tr=document.createElement("tr")


// // for(var j=0;j<arr[i].length;j++){

// //     var td=document.createElement("td")
// //     var noded=document.createTextNode(arr[i][j])
// //     td.appendChild(noded)
// //     console.log(td)
// // tr.appendChild(td)
// // td.style.backgroundColor="red"
// // td.style.border='2px solid black'
// // td.style.textAlign='center'
// // td.style.width='80px'
// // td.style.height='40px'
// // td.style.ho='40px'
// // // td.style.borderCollapse='borderCollapse'

// // }
// // tb.appendChild(tr)
// // console.log(tr)
// // }
// // console.log(tb)

// // div[0].appendChild(tb)

// // var std1={
// //     name:"asad",
// //     dept:"it",
// //     salary:30000,
// //     course:["It","Mern","Full stack","sb bht mushkil ha bhai"],
// //     address:{
// //         city:"hyd",
// //         street:"abc"
// //     }
// // }


// // console.log(std1)
// // console.log(std1.course[1]) //key 

// // // update data
// // std1.name="ali"
// // console.log(std1)
// // var std2={
// //     name:"ahmed",
// //     dept:"it",
// //     salary:30000
// // }
// // console.log(std2)
// // console.log(Object.values(std1))

// // Object.keys()

// var std = [
//     {
//         name: "smit",
//         dept: "it",
//         salary: 30000,
//         course: ["It", "Mern", "Full stack", "sb bht mushkil ha bhai"],
//         address: "hyd",



//     },
//     {
//         name: "ali",
//         dept: "it",
//         salary: 30000,
//         course: ["It", "Mern", "Full stack", "sb bht mushkil ha bhai"],
//         address: "hyd",


//     },
//     {
//         name: "ali",
//         dept: "it",
//         salary: 30000,
//         course: ["It", "Mern", "Full stack", "sb bht mushkil ha bhai"],
//         address: "hyd",


//     },
//     {
//         name: "ali",
//         dept: "it",
//         salary: 30000,
//         course: ["It", "Mern", "Full stack", "sb bht mushkil ha bhai"],
//         address: "hyd",


//     }
// ]
// var table = document.createElement("table")
// for (var i in std) {
//     var tr = document.createElement("tr")
//     var obj = Object.keys(std[i])
//     for (var j in obj) {
//         var th = document.createElement("th")
//         var textnode = document.createTextNode(obj[j])
//         // console.log(textnode)
//         th.appendChild(textnode)
//         // console.log(th)
//         tr.appendChild(th)
//         th.style.borderBottom = "4px solid blue"


//     }
//     console.log(tr)
    
// table.appendChild(tr)
// break
// }


// table.style.border = "1px solid red"
// // 
// table.style.margin = "10px"
// table.style.padding = "10px"


// for (var i in std) {
//     var tr = document.createElement("tr")
//     // console.log(Object.values(std[i])[0])
//     var obj = Object.values(std[i])//value
//     var key = Object.keys(std[i])//keys
//     for (var j in obj) {
//         if (key[j] == "course") {
//             console.log(key[j])
//             var td = document.createElement("td")
//             var textnode = document.createTextNode(obj[j])
//             console.log(td)
//             td.appendChild(textnode)
//             tr.appendChild(td)
//         }
//         else {
//             var td = document.createElement("td")
//             var textnode = document.createTextNode(obj[j])
//             console.log(td)
//             td.appendChild(textnode)
//             tr.appendChild(td)
//         }
//         td.style.borderBottom = "2px solid grey"


//     }
//     table.appendChild(tr)



// }

// div[0].appendChild(table)