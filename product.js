// displayData = [
//     {
//         img_url: `https://product-assets.faasos.io/production/product/image_1618580131789_image_1618219032186_Fab%20%26%20Smokey%20Veg%20Combo%201%20Masala%20Paneer%20tikka%2B%201%20Jumbo%20Falafel%20Salsa%20Wrap.jpg`,
//         food_name: `Smokey Fab Combo(Veg)`,
//         Price: 209,
//         des: `Veg Only) 1 Masala Paneer Tikka Wrap + 1 Jumbo Falafel Salsa Wrap . When flavourful surprises come knocking, you welcome them with open arms. Especially when they come with savings of Rs.137!
//       Read More`,
//         cat: `Rolls`,
//     },
// ];

document.getElementById("imgDiv");
imgDiv.onclick= ()=>{
    localStorage.getItem("clicked_Image")
}
    alert("Added to cart");
    window.location.href = "./HomePage.index.html";
  

var displayData = JSON.parse(localStorage.getItem("clicked_Image"))

displayData.map(function (item) {
    //top_left
    var top_left = document.createElement("h4");
    // top_left.innerHTML = item.food_name;
    top_left.textContent = ` ${item.food_name}`;

    //left
    var avtar = document.createElement("img");
    avtar.setAttribute("src", item.img_url);

    //title_rs
    var title = document.createElement("h2");
    title.innerHTML = item.food_name;

    var rs = document.createElement("p");
    rs.textContent = `₹ ${item.Price}`;

    //rating_add
    var rating = document.createElement("p");
    rating.textContent = "★ 4.7";

    var btn = document.createElement("button");
    btn.innerHTML = "ADD";

    btn.addEventListener("click", function () {
        document.querySelector("#bottom").innerHTML = " ";

        var bottom_tn = document.createElement("button");
        bottom_tn.id = "bottom_btn";
        bottom_tn.innerHTML = "PROCEED TO CHECKOUT";



        document.querySelector("#bottom").append(bottom_tn);
    });

    //right_bottom
    var detail = document.createElement("p");
    detail.textContent = item.des;

    var cat = document.createElement("h3");
    cat.innerHTML = item.cat;

    document.getElementById("top_left").append(top_left);

    document.getElementById("left").append(avtar);

    document.querySelector("#title_rs").append(title, rs);

    document.querySelector("#rating_add").append(rating, btn);

    document.getElementById("right_bottom").append(detail, cat);
});

function add() { }
