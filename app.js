var products = [];
var addButton = document.querySelector(".addBtn");
window.onload = function(){
    if (JSON.parse(localStorage.getItem("product-list"))!=null){
    products = JSON.parse(localStorage.getItem("product-list"));}
    console.log(products);
    display();
}


function addProduct() {
var newProduct = document.querySelector(".addProduct").value.trim();
products.push(newProduct);
if (localStorage.getItem("product-list")!=null){
    localStorage.setItem("product-list", JSON.stringify(products));
 }
 else {
     localStorage.setItem("product-list", JSON.stringify(products));
 }
document.querySelector(".addProduct").value = "";
display();
;
}

function display () {
    document.querySelector(".list").innerHTML = ""; 
    for (var i = 0 ; i < products.length ; i++)
    document.querySelector(".list").innerHTML += "<div class='productList'>"+products[i]+"<div class='icons'><i class='fa fa-check-circle-o' aria-hidden='true'></i><i class='fa fa-times' onclick='del()' aria-hidden='true' ></i></div></div>"

}

function del(index) {
products.splice(index, 1);
display();
}

function strike(index){

}

addButton.addEventListener("click", addProduct);
