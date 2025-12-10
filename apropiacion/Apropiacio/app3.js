const { registrarActividad } = require("./EJE3.js");

console.log("Ejecutando Ejercicio 3: Registro de actividades con validación\n");

registrarActividad({ nombre: "Revisión de equipo", fecha: "2025-12-10" });

registrarActividad({ nombre: "Solo nombre" });

registrarActividad({});

console.log("Ejercicio 3 finalizado.");