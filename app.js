var res = document.getElementById("text")
function show(e){
    console.log(e.innerText)
    console.log(res.value)
    res.value +=   e.innerText

}

function result(){
    console.log(res.value)
    var getres = eval(res.value)
    console.log(getres)
    res.value=getres
}

function cleardata(){
    console.log("data")
    res.value=""
}

function square(){
    res.value = res.value*res.value
}

function backsp(){
    res.value = res.value.substring(0,res.value.length-1)
}