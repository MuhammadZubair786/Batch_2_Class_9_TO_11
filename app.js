
// for(i=0;i<10;i++){
//     if(i<5){
//         document.write("Start ma sb sei tya <br>")
//     }
//     else{
//         document.write("ab samjha nhi aya rei bhai<br>")
//     }

// }
// var alp_array = []//letter
// var n_list = []//number

// for (var i = 0; i < 5; i++) {
//     var data = prompt("enter value")
//     if (data.length > 0) {
//         if (data.charCodeAt(0) >= 65 && data.charCodeAt(0) <= 90
//             || data.charCodeAt(0) >= 97 && data.charCodeAt(0) <= 122) {
//             alp_array.push(data)//alpha_list add 
//         }
//         else if (data.charCodeAt(0) >= 48 && data.charCodeAt(0) <= 57) {
//             n_list.push(data)//number list add 
//         }

//     }
//     else {
//         document.write("No value enter " + "<br>")  
//     }

// }

// document.write(alp_array + "<br>")
// document.write(n_list)
// document.write(array)
// console.log(array.length)

// for(var i=0;i<array.length;i++){
//     document.write(array[i]+"<br>")
// }


var even =[]
var odd=[]

for(var j=0;j<5;j++){
    var num1 = prompt("Enter Number") //user input
    if(num1.length>0){
        //agar user na data enter kiya 
        if(num1.charCodeAt(0)>=48 && num1.charCodeAt(0)<=57){
            //check number 
            if(num1%2==0){
                // even
                document.write(num1+" is even number<br>" )
            }
            else{
                //odd
                document.write(num1+" is odd number<br>")

            }
        }
        else{
            // /ap na number nhi diya
            document.write("Enter Only number <br>")
        }

    }
    else{
        //input hei nhi kiya
        console.log("Value input must")
    }
}



