const pedido = {
  productos: ["Hamburguesa", "Papas"],
  metodoPago: "tarjeta",
};

const METODOS_PAGO_VALIDOS = ["tarjeta", "nequi", "efectivo"];

function validarPedido(pedido) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (pedido.productos && pedido.productos.length > 0) {
        resolve("Pedido válido");
      } else {
        reject(new Error("El pedido no tiene productos"));
      }
    }, 1000);
  });
}

function procesarPago(pedido) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (METODOS_PAGO_VALIDOS.includes(pedido.metodoPago)) {
        resolve("Pago aprobado");
      } else {
        reject(new Error(`Método de pago inválido: ${pedido.metodoPago}`));
      }
    }, 2000);
  });
}

function prepararEnvio() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Pedido enviado correctamente");
    }, 1500);
  });
}

async function ejecutarPedido(pedido) {
  try {
    console.log("Validando pedido...");
    await validarPedido(pedido);
    console.log("Pedido válido");

    console.log("Procesando pago...");
    await procesarPago(pedido);
    console.log("Pago aprobado");

    console.log("Preparando envío...");
    await prepararEnvio();
    console.log("Pedido enviado correctamente");
  } catch (error) {
    console.error("Error:", error.message);
  }
}

// Pedido exitoso
ejecutarPedido(pedido);

// Pedido sin productos
// ejecutarPedido({ productos: [], metodoPago: "tarjeta" });

// Método de pago inválido
// ejecutarPedido({ productos: ["Pizza"], metodoPago: "especie" });

// Reto opcional: dos pedidos al mismo tiempo con Promise.all
async function ejecutarDosPedidos() {
  const pedido1 = { productos: ["Hamburguesa", "Papas"], metodoPago: "tarjeta" };
  const pedido2 = { productos: ["Pizza", "Refresco"], metodoPago: "nequi" };

  console.log("\n--- Ejecutando dos pedidos en paralelo ---\n");

  try {
    await Promise.all([ejecutarPedido(pedido1), ejecutarPedido(pedido2)]);
    console.log("\nAmbos pedidos finalizados.");
  } catch (error) {
    console.error("Al menos un pedido falló:", error.message);
  }
}

// ejecutarDosPedidos();
