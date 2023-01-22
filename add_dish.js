console.log(firebase.storage())
var inp = document.getElementsByTagName("input")
console.log(inp[3].type)
var button = document.getElementById("upload")
var submit = document.getElementById("submit")
var progress1 = document.getElementById("progress")
var files
img_url=""

var DISH_NAME = document.getElementById("DISH_NAME")
var PRICE = document.getElementById("PRICE")
var QTY = document.getElementById("QTY")


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
// console.log(button)

submit.addEventListener("click",async function(){
    console.log("call")
    event.preventDefault()
    var key = firebase.database().ref("Dishes/").push().getKey()

    var obj = {
        Dish_Name:DISH_NAME.value,
        Price:PRICE.value,
        qty:QTY.value,
        imgUrl :img_url,
        Dish_Key : key

    }

  await  firebase.database().ref("Dishes/").child(key).set(obj)

  window.location.href="Admin_panel.html"
})
