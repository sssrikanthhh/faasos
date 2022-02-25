window.onload = () => {
    let list = document.querySelector("#loc");

    document.onclick = (event) => {
        if(event.target.id == "loc"){
            list.style.display = "block";
        }
        else {
            list.style.display = "none";
        }
    }
}


// Thambnails

var i = 0;
var img = [];
var time = 1000;
img[0] = "https://product-assets.faasos.io/production/product/image_1620280991048_Faasos%20Combo_3%20May_Classic%20Wraps%20%281%29.jpg"
img[1] = "https://product-assets.faasos.io/production/product/image_1618561895209_Faasos%20Chinese%20wraps_website%20banner%20%281%29.jpg"
img[2] = "https://product-assets.faasos.io/production/product/image_1620280380694_Banner%201%20%281%29.jpg"
img[3] = "https://product-assets.faasos.io/production/product/image_1620280934986_Faasos%20Combo_3%20May_Signature%20Wraps%20%281%29%20%281%29.jpg"
img[4] = "https://product-assets.faasos.io/production/product/image_1620280934986_Faasos%20Combo_3%20May_Signature%20Wraps%20%281%29%20%281%29.jpg"

function changeImg(){
    document.slide.src = img[i];

    if(i< img.length-1){
        i++;
    }
    else{
        i=0
    }
    setTimeout("changeImg()",2000);
}

window.onload = changeImg;



// search input

var cnt = 0;
var big = document.querySelector("#search");
big.addEventListener("click",function(){
    cnt++;

    var big = document.querySelector("#desk")
    if(cnt == 1){
        big.style.cssText = 'visibility: visible'
        document.querySelector("#nav").style.display = "none";
        return;
    }
    else{
        big.style.cssText = 'visibility: hidden'
        cnt = 0;
        return;
    }
});

// data

