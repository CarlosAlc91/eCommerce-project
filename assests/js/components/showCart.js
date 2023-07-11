
/* in each event we're gonna have an object called event which represents the object's event */
/* once we have such event, we're gonna create a condition */
/* it allows to listen the click event and it will open its nav menu */

function showCart() {
  /* selecting .btn--cart */
  const btnCart = document.querySelector('.btn--cart')
  /* selecting .cart */
  const cart = document.querySelector('.cart')

  /* adding an event listener */
  btnCart.addEventListener('click', function () {
    cart.classList.toggle('show--cart')
  })


  cart.addEventListener('click', function (e) {

    /* closing button */
    /* if (evet.target => element on we're clicking on.closest => finds the class ('.btn--close')) */

    if (e.target.closest('.btn--close')) {
      /* this. inside its classList. will remove('show--menu')*/
      cart.classList.remove('show--cart')
    }

  })

}

export default showCart






