/* console.log('funciona!') */

/* variables */
const listaNombresLinks = document.querySelector('#lista_links');
const listaActividades = document.getElementById('listaActividades')
let actividades = [];



/* funciones */
const CrearItem = (actividad) => {
    let item = {
        actividad:actividad,
        estado : false,
    } 
    arrayActividades.push(item);

}
/* eventListener */