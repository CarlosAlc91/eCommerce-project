/* detectar el click del boton para cambiar a dark mode */
/* 
 TODO => EL DARK MODE CONSISTE SOLAMENTE EN LA CLASE DARK
* 1. crear clase al body para dark mode
* 2. dar estilos a los puntos pricipales con la clase dark
* 3. remover la clase dark del body
* 4. boton para escuchar el evento click y poder prender o apagar el evento
* 5. buscar el boton por id o class en main.js
* 6. PREGUNTAR SO EL LOCAL STORAGE TIENE LA CLASE 
* 6. agregar un eventListener al boton btn.addEventListener
* 7. seleccionar a body dentro del documento
* 8. exportar por default la funcion
* 9. importar la funcion darkMode a main.js
* 10. ejecutar la funcion en main.js
* 11. persistencia local => local storage
*/

/* LOCAL STORAGE */
/* guardar informacion en el localStorage sobre el dark mode, para llamarlo, comprobar que el usuario le a dado click al dark mode y lo conserve incluso que reinciemos la pagina */
const ls = window.localStorage

/* informacion que va a sser guardada */
/* const str = 'string' */

/* agregar informacion al localStorage */
/* setItem('clave o key', valor o value => que vamos a guardar) */
/* ls.setItem('str', str) */

/* obtener informacion */
/* getItem('clave o key') */
/* const res = ls.getItem('str')
console.log(res); */

/* eliminar informacion */
/* removeItem('clave o key') */
/* ls.removeItem('str') */


function darkMode() {
  /* PASO 5 */
  /* = quiero que dentro del document.busques el elemento por id getElementById('btn')*/
  const btn = document.querySelector('.btn--dark')

  /* PREGUNTAR SI EL LOCALSTORAGE TIENE EL ITEM THEME */
  /* con essta condicional, dark mode queda activado incluso que reinicen la pagina */
  /* quiero hacer una consulata al localStorage y si el valor theme es igual que dark agregalo, de lo contrario eliminalo */
  if (ls.getItem('theme') === 'dark') {
    document.body.classList.add('dark')
  } else {
    document.body.classList.remove('dark')
  }

  /* PASO 6 */
  /* quiero que al boton btn.le agregues un escuchador addEventListener('click', arrow function () => {})*/
  btn.addEventListener('click', () => {
    /* PASO 7 */
    /* quiero acceder a tu lista de clases con el metodo toggle que quita o agrega clases, con la clase 'dark' */
    document.body.classList.toggle('dark')

    /* preguntar si el body tiene la clase dark */
    /* si dentro del documento el body en su lista de clases contiene la clase ('dark') */
    if (document.body.classList.contains('dark')) {
      /* si es vserdadera => agregala o guardalo al localStorage ls */
      /* setItem('clave theme', valor true) */
      ls.setItem('theme', 'dark')
    } else {
      /* si es falso eliminalo del localStorage*/
      /* removeItem('clave theme') */
      ls.removeItem('theme')
    }
  })
}

export default darkMode