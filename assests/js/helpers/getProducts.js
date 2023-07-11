/* asynchronous request */
/* we're using promises */

async function getProducts() {
  /* regular way to information with .then and .catch using promises */
 /*  return window.fetch('https://ecommercebackend.fundamentos-29.repl.co/')
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => { console.log(err) }) */

  /* for this second way, we need to use async */
  /* and use try and catch for errors */
  
  try {
    const res = await window.fetch('https://ecommercebackend.fundamentos-29.repl.co/')

    /* we get a second promise, we have to convert it so js can read it */
    const data = await res.json()
    return data

  } catch (error) {
    console.log(error);
  }

}

export default getProducts