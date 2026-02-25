function crearCalculadorDescuento(descuento) {
  // let descuento = descuentoNuevo;
  return function (precio) {
    let descuentoAplicado = precio * (descuento / 100);
    console.log(`El precio con descuento es: ${precio - descuentoAplicado}`);
  }
};

const productoFinal = (producto, valor, callback) => {
  console.log(`Producto: ${producto}`);
  console.log(`Precio: ${valor}`);
  callback(valor);
  console.log("--------------------------------");
}

productoFinal('Hamburguesa', 10000, crearCalculadorDescuento(10));
productoFinal('Hamburguesa', 10000, crearCalculadorDescuento(20));
productoFinal('Hamburguesa', 10000, crearCalculadorDescuento(50));