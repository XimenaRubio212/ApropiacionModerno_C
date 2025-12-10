const { analizarVentas } = require("./EJE6.js");

console.log("Ejecutando Ejercicio 6: Destructuración profunda en ventas\n");

const ventas = [
  { producto: "teclado", detalles: { precio: 50, unidades: 3 } },
  { producto: "mouse", detalles: { precio: 20, unidades: 5 } }
];

const total = analizarVentas(ventas);

console.log("\n--- Intentando con arreglo vacío ---");
analizarVentas([]);

console.log("\nEjercicio 6 finalizado.");