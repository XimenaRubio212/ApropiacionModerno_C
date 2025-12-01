function procesarPedido(pedido, ...extras) {
  // Destructuración del objeto pedido
  const { cliente, producto, cantidad } = pedido;

  // Consolidar toda la información en un nuevo objeto
  return {
    cliente,
    producto,
    cantidad,
    extras  // array con todos los argumentos adicionales
  };
}

const pedido = { cliente: "darcy", producto: "portatil", cantidad: 1 };
const resultado = procesarPedido(pedido, "Seguro extendido", "Factura digital", "Envío express");

console.log(resultado);