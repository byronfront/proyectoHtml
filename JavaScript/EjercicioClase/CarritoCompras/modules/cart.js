import { productos, Producto } from './products.js';

const carrito = (function () {
  function agregarProducto(producto) {
    if (!(producto instanceof Producto)) return false;
    if (Number.isNaN(producto.precio) || producto.precio < 0) return false;
    productos.push(producto);
    return true;
  }

  function eliminarProducto(id) {
    const idx = productos.findIndex((p) => p.id === id);
    if (idx === -1) return false;
    productos.splice(idx, 1);
    return true;
  }

  function obtenerTotal() {
    return productos.reduce((sum, p) => sum + p.precio, 0);
  }

  function listarProductos() {
    return productos.map((p) => ({ ...p }));
  }

  return {
    agregarProducto,
    eliminarProducto,
    obtenerTotal,
    listarProductos,
  };
})();

export default carrito;
