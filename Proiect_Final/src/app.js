import { createProductCard } from "./js/card.js";
import { getAllProducts } from "./js/product.js";

window.addEventListener("DOMContentLoaded" , async () => {
     const products = await getAllProducts ();
 const productsCards = products.map((product) => createProductCard(product));

 document.querySelector(".container").innerHTML = productsCards.join("");
    });

const addProductToCart = async (id) =>{
  let products = JSON.parse(localStorage.getItem("products"));
  if(products == null) products = [];
  products.push(id);

  localStorage.setItem("products" , JSON.stringify(products));

};

const handleActions = (event) => {
    if(event.target.classList.contains("add-to-cart")){
        const productId = event.target.id;
    addProductToCart(productId);
    }

};


document.querySelector(".container").addEventListener("click" , handleActions);