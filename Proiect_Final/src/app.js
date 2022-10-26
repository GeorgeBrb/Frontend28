import { createProductCard } from "./js/card.js";
import { getAllProducts } from "./js/product.js";

window.addEventListener("DOMContentLoaded" , async () => {
     const products = await getAllProducts ();
 const productsCards = products.map((product) => createProductCard(product));

 document.querySelector(".container").innerHTML = productsCards.join("");
    });