/* we're importing the database previously created in products*/

function cart(db, printProducts) {
  /* adding products to cart */
  /* creating an object to have product's id and quantity */
  let cart = []

  /* DOM ELEMENTS */
  /* products container contains all products */
  const productsDOM = document.querySelector('.products__container')

  /* notification button */
  const notifyDOM = document.querySelector('.notify')

  /* CART BODY */
  const cartDOM = document.querySelector('.cart__body')

  /* CART COUNTING */
  const countDOM = document.querySelector('.cart__count--item')

  /* TOTAL */
  const totalDOM = document.querySelector('.cart__total--item')

  /* CHECKOUT BUTTON */
  const checkoutDOM = document.querySelector('.btn--buy')
  /* FUNCTIONS */


  /* this function will paint all elements into the cart */
  function printCart() {
    let htmlCart = ''

    if (cart.length === 0) {
      /* if true => cart is empty */
      /* when cart is empty */
      /* notifyDOM.in your classList.you're gonna remove('show--notify class') */
      htmlCart += `
      <div class="cart__empty">
        <i class='bx bx-cart'></i>
        <p class="cart__empty--text">Empty cart</p>
      </div>
      `
      notifyDOM.classList.remove('show--notify')
    } else {
      /* false => when cart has products added, we're gonna be able to show the notification */
      /* notifyDOM.in your classList.you're gonna add('show--notify class') */
      for (const item of cart) {
        /* product search in the db.and find (product => in its property.id is equals === to item.id) */
        const product = db.find(p => p.id === item.id)
        htmlCart += `
        <article class="article">
            <div class="article__image">
              <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="article__content">
             <h3 class="article__title">${product.name}</h3>
             <span class="article__price">$${product.price}</span>
             <div class="article__quantity">
              <button type="button" class="article__quantity-btn article--minus" data-id="${item.id}">
                <i class='bx bx-minus'></i>
              </button>
              <span class="article__quantity-text">${item.qty}</span>
              <button type="button" class="article__quantity-btn article--plus" data-id="${item.id}">
                <i class='bx bx-plus'></i>
              </button>
             </div>
             <button class="article__btn remove-from-cart" data-id="${item.id}">
              <i class='bx bx-trash-alt'></i>
             </button>
            </div>
          </article>
        `
      }
      notifyDOM.classList.add('show--notify')
    }
    /* cartDOM.innerHTML will get filled htmlCart */
    cartDOM.innerHTML = htmlCart
    notifyDOM.innerHTML = showItemsCount()
    /* this will show how many articles we have aunder 'articles' */
    countDOM.innerHTML = showItemsCount()
    /* shows total of added products */
    totalDOM.innerHTML = showTotal()
  }

  /* function to detect when a pruduct is added to cart when we click on cart button, it will return product's id and it will push that id into cart = []*/
  function addToCart(id, qty = 1) {
    
    /* conditional */
    const itemFinder = cart.find(i => i.id === id)

    if (itemFinder) {
      /* esto va sumando al cart */
      itemFinder.qty += qty
    } else {
      /* el push se agrega dentro del else para que ya no se agreguen */
      cart.push({ id, qty })
    }
    
    printCart()
  }
  

  /* remove items from  cart */
  function removeFromCart (id, qty = 1) {
    const itemFinder = cart.find(i => i.id === id)
    
    const result = itemFinder.qty - qty

    if (result > 0) {
     
      itemFinder.qty -= qty
    } else {
      
      /* this way we can delete all articles from cart */
      cart = cart.filter(i => i.id !== id)
    }
    printCart()
  }

  

  /* delete items from cart trash*/
  function deleteItemsFromCart (id) {
    cart = cart.filter(i => i.id !== id)
    printCart()
  }


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

  printCart()

  /* EVENTS AND LISTENERS */

  /* when productsDOM.listens(a click, imma handle you a handler) */
  productsDOM.addEventListener('click', function (e) {
    
    /* closest => when clicking on a button it'll ask if it or its father has a class */
    /* if (event.targets.which generates the click()) */
    if (e.target.closest('.add--to--cart')) {
      /* if true => we need to get the id's button */
      const id = +e.target.closest('.add--to--cart').dataset.id
      /* everything brought from attributes are strings */
      /* we need to use the unary convertion to it converts to number => +e.target */
      addToCart(id)
    }
  })

  /* minus, add and trash icons */
  cartDOM.addEventListener('click', function (e) {

    /* reduce - */
    if (e.target.closest('.article--minus')) {
      /* if we click on the minus icon => it removes articles */
      const id = +e.target.closest('.article--minus').dataset.id
      removeFromCart(id)
    }

    /* add + */
    if (e.target.closest('.article--plus')) {
      const id = +e.target.closest('.article--plus').dataset.id
      addToCart(id)
    }

    /* delete trash icon */
    if (e.target.closest('.remove-from-cart')) {
      const id = +e.target.closest('.remove-from-cart').dataset.id
      deleteItemsFromCart(id)
    }
  })

  /* CHECKOUT */
  checkoutDOM.addEventListener('click', function (e) {
    if (e.target.closest('.btn--buy')) {
      const id = +e.target.closest('.btn--buy').dataset.id
      checkout(id)
    }
  })
}

export default cart