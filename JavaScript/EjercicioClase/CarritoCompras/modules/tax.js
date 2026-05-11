import { productos } from './products.js';

const calcularImpuesto = (tasa = 0.19) =>
  productos.reduce((imp, producto) => imp + producto.precio * tasa, 0);

export default calcularImpuesto;
