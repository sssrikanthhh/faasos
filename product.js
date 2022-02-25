

var data = JSON.parse(localStorage.getItem("clicked_Image"))
console.log('displayData:', displayData)
console.log('data:', data)
displayData(data)
console.log('data:', data)


function displayData(item) {
    top_left
    var top_left = document.createElement("h4");
    // top_left.innerHTML = item.food_name;
    top_left.textContent = item.food_name;

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
        // document.querySelector("#bottom").innerHTML = " ";

        var bottom_tn = document.createElement("button");
        bottom_tn.id = "bottom_btn";
        bottom_tn.innerHTML = "PROCEED TO CHECKOUT";



        document.querySelector("#bottom").append(bottom_tn);
    });

    //right_bottom
    var detail = document.createElement("p");
    detail.textContent = `Veg Only) 1 Masala Paneer Tikka Wrap + 1 Jumbo Falafel Salsa Wrap . When flavourful surprises come knocking, you welcome them with open arms.`;

    var cat = document.createElement("h3");
    cat.innerHTML = item.tags;

    document.getElementById("top_left").append(top_left);

    document.getElementById("left").append(avtar);

    document.querySelector("#title_rs").append(title, rs);

    document.querySelector("#rating_add").append(rating, btn);

    document.getElementById("right_bottom").append(detail, cat);
};

