import * as analytics from './analytics.js';
import { calcularRuta, mejorRutaActiva } from './optimizer.js';
import { routes } from './routes.js';

console.log('=== Logística: resumen ===\n');
console.log('Total rutas:', routes.length);
console.log('Activas:', analytics.rutasActivas().length);
console.log('Inactivas:', analytics.rutasInactivas().length);
console.log('Rutas por tráfico:', analytics.resumenPorTrafico());
console.log(
  'Distancia total (activas):',
  analytics.distanciaTotalActiva(),
  'km'
);
console.log(
  'Promedio distancia (activas):',
  analytics.promedioDistanciaActiva().toFixed(1),
  'km'
);
console.log(
  'Promedio costo/km (activas):',
  analytics.promedioCostoPorKmActiva().toFixed(2)
);

async function demo() {
  console.log('\n=== Costos simulados ===\n');
  const ejemplo = await calcularRuta(150, 12, 'medio');
  console.log('Ejemplo 150 km, 12/km, tráfico medio:', ejemplo);

  const mejor = await mejorRutaActiva();
  if (mejor) {
    console.log(
      '\nMejor ruta activa (menor costo estimado): id',
      mejor.ruta.id,
      '→ costo:',
      mejor.costo
    );
  }
}

demo().catch(console.error);
