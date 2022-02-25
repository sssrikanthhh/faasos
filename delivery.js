displayData = [
    {
        name: `Shiva`,
        number: `7038020143`,
    },
];

displayData2 = [
    {
        title: `Smokey Fab Combo (Veg)`,
        price: 255,
    },
];

displayData.map(function (ele) {
    var fix = document.createElement("h3");
    fix.innerHTML = "Logged in";

    let div = document.createElement("div");

    var title = document.createElement("h3");
    title.innerHTML = ele.name;

    var mobile = document.createElement("h3");
    mobile.innerHTML = ` | ${ele.number}`;

    div.append(title, mobile);
    document.querySelector("#login").append(fix, div);
});


displayData2.map(function (item) {
    var prod = document.createElement("p");
    prod.innerHTML = item.title;

    var mrp = document.createElement("p");
    mrp.innerHTML = `₹ ${item.price}`;

    var div1 = document.createElement("div")
    var div1a = document.createElement("p")
    div1a.innerHTML = "Card Amount"

    var div1b = document.createElement("p")
    div1b.innerHTML = `₹ ${item.price}`

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
    total.innerHTML = `₹ ${item.price - 12}`

    div1.append(div1a, div1b)
    div2.append(div2a, div2b)
    div3.append(div3a, div3b)
    document.querySelector("#detail").append(prod, mrp);
    document.querySelector("#final").append(div1, div2, div3)

    document.querySelector("#total").append(total)
});