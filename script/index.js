var bsData = [
    {img:"https://cdn.shopify.com/s/files/1/0906/2558/products/382512089-mettle-priming-balm-01.jpg?v=1648654861",
    name:"Mettle Priming Balm",
    price:"1099"},

    {img:"https://cdn.shopify.com/s/files/1/0906/2558/products/AirKissPowderPoweredByImagesArtboard1.jpg?v=1644813116",
    name:"Air Kiss Powder Lipstick",
    price:"499"},

    {img:"https://cdn.shopify.com/s/files/1/0906/2558/products/1_2d186f9b-9024-4e23-a0d2-a55b7671e89c.jpg?v=1657123108",
    name:"Contour  And Face Palette",
    price:"1099"},
    
    {img:"https://cdn.shopify.com/s/files/1/0906/2558/products/1_ef579f2e-602e-4d2f-bed2-bf0efdf4f184.jpg?v=1644325813",
    name:"Smudge  Liquid Lipstick",
    price:"499"},

   
]

var justinData=[
 {img:"https://cdn.shopify.com/s/files/1/0906/2558/products/414584697-rakhi-gift-kit-wbg-images-1.jpg?v=1658505710",
    name:"Rakhi Gift Kit",
    price:"1899"},

    {img:"https://cdn.shopify.com/s/files/1/0906/2558/products/Vineeta_s-Favourite-Makeup-kit---WBG-images.jpg?v=1657555460",
    name:" Favourite Makeup Kit",
    price:"2999"},

    {img:"https://cdn.shopify.com/s/files/1/0906/2558/products/1_2d186f9b-9024-4e23-a0d2-a55b7671e89c.jpg?v=1657123108",
    name:"Contour And Face Palette",
    price:"1099"},

    {img:"https://cdn.shopify.com/s/files/1/0906/2558/products/Monsoon-Makeup-Kit---WBG-Images_1_66ba2237-0dad-42dc-88ea-c2d45555dd6a.jpg?v=1657814549",
    name:"Monsoon Makeup Kit",
    price:"1799"},
]
 
let cartArr=JSON.parse(localStorage.getItem("bs-cart-item"))||[];

bsData.forEach(function (elem){

    let box= document.createElement("div");
    //img
    let product_img = document.createElement("img")

    product_img.setAttribute("src",elem.img)

    let title = document.createElement("p")
    title.innerText=elem.name;

    let price_tag= document.createElement("p")
    price_tag.innerText=elem.price;

    let btn= document.createElement("div");
    btn.innerText="ADD TO CART"

    btn.addEventListener("click", function(){ 
        // console.log(elem)
        cartArr.push(elem);
        // console.log(cartArr);
        localStorage.setItem("bs-cart-item",JSON.stringify(cartArr))
    })

    box.append(product_img,title,price_tag,btn);
    document.querySelector("#cartitem").append(box);
});

// justin box
justinData.forEach(function (elem){

    let box= document.createElement("div");
    //img
    let product_img = document.createElement("img")

    product_img.setAttribute("src",elem.img)

    let title = document.createElement("p")
    title.innerText=elem.name;

    let price_tag= document.createElement("p")
    price_tag.innerText=elem.price;

    let btn= document.createElement("div");
    btn.innerText="ADD TO CART"

    box.append(product_img,title,price_tag,btn);
    document.querySelector("#justincartitem").append(box);
});