const {procesarPedido} = require("./EJE1.js");

const prompt = require("prompt-sync")();

const pedido = {
    cliente: "darcy",
    producto: "portatil",
    cantidad: 2,
}

const extra1 = prompt("Ingrese extra 1: ");
const extra2 = prompt("Ingrese extra 2: ");
const extra3 = prompt("Ingrese extra 3: ");

const resultado = procesarPedido(pedido, extra1, extra2, extra3);
console.log(resultado);