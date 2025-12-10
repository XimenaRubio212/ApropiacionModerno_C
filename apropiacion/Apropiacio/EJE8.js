const fusionarColecciones = (lista1, lista2) => {
  try {
    if (!Array.isArray(lista1)) throw new Error("lista1 debe ser un arreglo");
    if (!Array.isArray(lista2)) throw new Error("lista2 debe ser un arreglo");
    const fusion = [...lista1, ...lista2];
    console.log(`Fusión exitosa: ${lista1.length} + ${lista2.length} = ${fusion.length} elementos`);
    return fusion;
  } catch (error) {
    console.error("Error:", error.message);
    throw error;
  }
};

module.exports = { fusionarColecciones };