import { postNewProduct } from "./product";

const imageInputElement = document.querySelector(".add-product-form #image");
const nameInputElement = document.querySelector(".add-product-form #name");
const descriptionInputElement = document.querySelector(".add-product-form #description");
const priceInputElement = document.querySelector(".add-product-form #price");

console.log(imageInputElement,nameInputElement,descriptionInputElement,priceInputElement)

const addProduct = async () =>{
    const product = {
        name:nameInputElement.value,
        imgURL:imageInputElement.value,
        description: descriptionInputElement.value,
        price: priceInputElement.value,
    };
    
    await postNewProduct(product);
};






document.getElementById("add-product").addEventListener("click", addProduct);