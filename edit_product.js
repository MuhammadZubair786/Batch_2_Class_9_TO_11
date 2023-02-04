var id = localStorage.getItem("Current_Pid")
console.log(id)

var inp = document.getElementsByTagName("input")
console.log(inp[3].type)
var getfile
var upload = document.getElementById("upload")
var imgurl =""

var imgset = document.getElementById("imgset")

var dishname = document.getElementById("dishname")
var price = document.getElementById("price")
var qty = document.getElementById("qty")
var img = ""

firebase.database().ref("Dishes/").child(id).once("value", (snap) => {
    console.log(snap.toJSON())
    var data = snap.toJSON()
    dishname.value = data["Dish_Name"]
    price.value = data["Price"]
    qty.value = data["Qty"]
    img = data["img_Url"]//db 
    imgset.src=data["img_Url"]


})


inp[3].addEventListener("click", function () {
    inp[3].onchange = e => {
        console.log(e.target.files[0])
        getfile = e.target.files[0]
       
        // const file = this.files[0];
        console.log(getfile);
        if (getfile){
          let reader = new FileReader();
          reader.onload = function(event){
            console.log(event.target.result);
            imgset.src=event.target.result
           
          }
          reader.readAsDataURL(getfile);
        }
        upload.removeAttribute("disabled")
    }
})

upload.addEventListener("click", async function () {
    event.preventDefault()
    console.log(getfile.name)
    var strg = firebase.storage().ref()
    var uploadTask = strg.child(`imageSfolder/${getfile.name}`)
        .put(getfile)

    uploadTask.on('state_changed',
        (sna) => {

            var progress = (sna.bytesTransferred / sna.totalBytes) * 100;//percenatge
    console.log(progress)

            if (progress == 0) {

                alert("Upload Process Start\n Plz Wait For Upload Image In Data Base")
            }


            if (progress == 100) {

                alert("Upload Process Finish \n Successfully Upload Image In Data Base")
            }

        },
        (error) => {

        },
        () => {

            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                imgurl = downloadURL;
                console.log('File available at', downloadURL);
                document.getElementById("submit").removeAttribute("disabled")

            });
        }
    );
})

submit1 = async () => {
  await   firebase.database().ref("Dishes/").child(id).update(
        {
            Dish_Name: dishname.value,
            Price:price.value,
            Qty:qty.value,
            img_Url: imgurl == "" ? img :imgurl

        }
    )
}





