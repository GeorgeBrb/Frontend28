const showProductDetails = async () =>{
    const searchParamString = window.location.search;
    
    const searchParams = new URLSearchParams(
        searchParamString.substring(1, searchParamString.length)
    );

   const productId= searchParams.get("id") ;
   const productURL =`https://63519def9d64d7c713047c91.mockapi.io/products/${productId}`
   const result = await fetch (productURL);
   const productInfo =await result.json()

   console.log(productInfo);

   const productsCardImg = 
   `<div>
   <img class="product-img" src="${productInfo.imgURL}">
   </div>
   `;
   
   document.querySelector(".product-image").innerHTML=productsCardImg;

  

   const productsCardDetails= 
   `<div>
   ${productInfo.description}
   </div>
   `;
   
   document.querySelector(".product-details").innerHTML=productsCardDetails;
};



window.addEventListener("DOMContentLoaded" , showProductDetails);