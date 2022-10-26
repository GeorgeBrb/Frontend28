export const createProductCard = (product) =>
`<div class="card" style="width: 18rem;">
<img class="card-img-top" src="${product.imgURL}" alt="Card image cap">
<div class="card-body">
  <h6 class="card-title">${product.name}</h6>
  <h9 class="card-price">${product.price}</h9>
  <div class="btn-bottom">
  <a href="src/pages/details.html?id=${product.id}" class="btn btn-dark">Details</a>
  <a href="#" class="btn btn-danger">Add to cart</a>
  </div>
</div>
</div>
`;
