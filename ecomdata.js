var dishes = [
    {
        dish: "abc",
        price: 300,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa2i2_Pk61jt9ao55Z_SPDWGptyqjJwA2qiGJ9Sxwp3w&s",
    },
    {
        dish: "abc",
        price: 300,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa2i2_Pk61jt9ao55Z_SPDWGptyqjJwA2qiGJ9Sxwp3w&s",
    },
    {
        dish: "abc",
        price: 300,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa2i2_Pk61jt9ao55Z_SPDWGptyqjJwA2qiGJ9Sxwp3w&s",
    },
    {
        dish: "abc",
        price: 300,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa2i2_Pk61jt9ao55Z_SPDWGptyqjJwA2qiGJ9Sxwp3w&s",
    }
]

var div = document.getElementsByClassName("container")
for(var i in dishes){
    // console.log(dishes[i])
    var values =    Object.values(dishes[i])
    var img = Object.keys(dishes[i])
    // console.log(values)

    var row = document.createElement("div")
    row.setAttribute("class","row")
    var col = document.createElement("div")
    col.setAttribute("class","col col-lg-3")
    for(var j in values){
        if(img[j]=="img"){
            var img_tag = document.createElement("img")
            img_tag.setAttribute("src",values[j])
            // console.log(img_tag)

            // row.appendChild(img_tag)
            col.appendChild(img_tag)
        }
        else{
            var h1 = document.createElement("h5")
            var textnode = document.createTextNode(values[j])
            h1.appendChild(textnode)
            // console.log(h1)
            col.appendChild(h1)
            // row.appendChild(img_tag)

        }
    }
    row.appendChild(col)
    console.log(row)
    div[0].appendChild(row)

}
