var country = ["", "pak", "ind", "sa"]
// var country = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];
var pkprovince = ["","pk1", "pk2", "pk3"]
var indprovince = ["ind1", "ind2", "ind3"]
var sindcity =["k","h"]
var punjabcity=["sargodha","lahore","multan"]

// obj => 

var obj ={
    "sindh": [],
    "punhjab":[]
}

var coutrytag = document.getElementById("country")
var provincedata = document.getElementById("province")
var citydata = document.getElementById("city")


for (var i of country) {
    if (i == country[0]) {
        coutrytag.innerHTML += `
        <OPTION value="" selected disabled>Select Country</option>`
    }
    else {
        coutrytag.innerHTML += `
        <OPTION value=${i} >${i}</option>`

    }

}

function chkdata() {
    provincedata.style.display = "inline"
    citydata.style.display="none"

    console.log(coutrytag.value)
    provincedata.innerHTML = ""
    if (coutrytag.value == country[1]) {
        for (var i of pkprovince) {
            if (i == pkprovince[0]) {
               provincedata.innerHTML += `
                <OPTION value="" selected disabled>Select province</option>`
            }
            else {
                provincedata.innerHTML += `
        <OPTION value=${i} >${i}</option>`

            }

        }

    }
    else if (coutrytag.value == country[2]) {
        for (var i of indprovince) {
            provincedata.innerHTML += `
        <OPTION value=${i} >${i}</option>`
        }

    }

}

function chgcity(){
    console.log(provincedata .value)
    citydata.style.display="inline"
    citydata.innerHTML=""
    if(provincedata.value == pkprovince[1]){
    for(var i of sindcity){
            citydata.innerHTML+=`<option value =${i}>${i}</option>`   

    }
    
}
else if(provincedata.value == pkprovince[2]){
    for(var i of punjabcity){
            citydata.innerHTML+=`<option value =${i}>${i}</option>`   

    }
    
}

}