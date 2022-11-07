import { postNewProduct , getAllProducts , deleteProductById } from "./product";
import { showConfirmationMessage } from "./utils.js";

const imageInputElement = document.querySelector(".add-product-form #image");
const nameInputElement = document.querySelector(".add-product-form #name");
const descriptionInputElement = document.querySelector(".add-product-form #description");
const priceInputElement = document.querySelector(".add-product-form #price");
const populateProductsTable =  async () => {
 const products = await getAllProducts();
 console.log(products);

  const tableContent = products.map((product, index)  =>
    `<tr>
    <th scope="row">${index + 1}</th>
    <td><img src=${product.imgURL} width="50" heigh="50"></td>
    <td>${product.name}</td>
    <td>${product.price}</td>
    <td>
          <button id="${product.id}" class ="btn btn-danger">
              <i class="fa-solid fa-trash-can"></i>
          </button>
    </td>
  </tr>` )
  .join("");

  document.getElementById("products-table-body").innerHTML = tableContent;
}

window.addEventListener("DOMContentLoaded" , populateProductsTable);

console.log(imageInputElement,nameInputElement,descriptionInputElement,priceInputElement)

const addProduct = async () =>{
    const product = {
        name:nameInputElement.value,
        imgURL:imageInputElement.value, 
        description: descriptionInputElement.value,
        price: priceInputElement.value,
    };
    
    const response = await postNewProduct(product);
    showConfirmationMessage('.add-product-message' , response , "Produsul a fost adaugat cu success!");
  
};






document.getElementById("add-product").addEventListener("click", addProduct);


document.getElementById("add-new-product").addEventListener("click" , () =>{
    document.querySelector(".add-product-container").classList.toggle
    ("hidden");
});

const handleProducts = async (event) => {
    if(event.target.classList.contains("fa-trash-can")){
        console.log("suntem pe buttonul de delete");
        const productId = event.target.parentNode.id;
        const response = await deleteProductById(productId);
        if(response.ok) {
            await populateProductsTable();
        }
    }
};

document.getElementById("product-list").addEventListener("click" , handleProducts)