const { actualizarPerfil } = require("./EJE5.js");

console.log("Ejecutando Ejercicio 5: Actualización de perfil con rest\n");

const perfil = { nombre: "Carla", edad: 25, ciudad: "Barranquilla" };
const actualizado = actualizarPerfil(perfil, { edad: 26 }, { ciudad: "Cartagena" }, { rol: "admin" });

console.log("Perfil original:", perfil);
console.log("Nuevo perfil:", actualizado);

console.log("Ejercicio 5 finalizado.");