var foodData = [{
    cat:"Fab Wraps starting at 99 each",
    img_url:"https://product-assets.faasos.io/production/product/image_1618580131789_image_1618219032186_Fab%20%26%20Smokey%20Veg%20Combo%201%20Masala%20Paneer%20tikka%2B%201%20Jumbo%20Falafel%20Salsa%20Wrap.jpg",
    food_name:"Smokey Fab Combo (Veg)",
    Price:198,
    tags:"veg"
},
{
    cat:"Fab Wraps starting at 99 each",
    img_url:"https://product-assets.faasos.io/production/product/image_1618581012383_image_1603542783342_Resmi%20chicken%20kebab%20Wrap%20%2B%20Makhani%20Falafel%20Wrap.jpg",
    food_name:"Fab & Creamy Combo",
    Price:198,
    tags:"veg"
  },
  {
    cat:"Fab Wraps starting at 99 each",
    img_url:"https://product-assets.faasos.io/production/product/image_1618581154570_image_1603542884429_Cheese%20melt%20chicken%20wrap%20%2B%20Double%20cheese%20meatball%20wrap.jpg",
    food_name:"Fab NonVeg Combo ",
    Price:209,
    tags:"veg"
    
    
},
{
    cat:"Fab Wraps starting at 99 each",
    img_url:"https://product-assets.faasos.io/production/product/image_1618581269484_image_1618267295019_Mexican%20Potato%20Salsa%20%2B%20Makhni%20Falafel%20Wrap.jpg",
    food_name:"Exotic Fab Combo ",
    Price:219,
    tags:"Non-veg"
    
},
{
    cat:"Fab Wraps starting at 99 each",
    img_url:"https://product-assets.faasos.io/production/product/image_1618581404349_image_1618218800445_Fab%20%26%20Smokey%20Non%20Veg%20Combo%201%20BBQ%20Chicken%20Overload%20Wrap%20%2B%201%20Masala%20Chicken%20Tikka%20Wrap.jpg",
    food_name:"Smokey Fab combo (Non-Veg) ",
    Price:239,
    tags:"Non-veg"
    
},
{
    cat:"Faasos Chefs Specials",
    img_url:"https://product-assets.faasos.io/production/product/image_1641892783313_Jumbo%20Paneer%20Tikka%20Wrap.jpg",
    food_name:"XL Paneer Tikka Wrap ",
    Price:194,
    tags:"veg"
    
},
{
    cat:"Faasos Chefs Specials",
    img_url:"https://product-assets.faasos.io/production/product/image_1641892694075_Cheese%20Melt%20Potato%20Chili%20wrap.jpg",
    food_name:"Cheese Melt Potato Chili Wrap",
    Price:142,
    tags:"veg"
    
},
{
    cat:"Faasos Chefs Specials",
    img_url:"https://product-assets.faasos.io/production/product/image_1641571518437_image_1638428857069_Smokey%20Butter%20Chicken%20Wrap.jpg",
    food_name:"Somked butter Chicken Tikka",
    Price:268,
    tags:"Non-veg"
    
},
{
    cat:"Faasos Chefs Specials",
    img_url:"https://product-assets.faasos.io/production/product/image_1645135405426_American%20Smokey%20Sausage%20Wrap.jpg",
    food_name:"American Somkey Sausage Wrap ",
    Price:247,
    tags:"Non-veg"
    
},
{
    cat:"Faasos Chefs Specials",
    img_url:"https://product-assets.faasos.io/production/product/image_1645135433982_Bbaked%20vVeggie%20Pizza%20Wrap...jpg",
    food_name:"Baked Pizza Wrap-veg",
    Price:215,
    tags:"Non-veg"
    
},

//   ************

{
    cat:"Super Saver Combos (Upto 40% Savings)",
    img_url:"https://product-assets.faasos.io/production/product/image_1645126582740_2%20Signature%20Veg%20Wraps.jpg",
    food_name:"2 Signature Veg Wraps at 289",
    Price:289,
    tags:"veg"
    
},
{
    cat:"Super Saver Combos (Upto 40% Savings)",
    img_url:"https://product-assets.faasos.io/production/product/image_1645126605092_2%20Signature%20Non-Veg%20Wraps.jpg",
    food_name:"2 Signature NonVeg Wraps at 319",
    Price:319,
    tags:"veg"
    
},
{
    cat:"Super Saver Combos (Upto 40% Savings)",
    img_url:"https://product-assets.faasos.io/production/product/image_1645126624156_3%20Signature%20Veg%20Wraps.jpg",
    food_name:"3 Signature Veg Wraps at 399",
    Price:399,
    tags:"veg"
    
},
{
    cat:"Super Saver Combos (Upto 40% Savings)",
    img_url:"https://product-assets.faasos.io/production/product/image_1645126649589_3%20Signature%20Non-Veg%20Wraps.jpg",
    food_name:"3 Signature NonVeg Wraps at 469",
    Price:469,
    tags:"Non-veg"
    
},
{
    cat:"Super Saver Combos (Upto 40% Savings)",
    img_url:"https://product-assets.faasos.io/production/product/image_1645126675866_4%20Classic%20wraps%20-%20Veg.jpg",
    food_name:"4 Classic Veg Wraps at 379",
    Price:379,
    tags:"Non-veg"
    
},
//   ***********

{
    cat:"Biryani Week by The Biryani Life",
    img_url:"https://product-assets.faasos.io/production/product/image_1613246176392_chicken%20biryani%20%281%29-min%20%281%29.jpg",
    food_name:"Hyderabadi Dum Chicken Biryani (Boneless) (Serves 1)",
    Price:293,
    tags:"Non-veg"
    
},
{
    cat:"Biryani Week by The Biryani Life",
    img_url:"https://product-assets.faasos.io/production/product/image_1601735090421_cclassic%20chhicken%20biiryani.JPG",
    food_name:"Lucknowi Chicken Dum Biryani (Boneless)",
    Price:293,
    tags:"veg"
    
},
{
    cat:"Biryani Week by The Biryani Life",
    img_url:"https://product-assets.faasos.io/production/product/image_1613243870124_vveeegg%20bryaani.jpg",
    food_name:"Hyderabadi Dum Veg Biryani ",
    Price:240,
    tags:"veg"
    
},
{
    cat:"Biryani Week by The Biryani Life",
    img_url:"https://product-assets.faasos.io/production/product/image_1645184940220_Veg%20Biryani%20with%20Falafel%20Wrap%20and%20Thums%20Up%20Combo.jpg",
    food_name:"Veg Biryani with Falafel Wrap and Thums Up Combo",
    Price:387,
    tags:"veg"
    
},
{
    cat:"Biryani Week by The Biryani Life",
    img_url:"https://product-assets.faasos.io/production/product/image_1631009447013_image_1613243898631_ppeenar%20bberyani.jpg",
    food_name:"Hyderabadi Dum Paneer Biryani",
    Price: 272,
    tags:"veg"
    
},
// ***********
{
    cat:"Offer Today (2 Wraps at 220 Only)",
    img_url:"https://product-assets.faasos.io/production/product/image_1645126826179_2%20classic%20wraps%20-%20Veg.jpg",
    food_name:"2 Classic Veg Wraps starting at 220",
    Price:220 ,
    tags:"veg"
    
},
{
    cat:"Offer Today (2 Wraps at 220 Only)",
    img_url:"https://product-assets.faasos.io/production/product/image_1645126850634_2%20classic%20wraps%20-%20Non-Veg.jpg",
    food_name:"2 Classic Non-Veg Wraps starting at 220",
    Price:231 ,
    tags:"Non-veg"
    
},
//   ***************
{
    cat:"Signature Wraps - Veg",
    img_url:"https://product-assets.faasos.io/production/product/image_1643610194107_image_1641883877705_Dahi%20Kebab%20Wrap.jpg",
    food_name:"Must Try - Dahi Kebab Wrap..",
    Price: 242,
    tags:"Non-veg"
    
},
{
    cat:"Signature Wraps - Veg",
    img_url:"https://product-assets.faasos.io/production/product/image_1643610263205_image_1641892553077_Veg%20galouti%20kebab%20Wrap%20%281%29.jpg",
    food_name:"Veg Galauti Kebab Wrap..",
    Price: 242,
    tags:"Non-veg"
    
},
{
    cat:"Signature Wraps - Veg",
    img_url:"https://product-assets.faasos.io/production/product/image_1641893715778_Baked%20Veggie%20Pizza%20Wrap.jpg",
    food_name:"Baked Pizza Wrap (Veg)",
    Price:  215,
    tags:"veg"
    
},
{
    cat:"Signature Wraps - Veg",
    img_url:"https://product-assets.faasos.io/production/product/image_1641893751113_Jumbo%20Falafel%20Salsa%20Wrap.jpg",
    food_name:"Jumbo Falafel-Salsa Wrap",
    Price: 200,
    tags:"veg"
    
},
{
    cat:"Signature Wraps - Veg",
    img_url:"https://product-assets.faasos.io/production/product/image_1641893797299_Mexican%20Potato%20Salsa%20Wrap.jpg",
    food_name:"Mexicana Potato Salsa Wrap",
    Price:210 ,
    tags:"veg"
    
},
//   ****************

{
    cat:"Signature Wraps - Non-Veg",
    img_url:"https://product-assets.faasos.io/production/product/image_1643610354658_image_1641892151466_Chicken%20Haleem%20Kebab%20Wrap.jpg",
    food_name:"Chicken Haleem Kebab Wrap..",
    Price:299,
    tags:"Non-veg"
    
},
{
    cat:"Signature Wraps - Non-Veg",
    img_url:"https://product-assets.faasos.io/production/product/image_1641893466532_American%20Smokey%20Sausage%20Wrap.jpg",
    food_name:"American Smoked Sausage Wrap",
    Price:247,
    tags:"Non-veg"
    
},
{
    cat:"Signature Wraps - Non-Veg",
    img_url:"https://product-assets.faasos.io/production/product/image_1641893490800_Bhuna%20Chicken%20Overload%20Wrap.jpg",
    food_name:"Bhuna Chicken Overloaded Wrap",
    Price:268,
    tags:"Non-veg"
    
},
{
    cat:"Signature Wraps - Non-Veg",
    img_url:"https://product-assets.faasos.io/production/product/image_1641893519955_Baked%20Chicken%20Pizza%20Wrap.jpg",
    food_name:"Baked Pizza Wrap (Chicken)",
    Price: 252,
    tags:"veg"
    
},
{
    cat:"Signature Wraps - Non-Veg",
    img_url:"https://product-assets.faasos.io/production/product/image_1645135709354_Smokey%20Butter%20Chicken%20Wrap.jpg",
    food_name:"Smokey Butter Chicken Wrap.. (Newly Launched)",
    Price:268,
    tags:"veg"
    
},
// ***************

{
    cat:"Classic Wraps",
    img_url:"https://product-assets.faasos.io/production/product/image_1641883029313_Masala%20Paneer%20Tikka%20Wrap.jpg",
    food_name:"Masala Paneer Tikka Wrap",
    Price:158,
    tags:"veg"
    
},

{
    cat:"Classic Wraps",
    img_url:"https://product-assets.faasos.io/production/product/image_1641882774248_Cheese%20Melt%20Paneer%20Wrap.jpg",
    food_name:"Cheese Melt Paneer Wrap",
    Price:179,
    tags:"veg"
    
},

{
    cat:"Classic Wraps",
    img_url:"https://product-assets.faasos.io/production/product/image_1641882992492_Masala%20Chicken%20Tikka%20Wrap.jpg",
    food_name:"Masala Chicken Tikka Wrap",
    Price:173,
    tags:"Non-veg"
    
},

{
    cat:"Classic Wraps",
    img_url:"https://product-assets.faasos.io/production/product/image_1641883138707_Chicken%20Bhuna%20Wrap.jpg",
    food_name:"Chicken Bhuna Wrap",
    Price:173,
    tags:"Non-veg"
    
},

{
    cat:"Classic Wraps",
    img_url:"https://product-assets.faasos.io/production/product/image_1641883360240_Cheesy%20Corn%20Salsa%20Wrap.jpg",
    food_name:"Cheesy Corn Salsa Wrap",
    Price:158,
    tags:"Non-veg"
    
},
//   *********
{
    cat:"Combos for 1 (Upto 15% Savings)",
    img_url:"https://product-assets.faasos.io/production/product/image_1644397680670_79916%20Masala%20Chicken%20Tikka%20Wrap%20Treat.jpg",
    food_name:"(Serves 1) Super Saver Chicken Tikka Wrap Meal + Thums Up",
    Price:272,
    tags:"Non-veg"
    
},
{
    cat:"Combos for 1 (Upto 15% Savings)",
    img_url:"https://product-assets.faasos.io/production/product/image_1644397572794_73497%20Super%20Saver%20Paneer%20Rice%20Bowl%20Meal.jpg",
    food_name:"(Serves 1) Super Saver Paneer Rice Bowl Meal + Thums Up",
    Price:282,
    tags:"Non-veg"
    
},
{
    cat:"Combos for 1 (Upto 15% Savings)",
    img_url:"https://product-assets.faasos.io/production/product/image_1644399244067_80833%20Cheesy%20Corn%20Salsa%20Wrap%20Meal%20%28CF%29.jpg",
    food_name:"(Serves 1) Super Saver Cheese Corn Salsa Wrap Meal + Coke",
    Price:282,
    tags:"veg"
    
},
{
    cat:"Combos for 1 (Upto 15% Savings)",
    img_url:"https://product-assets.faasos.io/production/product/image_1644397631747_73498%20Super%20Saver%20Chicken%20Rice%20Bowl%20Meal%20%28CF%29.jpg",
    food_name:"(Serves 1) Super Saver Chicken Rice Bowl Meal + Thums Up",
    Price:293,
    tags:"veg"
    
},
{
    cat:"Combos for 1 (Upto 15% Savings)",
    img_url:"https://product-assets.faasos.io/production/product/image_1644398807642_80831%20Masala%20Paneer%20Tikka%20Wrap%20Meal%20%28CF%29.jpg",
    food_name:"(Serves 1) Super Saver Paneer Tikka Wrap Meal + Coke",
    Price:293,
    tags:"veg"
    
},
//   ***************

{
    cat:"Combos for 2 & 4 (Upto 25% Savings)",
    img_url:"https://product-assets.faasos.io/production/product/image_1644401912059_83399%20Double%20Value%20Veg%20Meal.jpg",
    food_name:"(Serves 2 ) Double Value Veg Wrap Meal + Coke",
    Price:408,
    tags:"veg"
    
},
{
    cat:"Combos for 2 & 4 (Upto 25% Savings)",
    img_url:"https://product-assets.faasos.io/production/product/image_1644402029465_83410%20Veg%20Wrap%20_%20Nuggets%20Meal.jpg",
    food_name:"(Serves 2 ) Double Value Paneer Wrap & Nuggets Meal (Veg)",
    Price:408,
    tags:"veg"
    
},
{
    cat:"Combos for 2 & 4 (Upto 25% Savings)",
    img_url:"https://product-assets.faasos.io/production/product/image_1644401821953_83398%20Double%20Value%20Non-Veg%20Meal.jpg",
    food_name:"(Serves 2 ) Double Value Non-Veg Wrap Meal + Coke",
    Price:419,
    tags:"Non-veg"
    
},
{
    cat:"Combos for 2 & 4 (Upto 25% Savings)",
    img_url:"https://product-assets.faasos.io/production/product/image_1644401969351_83405%20Triple%20Value%20Classic%20Veg%20Meal.jpg",
    food_name:"(Serves 2 ) Triple Value Veg Wrap + Coke",
    Price:419,
    tags:"Non-veg"
    
},
{
    cat:"Combos for 2 & 4 (Upto 25% Savings)",
    img_url:"https://product-assets.faasos.io/production/product/image_1644423974585_83406%20Triple%20Value%20Non-Veg%20Wrap%20Meal_.jpg",
    food_name:"(Serves 2 ) Triple Value Non-Veg Wrap Meal",
    Price:461,
    tags:"Non-veg"
    
},
//   ****************

{
    cat:"Rice Bowls",
    img_url:"https://product-assets.faasos.io/production/product/image_1637265821242_Smoked%20Butter%20Chicken%20Rice%20Bowl.jpg",
    food_name:"Smoked Butter Chicken Rice Bowl (Regular)",
    Price: 221,
    tags:"Non-veg"
    
},
{
    cat:"Rice Bowls",
    img_url:"https://product-assets.faasos.io/production/product/image_1637265836659_Smoked%20Butter%20Chicken%20Rice%20Bowl.jpg",
    food_name:"Smoked Butter Chicken Rice Bowl (Jumbo)",
    Price:284,
    tags:"Non-veg"
},
{
    cat:"Rice Bowls",
    img_url:"https://product-assets.faasos.io/production/product/image_1637265256614_Paneer%20Signature%20Rice%20Bowl.jpg",
    food_name:"Paneer Signature Rice Bowl (Regular)",
    Price:200,
    tags:"Non-veg"
    
},
{
    cat:"Rice Bowls",
    img_url:"https://product-assets.faasos.io/production/product/image_1637265373478_Rajma%20Rice%20Bowl.jpg",
    food_name:"Rajma Masala Rice Bowl (Regular)",
    Price:173,
    tags:"veg"
    
},
{
    cat:"Rice Bowls",
    img_url:"https://product-assets.faasos.io/production/product/image_1637265436588_Rajma%20Rice%20Bowl.jpg",
    food_name:"Rajma Masala Rice Bowl (Jumbo)",
    Price:210,
    tags:"veg"
    
},
// ****************
{
    cat:"Sides And Beverages",
    img_url:"https://product-assets.faasos.io/production/product/image_1638430875621_Potato%20Wedges%20120gm%20%28without%20Dip%29.jpg",
    food_name:"Potato Wedges (Medium)",
    Price:100,
    tags:"veg"
    
},
{
    cat:"Sides And Beverages",
    img_url:"https://product-assets.faasos.io/production/product/image_1638430697268_Meatballs%20with%20cheesy%20dip.jpg",
    food_name:"Cheesy Chicken Meatballs",
    Price:115,
    tags:"veg"
    
},
{
    cat:"Sides And Beverages",
    img_url:"https://product-assets.faasos.io/production/product/image_1638430624853_Potato%20Chilli%20shots%20with%20mayo%20dip.jpg",
    food_name:"Potato Chilli Shots with Mayo Dip",
    Price:94,
    tags:"veg"
    
},
{
    cat:"Sides And Beverages",
    img_url:"https://product-assets.faasos.io/production/product/image_1638430544869_Falafel%20nuggets%20with%20mayo%20dip.jpg",
    food_name:"Falafel Nuggets with Mayo Dip",
    Price:95,
    tags:"Non-veg"
    
},
{
    cat:"Sides And Beverages",
    img_url:"https://product-assets.faasos.io/production/product/image_1624452538141_Thumbs%20Up%20%28250%29.jpg",
    food_name:"Potato Wedges and Thums up",
    Price:121,
    tags:"Non-veg"
    
},
//   **********
{
    cat:"Desserts",
    img_url:"https://product-assets.faasos.io/production/product/image_1637325434373_Salted%20Caramel%20Pastry%20%28Pack%20of%202%29.jpg",
    food_name:"Salted Caramel Pastry (Box of 2)",
    Price:303,
    tags:"veg"
    
},
{
    cat:"Desserts",
    img_url:"https://product-assets.faasos.io/production/product/image_1637325462118_Triple%20Chocolate%20Mousse%20Pastry%20%28Pack%20of%202%29.jpg",
    food_name:"Triple Chocolate Mousse Pastry (Box of 2)",
    Price: 303,
    tags:"veg"
    
},
{
    cat:"Desserts",
    img_url:"https://product-assets.faasos.io/production/product/image_1638181499604_Rich%20Mango%20Cheesecake%20%28Combo%20of%202%29.jpg",
    food_name:"Mango Cheesecake (Box of 2)",
    Price:303,
    tags:"veg"
},
{
    cat:"Desserts",
    img_url:"https://product-assets.faasos.io/production/product/image_1637325641195_Salted%20Caramel%20Pastry%20%26%20Chocolate%20Crusted%20Cheesecake%20Combo%20%5BPack%20of%204%5D.jpg",
    food_name:"Salted Caramel Pastry & Choco Cheesecake (Box of 4)",
    Price: 576,
    tags:"veg"
},
{
    cat:"Desserts",
    img_url:"https://product-assets.faasos.io/production/product/image_1635342896740_Rich%20Red%20Velvet%20Pastry.jpg",
    food_name:"Rich Red Velvet Pastry",
    Price:167,
    tags:"veg"
},


]



