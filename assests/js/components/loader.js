/* script for loader effect */
/* this function removes the loader when the page loads completely */
/* event creation */
/* load waits until the tree is fully created and resources are fully loaded */
/* 'load' hasa to be added at window object */
/* The classList.add() method should be used without the dot (.) before the class name. */

function loader () {
  window.addEventListener('load', function () {
    /* create a variable called loader = inside the html document.you're gonna select the class loader querySelector('.loader') */
    const loader = document.querySelector('.loader')
    /* inside loader.classList.your gonna add(the class 'loader--hidden') */
    loader.classList.add('loader--hidden')
  })
}

/* 
*exporting module to main.js
*this is like console.log()
*/
export default loader