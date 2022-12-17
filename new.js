var tag = document.getElementsByTagName("input")
var imgbtn =document.getElementsByTagName("button")
var div = document.getElementsByTagName("div")

imgbtn[0].addEventListener("click",function(){
    var img = document.createElement("img")
    console.log(img)
    console.log(tag[0].value)
    img.setAttribute("src",`${tag[0].value}`)
    div[0].appendChild(img)
    img.style.width="300px"
    img.style.height="100px"

})