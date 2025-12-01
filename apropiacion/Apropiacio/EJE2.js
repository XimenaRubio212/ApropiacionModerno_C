// Función para agregar un nuevo ítem a una lista de inventario de forma inmutable.
const agregarInventario = (lista, nuevoItem) => {
// Inmutabilidad: creamos una **copia** de 'lista' usando el operador spread (...)
// y agregamos el 'nuevoItem' al final. La lista original ('lista') no se modifica.
const nuevaLista = [...lista, nuevoItem]; 
// Mensaje de consola indicando el tamaño del nuevo inventario
console.log(`El inventario ahora tiene ${nuevaLista.length} ítems.`); 
// Retornamos la nueva lista creada.
return nuevaLista;
};
// Exportamos la función para que pueda ser utilizada por otros módulos (CommonJS)
module.exports = { agregarInventario };