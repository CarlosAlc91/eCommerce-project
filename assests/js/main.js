/* 
*importing modules:
*/
import loader from "./components/loader.js"
import showMenu from "./components/showMenu.js"
import showCart from "./components/showCart.js"
import products from "./components/products.js"
import getProducts from "./helpers/getProducts.js"

/*
* UI ELEMENTS 
*/

//hiding loader
loader()
//show menu
showMenu()
//showCart
showCart()
/*
* END UI ELEMENTS 
*/


/*
* PRODUCTS 
*/
/* await => top level await */
products(await getProducts())
