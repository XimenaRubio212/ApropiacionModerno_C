const { fusionarColecciones } = require("./EJE8.js");

console.log("Ejecutando Ejercicio 8: Fusión segura de colecciones\n");

try {
  fusionarColecciones([1, 2], [3, 4]);
  fusionarColecciones([], ["a", "b"]);
  fusionarColecciones("no array", [1]);
} catch (e) {
  console.log("Error capturado correctamente.");
}

try {
  fusionarColecciones([1], null);
} catch (e) {
  console.log("Error capturado correctamente.");
}

console.log("Ejercicio 8 finalizado.");