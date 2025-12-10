const { evaluar } = require("./EJE7.js");

console.log("Ejecutando Ejercicio 7: Evaluación numérica con validación\n");

evaluar(10, 20, 30);
evaluar(5, 10, 15, 20);
evaluar(); // vacío → 0
evaluar(3, "hola", 7); // error

console.log("Ejercicio 7 finalizado.");