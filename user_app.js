var product = document.getElementById("product")

var uid = localStorage.getItem("Uid")
console.log(uid)

firebase.database().ref("Dishes").once("value", async function (snap) {
    console.log(snap.toJSON())
    var val = Object.values(snap.toJSON())//object to array
    console.log(val)



    for (var i of val) {
        var idchk=false
        console.log(i)
     await    firebase.database().ref("user").child(uid).child("MyOrders").once("value",(snap)=>{
            console.log(snap.toJSON())
            var obj = Object.values(snap.toJSON())
            for(j of obj){
                if(i.Product_Key==j.Prodoct_Id){
                    idchk=true
                    break
                }
                // console.log(j.Prodoct_Id)
                // console.log(i.Product_Key)
            }
        })
        if(idchk){
            console.log("already")
            product.innerHTML += `
            <div class="col col-lg-3 col-md-4 col-sm-6 col-12 mt-2">
            <div class="card" >
      <img src=${i.img_Url} class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${i.Dish_Name}</h5>
        <p class="card-text">${i.Price}.</p>
        <a href="#" class="btn btn-danger" disabled onclick="" id=${i.Product_Key}>Already Order</a>
      </div>
    </div>
    </div>
            `

        }
        else{
        product.innerHTML += `
        <div class="col col-lg-3 col-md-4 col-sm-6 col-12 mt-2">
        <div class="card" >
  <img src=${i.img_Url} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${i.Dish_Name}</h5>
    <p class="card-text">${i.Price}.</p>
    <a href="#"   class="txt btn btn-primary" onclick="Set_Order(this)" id=${i.Product_Key} " >
    <b class='txt'>
    Order
    </b>
    </a>
  </div>
</div>
</div>
        `

    }
}

})

async function Set_Order(e) {
    console.log(e.id)

    var uid = localStorage.getItem("Uid")
    console.log(uid)

    //check order 

    var chk = false//order already 

    await firebase.database().ref("user").child(uid).child("MyOrders").once("value", (db) => {
        var data = db.toJSON()
        // console.log(data)
        if (data != null) {
            var value = Object.values(data)//object to array 
            // console.log(value)

            //check //of values 
            for (var i of value) {
                console.log(i.Prodoct_Id)
                if (i.Prodoct_Id == e.id) {
                    chk = true
                    break//order already 
                }
                else {
                    chk = false

                }
            }



        }
    })
    if (chk == true) {
        alert("Already order")

    }
    else {
        console.log("order now")
        var key = firebase.database().ref("Orders").push().getKey()//key 

        await firebase.database().ref("Dishes").child(e.id).once("value", async (db) => {
            console.log(db.toJSON())
            var data = db.toJSON()



            //set 
            await firebase.database().ref("Orders").child(key).set({
                User_Id: uid,
                Prodoct_Id: data["Product_Key"],
                Price: data["Price"],
                Qty: data["Qty"],
                img_url: data["img_Url"],
                Dish_Name: data["Dish_Name"],
                Order_ID: key,
                status: "Order"
            })


            await firebase.database().ref("user").child(uid).child("MyOrders").child(key).set({
                User_Id: uid,
                Prodoct_Id: data["Product_Key"],
                Price: data["Price"],
                Qty: data["Qty"],
                img_url: data["img_Url"],
                Dish_Name: data["Dish_Name"],
                Order_ID: key,
                status: "Order"
            })
            window.location.reload()
        })
    }




}

