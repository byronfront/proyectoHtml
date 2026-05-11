import { routes } from './routes.js';

/**
 * Costo asincrónico según distancia, tarifa y nivel de tráfico.
 * @param {number} distancia
 * @param {number} costoPorKm
 * @param {string} nivelTrafico - "bajo" | "medio" | "alto"
 * @param {number} [penalizacion=10]
 */
export async function calcularRuta(
  distancia,
  costoPorKm,
  nivelTrafico,
  penalizacion = 10
) {
  const costoBase = distancia * costoPorKm;
  let costoTotal;
  if (nivelTrafico === 'alto') {
    costoTotal = costoBase + penalizacion;
  } else if (nivelTrafico === 'medio') {
    costoTotal = costoBase + penalizacion / 2;
  } else {
    costoTotal = costoBase + penalizacion / 4;
  }
  return new Promise((resolve) => {
    setTimeout(() => resolve(costoTotal), 500);
  });
}

/**
 * @param {import('./routes.js').Ruta} ruta
 */
export async function calcularCostoRuta(ruta, penalizacion = 10) {
  if (!ruta.activa) {
    return null;
  }
  return calcularRuta(ruta.distancia, ruta.costoPorKm, ruta.trafico, penalizacion);
}

/** Devuelve la ruta activa con menor costo estimado (evalúa en paralelo). */
export async function mejorRutaActiva(penalizacion = 10) {
  const activas = routes.filter((r) => r.activa);
  const costos = await Promise.all(
    activas.map(async (r) => ({
      ruta: r,
      costo: await calcularCostoRuta(r, penalizacion),
    }))
  );
  const validos = costos.filter((c) => c.costo !== null);
  if (validos.length === 0) return null;
  return validos.reduce((mejor, actual) =>
    actual.costo < mejor.costo ? actual : mejor
  );
}
