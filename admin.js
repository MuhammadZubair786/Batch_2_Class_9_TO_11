var table = document.getElementById("getproduct")
var edit_product = document.getElementById("edit_product")

var inp = document.getElementsByTagName("input")
console.log(inp[3].type)

var progress1 = document.getElementById("progress")

img_url ="" //current use rimg

var DISH_NAME = document.getElementById("DISH_NAME")
var PRICE = document.getElementById("PRICE")
var QTY = document.getElementById("QTY")
firebase.database().ref("Dishes").once("value",(db)=>{
    // console.log(db.toJSON())
    var value = Object.values(db.toJSON())
    // console.log(value)//array 
    value.map((v,i)=>{
        console.log(v)
        table.innerHTML+=`
        <tr>
        <td>${i+1}</td>
        <td>${v.Dish_Name}</td>
        <td>${v.Price}</td>
        <td>${v.qty  }</td>
        <td>
        <img src=${v.imgUrl  } style="width:200px;height:50px" alt="">
        </td>
        <td>
        <button id=${v.Dish_Key} onclick ="edit1(this)" >Edit</button>
        <button id=${v.Dish_Key}  onclick ="delete1(this)">Delete</button>

        </td>

      

    </tr>
        `
    })
})


function delete1(e){
    console.log(e.id)
    firebase.database().ref("Dishes").child(e.id).remove()

    window.location.reload()
}


async function edit1 (e){
    localStorage.setItem("Current_item",e.id)//set 
    
    event.preventDefault()
    console.log(e.id)
    // /get data 
   await  firebase.database().ref("Dishes").child(e.id.toString()).once("value",(snap)=>{
        console.log(snap.toJSON())
        DISH_NAME.value= snap.toJSON()["Dish_Name"]
        PRICE.value= snap.toJSON()["Price"]
        QTY.value= snap.toJSON()["qty"]
        localStorage.setItem("Current_Img",snap.toJSON()["imgUrl"])






    })
   
    edit_product.removeAttribute("style")

   
    
    
    
}


inp[3].addEventListener("click",function(){
    inp[3].onchange = e =>{
        files = e.target.files;
        reader = new FileReader();

        console.log(reader.result)
        reader.onload = function(){           
        }
        reader.readAsDataURL(files[0])
        console.log(files[0])
        document.getElementById("upload").removeAttribute("disabled")

       
    }
    
})

 upload.addEventListener("click",function (){
    event.preventDefault()
    console.log(files[0])
    var strg = firebase.storage().ref()

    var uploadTask = strg.child(`images/${files[0].name}`)
    .put(files[0])

    uploadTask.on('state_changed', 
      (snapshot) => {
      
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        progress1.style.display="inline"
        progress1.innerText=`Progress : ${progress}`
        // console.log('Upload is ' + progress + '% done');

        if(progress==0){
            progress1.innerText="Start upload"
        //   alert("Upload Process Star\n Plz Wait For Upload Image In Data Base")
        }
        if(progress<25){
            progress1.innerText=`Progress : ${progress}`
        }
        if(progress<50){
            progress1.innerText=`Progress : ${progress}`
        }
        if(progress<75){
            progress1.innerText=`Progress : ${progress}`
        }

        if(progress==100){
            progress1.innerText="complete"
        //   alert("Upload Process Finish \n Successfully Upload Image In Data Base")
        }
        
      }, 
      (error) => {
        // Handle unsuccessful uploads
      }, 
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            img_url =   downloadURL;
          console.log('File available at', downloadURL);
         document.getElementById('submit').removeAttribute('disabled')
        });
      }
    );

   


})

async function submit(){

    event.preventDefault()
    var key = localStorage.getItem("Current_item")
    console.log(key)

    var img = localStorage.getItem("Current_Img")
    console.log(img )
    console.log(DISH_NAME.value)

    var obj ={

        Dish_Name:DISH_NAME.value,
        Price:  PRICE.value,
        qty : QTY.value,
        imgUrl: img_url=="" ? img : img_url

       

    }
    await  firebase.database().ref("Dishes").child(key.toString()).update(obj)
    localStorage.removeItem("Current_item")

    // localStorage.clear() 


    window.location.reload()

   

}

