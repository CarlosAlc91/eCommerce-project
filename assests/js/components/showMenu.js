/* in each event we're gonna have an object called event which represents the object's event */
  /* once we have such event, we're gonna create a condition */
  /* it allows to listen the click event and it will open its nav menu */

function showMenu() {
  /* selecting nav */
  const nav = document.querySelector('.nav')
  /* selecting .nav__menu */
  const menu = document.querySelector('.nav__menu')

  /* adding an event listenet */
  nav.addEventListener('click', function (e) {
    /* if(event.target => object is the element which we're clicking on.closest => searching method that allows to search for a class not only in the event(e) but in the full class) */
    if (e.target.closest('.btn--menu')) {
      /* if true => menu in its.classList.will add toogle => open/close and inside imma add a class('show--menu') this class is in CSS*/
      menu.classList.toggle('show--menu')
    }

    /* closing button */
    /* if (evet.target => element on we're clicking on.closest => finds the class ('.btn--close')) */
    
    if (e.target.closest('.btn--close')) {
      /* menu. inside its classList. will remove('show--menu')*/
      menu.classList.remove('show--menu')
    }

    /* closing cart clicking on start */
    if (e.target.closest('.nav__link')) {
      /* menu. inside its classList. will remove('show--menu')*/
      menu.classList.remove('show--menu')
    }
  })

}

export default showMenu