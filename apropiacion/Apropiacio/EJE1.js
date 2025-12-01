export const procesarPedido = (pedido, ...extras) => {
  // Destructuración del objeto pedido
  const { cliente, producto, cantidad } = pedido;

  //va a retornar los argumentos
  return {
    cliente,
    producto,
    cantidad,
    extras
  }
}

// const pedido = { cliente: "darcy", producto: "portatil", cantidad: 1 };
// const resultado = procesarPedido(pedido, "Seguro extendido", "Factura digital", "Envío express");
//se muestra el mensaje 
// console.log(resultado);