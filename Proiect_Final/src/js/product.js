const PRODUCT_URL ="https://63519def9d64d7c713047c91.mockapi.io/products/";


export const getAllProducts = async () => {
  const result = await fetch(PRODUCT_URL);
  const products =await result.json() ;

  return products;
};

export const getProductById = async (id) =>{
  const result = await fetch (PRODUCT_URL + id);
  const product = await result.json();
  
  return product;
};

export const postNewProduct = async (product) =>{
  const response = await fetch (PRODUCT_URL , {
    method: "POST",
    headers: {
      "Content-Type":"application/json",
    },
    body: JSON.stringify(product),
  });
  
};