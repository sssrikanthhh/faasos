var loginDetails = JSON.parse(localStorage.getItem("lsUserData"))
displayData(loginDetails)
var displayData2 = JSON.parse(localStorage.getItem("clicked_Image"))
// console.log('displayData:', displayData)
// console.log('data:', data)
displayData2a(displayData2)
// console.log('data:', data)

function displayData(ele) {
    var fix = document.createElement("h3");
    fix.innerHTML = "Logged in";

    let div = document.createElement("div");

    var title = document.createElement("h3");
    title.innerHTML = ele[0].lsName;

    var mobile = document.createElement("h3");
    mobile.innerHTML = ` | ${ele[0].lsNumber}`;

    div.append(title, mobile);
    document.querySelector("#login").append(fix, div);
};


function displayData2a(item) {
    var prod = document.createElement("p");
    prod.innerHTML = item.food_name;

    var mrp = document.createElement("p");
    mrp.innerHTML = `₹ ${item.Price}`;

    var div1 = document.createElement("div")
    var div1a = document.createElement("p")
    div1a.innerHTML = "Card Amount"

    var div1b = document.createElement("p")
    div1b.innerHTML = `₹ ${item.Price}`

    var div2 = document.createElement("div")
    var div2a = document.createElement("p")
    div2a.innerHTML = "Tax"

    var div2b = document.createElement("p")
    div2b.innerHTML = "₹ 12"

    var div3 = document.createElement("div")
    var div3a = document.createElement("p")
    div3a.innerHTML = "Delivery"

    var div3b = document.createElement("p")
    div3b.innerHTML = "Free"
    div3b.id = "FreeItem"

    var total = document.createElement("h3")
    total.innerHTML = `₹ ${item.Price - 12}`

    div1.append(div1a, div1b)
    div2.append(div2a, div2b)
    div3.append(div3a, div3b)
    document.querySelector("#detail").append(prod, mrp);
    document.querySelector("#final").append(div1, div2, div3)

    document.querySelector("#total").append(total)
};