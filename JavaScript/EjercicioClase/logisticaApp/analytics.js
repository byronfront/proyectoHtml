import { routes } from './routes.js';

export function rutasActivas() {
  return routes.filter((r) => r.activa);
}

export function rutasInactivas() {
  return routes.filter((r) => !r.activa);
}

/** Conteo de rutas por nivel de tráfico (todas las rutas). */
export function resumenPorTrafico() {
  return routes.reduce(
    (acc, r) => {
      const key = r.trafico;
      if (acc[key] !== undefined) acc[key] += 1;
      return acc;
    },
    { bajo: 0, medio: 0, alto: 0 }
  );
}

export function distanciaTotalActiva() {
  return rutasActivas().reduce((sum, r) => sum + r.distancia, 0);
}

export function promedioCostoPorKmActiva() {
  const activas = rutasActivas();
  if (activas.length === 0) return 0;
  const suma = activas.reduce((acc, r) => acc + r.costoPorKm, 0);
  return suma / activas.length;
}

export function promedioDistanciaActiva() {
  const activas = rutasActivas();
  if (activas.length === 0) return 0;
  return distanciaTotalActiva() / activas.length;
}