var data = [];

// main data 
   
    // var foodData = JSON.parse(localStorage.getItem("food-Data")) || [];
    var cartData = JSON.parse(localStorage.getItem("mainCart")) || [];
    console.log("cartData",cartData)
    console.log("Food_Data",foodData)
  
  
    function displayData (arr) {
        document.querySelector("#main").innerHTML = "";
         arr.map(function(data){
            var div = document.createElement("div");
            
            var div1 = document.createElement("div");
            div1.setAttribute("id","imgDiv");;
    
            var image = document.createElement("img");
            image.setAttribute("src",data.img_url)
            image.style.marginBottom = "20px"
            image.style.borderRadius = "5px"
    
    
    
           var div2 = document.createElement("div");
           div2.setAttribute("id","flex1");
    
            var name = document.createElement("p");
            name.textContent = data.food_name;
            name.style.fontWeight = "bold"
            name.style.fontSize = "18px"
            name.style.marginLeft = "12px"
            // name.style.marginBottom = "30px"
    
           
            var price = document.createElement("p");
            price.textContent = "₹"+data.Price;
            price.style.marginRight = "20px"
    
    
            var div3 = document.createElement("div");
            div3.setAttribute("id","flex");
    
            function reatingItem(max){
                return (Math.random()*max).toFixed(1);
            }
    
            var reating = document.createElement("p");
            reating.textContent = "★"+" "+reatingItem(5);
            reating.style.backgroundColor = "green";
            reating.style.color = "white";
            reating.style.width = "45px";
            reating.style.borderRadius = "2px";
            reating.style.marginLeft = "12px"
           
    
            var btn = document.createElement("button");
            btn.textContent = "ADD"
            btn.style.backgroundColor = "#fd4"
            btn.style.border = "none";
            btn.style.width = "90px"
            btn.style.height = "30px"
            btn.style.fontWeight = "bold"
            btn.style.borderRadius = "4px";
            btn.style.marginRight = "20px"
            btn.onclick = ()=>{
                // console.log(1);
                
                Data.push(data);
                 localStorage.setItem("mainCart",JSON.stringify(Data));
                 printData(Data);
            };
            
    
            var div4 = document.createElement("div");
            div4.setAttribute("id","flex");
    
            var p = document.createElement("p");
            p.textContent = "17.2k bought this";
            p.style.color = "gray";
            p.style.marginLeft = "12px"
            p.style.fontSize = "small"
    
            var p2 = document.createElement("p");
            p2.textContent = "Customisable";
            p2.style.color = "gray";
            p2.style.marginRight = "20px"
            p2.style.fontSize = "x-small"
    
           div1.append(image)
           div2.append(name,price);
           div3.append(reating,btn);
           div4.append(p,p2)
      
            div.append(div1,div2,div3,div4);
    
            image.onclick = ()=>{
                localStorage.setItem("clicked_Image",JSON.stringify(data));
                window.location.href = "http://127.0.0.1:5500/product.html"
            }
            document.querySelector("#main").append(div);
        });
    }
 
    displayData(foodData);
    


    // cart data
   

   function printData(Data){
    if(Data.length <=0){
        document.querySelector("#cartDiv").style.display = "none";
        document.getElementById("mainCartDatahead").textContent = "There are no products in your Cart."
        // return;
    }
    document.getElementById("mainCartDatahead").style.display = "none";
    document.querySelector("#cartDiv").style.display = "block";

       document.querySelector("#cartData").innerHTML="";
       Data.map(function(item, index){
           console.log(item);

        
           var div = document.createElement("div");
           div.setAttribute("id","cart1");

           var div1 = document.createElement("div");
           div1.setAttribute("id","div1");

           var name = document.createElement("p");
           name.textContent = item.food_name;
           name.setAttribute("id","name1")
        

            div1.append(name);

            var div2 = document.createElement("div");
            div2.setAttribute("id","div2");

           var price = document.createElement("p");
           price.textContent = "₹"+item.Price;

           div2.append(price);

           var div3 = document.createElement("div");
           div3.setAttribute("id","div3");

           var remove = document.createElement("p");
           remove.textContent = "Remove";
           
           
           remove.addEventListener("click",function(){
               Data.splice(index,1);
               abc();
               localStorage.setItem("mainCart",JSON.stringify(Data)) ;
               
               printData(Data);

           })
           div3.append(remove);

           

           div.append(div1,div2,div3);
           document.querySelector("#cartData").append(div);

           abc();

       })
   }

   printData(Data);


   function abc(){
       var x = Data.reduce(function(a,b){
           return +a + +b.Price;
       },0)
   
       console.log("x",x)
       document.querySelector("#total").textContent = "SubTotal :"+ "₹"+ x ;

   }



let veg_filter = document.getElementById('veg_filter');
let non_veg_filter = document.getElementById('non_veg_filter');

veg_filter.oninput = () => {
    let veg_data = [];
    if(veg_filter.checked) {
        // console.log(1);
        foodData.map(function(item) {
            if(item.tags == "veg") {
                veg_data.push(item);
            }
        });
    }
    else{
        console.log(0);
        window.location.href = "index.html";
    }
    console.log(veg_data);

    displayData(veg_data);
}

non_veg_filter.oninput = () => {
    let Non_veg_data = [];
    if(non_veg_filter.checked){
        foodData.map(function(item){
            if(item.tags == "Non-veg"){
                Non_veg_data.push(item);
            }
        });
    }
    else{
        window.location.href = "index.html";
    }
    console.log(Non_veg_data)
    displayData(Non_veg_data);
}








