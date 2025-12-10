const { configurarUsuario } = require("./EJE4.js");

console.log("Ejecutando Ejercicio 4: Fusión de configuraciones\n");

const defaults = { tema: "claro", idioma: "es" };
const personalizadas = { tema: "oscuro" };

const idioma = configurarUsuario(defaults, personalizadas);
console.log("Idioma resultante:", idioma);

console.log("Ejercicio 4 finalizado.");