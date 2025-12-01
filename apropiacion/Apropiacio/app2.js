// Importamos la función para agregar al inventario desde un módulo externo (EJE2.js)
const { agregarInventario } = require("./EJE2.js");
// Importamos la librería para solicitar entrada del usuario por consola
const prompt = require("prompt-sync")();
// Arreglo inicial del inventario (se considera inmutable para este ejercicio)
const inventario = ["cámara", "trípode", "micrófono"];
// Solicitamos al usuario el nuevo ítem a agregar
const nuevoItem = prompt("Ingrese el nuevo ítem para el inventario: ");
// Procesamos el inventario: llamamos a la función para crear un nuevo arreglo
// sin mutar el 'inventario' original (principio de inmutabilidad)
const inventarioActualizado = agregarInventario(inventario, nuevoItem);
// Mostramos el inventario original para verificar que NO haya sido modificado
console.log("\nInventario original (sin cambios):");
console.log(inventario);
// Mostramos el nuevo inventario que contiene el ítem agregado
console.log("\nInventario actualizado:");
console.log(inventarioActualizado);