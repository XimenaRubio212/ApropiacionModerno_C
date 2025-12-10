const analizarVentas = (ventas) => {
  try {
    const {
      detalles: { precio, unidades }
    } = ventas[0];
    const total = precio * unidades;
    console.log(`Total del primer producto (${ventas[0].producto}): $${precio} × ${unidades} = $${total}`);
    return total;
  } catch (error) {
    console.error("Error en análisis de ventas:", error.message);
    return 0;
  }
};

module.exports = { analizarVentas };