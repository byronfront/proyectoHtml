import carrito from './modules/cart.js';
import { Producto } from './modules/products.js';
import calcularImpuesto from './modules/tax.js';

console.log('=== Carrito de compras ===\n');

carrito.agregarProducto(new Producto(1, 'Laptop', 1200));
carrito.agregarProducto(new Producto(2, 'Mouse', 25.5));
carrito.agregarProducto(new Producto(3, 'Teclado mecánico', 89.99));

console.log('Productos:', carrito.listarProductos());

const subtotal = carrito.obtenerTotal();
const iva = calcularImpuesto();
console.log('\nSubtotal:', subtotal.toFixed(2));
console.log('IVA 19%:', iva.toFixed(2));
console.log('Total:', (subtotal + iva).toFixed(2));

carrito.eliminarProducto(2);
console.log('\nTras eliminar id 2:', carrito.listarProductos());
console.log('Nuevo subtotal:', carrito.obtenerTotal().toFixed(2));
