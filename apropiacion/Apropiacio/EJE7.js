const evaluar = (...valores) => {
  try {
    for (const val of valores) {
      if (typeof val !== 'number' || isNaN(val)) {
        throw new Error(`Valor no numérico: ${val} (tipo: ${typeof val})`);
      }
    }
    const copia = [...valores];
    const promedio = copia.length ? copia.reduce((a, b) => a + b, 0) / copia.length : 0;
    console.log(`Promedio de [${copia}] = ${promedio.toFixed(2)}`);
    return promedio;
  } catch (error) {
    console.error("Evaluación fallida:", error.message);
    return null;
  }
};

module.exports = { evaluar };