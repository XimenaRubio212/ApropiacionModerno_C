const registrarActividad = (actividad) => {
  try {
    const { nombre, fecha } = actividad;
    if (nombre === undefined || fecha === undefined) {
      new Error("La actividad no es válida: debe contener 'nombre' y 'fecha'.");
    }
    console.log(`Actividad registrada: "${nombre}" programada para ${fecha}.`);
    return true;
  } catch (error) {
    console.error("Error al registrar actividad:", error.message);
    return false;
  }
};

module.exports = { registrarActividad };