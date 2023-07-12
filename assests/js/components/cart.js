/* we're importing the database previously created in products*/

function cart(db, printProducts) {
  /* adding products to cart */
  /* creating an object to have product's id and quantity */
  let cart = []

  /* this function will paint all elements into the cart */
  function printCart () {
    console.log('Carrito');
    console.log(cart);

    console.log(`items: ${showItemsCount()}`);
    console.log(`total: ${showTotal()}`);
  }

  /* function to detect when a pruduct is added to cart when we click on cart button, it will return product's id and it will push that id into cart = []*/
  function addToCart(id, qty = 1) {
    
    /* conditional */
    const itemFinder = cart.find(i => i.id === id)

    if (itemFinder) {
      console.log(`el producto con el id ${id}, ya esta`);
      /* esto va sumando al cart */
      itemFinder.qty += qty
    } else {
      console.log(`El producto con el id ${id} no esta.`);
      /* el push se agrega dentro del else para que ya no se agreguen */
      cart.push({ id, qty })
    }
    
    printCart()
  }
  addToCart(1)
  addToCart(2)
  addToCart(2)
  addToCart(2)

  /* remove items from  cart */
  function removeFromCart (id, qty = 1) {
    const itemFinder = cart.find(i => i.id === id)
    
    const result = itemFinder.qty - qty

    if (result > 0) {
      console.log(`quedan productos con el id ${id}`);
      itemFinder.qty -= qty
    } else {
      console.log(`No quedan productos con el id ${id}`);
      /* this way we can delete all articles from cart */
      cart = cart.filter(i => i.id != id)
    }
    printCart()
  }

  /* removeFromCart(2)
  removeFromCart(2)
  removeFromCart(2) */

  /* delete items from cart trash*/
  function deleteItemsFromCart (id) {
    cart = cart.filter(i => i.id === id)
    console.log(`se elimino el artiaculo con el id ${id}`);
  }
  /* deleteItemsFromCart(2) */

  /* shkow items countig */
  function showItemsCount() {
    /* counter */
    let suma = 0
    for (const item of cart) {
      suma += item.qty
    }
    return suma
  } 

  /* total items */
  function showTotal () {
    let total = 0
    for (const item of cart) {
      const productsFinder = db.find(p => p.id === item.id)
      total += item.qty * productsFinder.price
    }
    return total
  }

  /* checkout products */
  function checkout () {
    for (const item of cart) {
      const productsFinder = db.find(p => p.id === item.id)

      productsFinder.quantity -= item.qty
    }
    cart = []
    printCart()
    printProducts()
    window.alert('Gracias por tu compra')
  }

  checkout()
}

export default cart