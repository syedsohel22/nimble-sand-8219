let products = JSON.parse(localStorage.getItem("bs-cart-item"))
console.log(products)
document.querySelector("#total-items").innerText=products.length

let total = products.reduce(function (acc,el,i){
    return acc + Number(el.price)
},0)

console.log(total)
document.querySelector("#total-bill").innerText="₹  " + total


products.map(function (elem,i){

    let box= document.createElement("div");
    //img
    let product_img = document.createElement("img")

    product_img.setAttribute("src",elem.img)

    let title = document.createElement("p")
    title.innerText=elem.name;

    let price_tag= document.createElement("p")
    price_tag.innerText=elem.price;
     
    let btn= document.createElement("button");
    btn.innerText= "Remove";

    // let total = products.reduce(function (acc,el,i){
    //     return acc + Number(el.price)
    // },0)
    // document.querySelector("#total-bill").innerText="₹  " + total

    btn.addEventListener("click", function (){
        event.target.parentNode.remove();
        products.splice(i,1)
        console.log(products)
        localStorage.setItem("bs-cart-item",JSON.stringify(products))
    });

    box.append(product_img,title,price_tag,btn);
    document.querySelector("#side-box").append(box);
});

function deleteitem(){
    // event.target.parentNode.remove();
    // products.splice(i,1)
}