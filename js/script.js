var allProducts = document.querySelectorAll(".products div")
var div = document.querySelector("#content")
var btn = document.querySelector("#btn")
var price = document.querySelector("#price")
var totalPrice = 0

allProducts.forEach(function (item){
    item.onclick = function (){
        div.innerHTML += item.textContent + " + "
        totalPrice += +(item.getAttribute("price"))

        if(div.innerHTML != ""){
            div.style.display = "block";
        }
        if(div.innerHTML != ""){
            btn.style.display = "block";
        }
        price.innerHTML = "Total price : " + totalPrice;

    }
})

btn.onclick = function (){
    btn.style.display = "none";
    price.style.display = "block";
}
