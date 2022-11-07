const loadProducts = () => {
    const productsIds =JSON.parse( localStorage.getItem("products"));

    console.log(productsIds);

    const products = [];
   const createCardFromProduct = (product) => {
		return `<div class='card' style="width: 18rem;">
               <img class="card-img-top" src="${product.imgURL}" alt="Card image cap">
               <div class="card-body">
                  <h5 class="card-title">${product.name}</h5>
                  <p class="card-text">${product.price}</p>
                  
                 
                </div>
            </div>`;
	};

    



   productsIds.forEach( async (productId) => {
        const result = await fetch(
            `https://63519def9d64d7c713047c91.mockapi.io/products/${productId}`
        );
        const product = await result.json();
        const innerHTMLProduct = createCardFromProduct(product);
        document.querySelector('.cart-container').innerHTML += innerHTMLProduct;
    }
    );
    
    
    



};
window.addEventListener("DOMContentLoaded" , loadProducts);