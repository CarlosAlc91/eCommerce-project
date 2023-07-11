function products(products) {
  /* receiving all products with the spread operator [...products] to generate a copy of all products */
  const db = [...products]

  /* function to paint all products and place'em in DOM */
  function printProducts () {
    
    const productsDom = document.querySelector('.products__container')

    let htmlProduct = ''

    for (const product of db) {
      htmlProduct += `
      <article class="product">
            <!-- PRODUCT IMAGE -->
            <div class="product__image">
              <img src="${product.image}"
                alt="${product.name}">
            </div>
            <!-- PRODUCT CONTENT -->
            <div class="product__content">
              <!-- ADD BUTTON -->
              <button type="button" class="product__btn add--to--cart" data-id="${product.id}">
                <i class='bx bx-cart'></i>
              </button>
              <!-- PRODUCT PRICE -->
              <span class="product__price">$${product.price}</span>
              <!-- PRODUCT STOCK -->
              <span class="product__stock">Available: ${product.quantity}</span>
              <!-- ARTICLE NAME -->
              <h3 class="product__title">${product.name}</h3>
            </div>
          </article>
      `
    }
    productsDom.innerHTML = htmlProduct
  }

  printProducts()
  return {
    db,
    printProducts
  }
}

export default products