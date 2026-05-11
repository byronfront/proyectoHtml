/**
 * @typedef {Object} Ruta
 * @property {number} id
 * @property {number} distancia
 * @property {string} trafico - "bajo" | "medio" | "alto"
 * @property {number} costoPorKm
 * @property {boolean} activa
 */
export const routes = [
    {
        id: 1,
        distancia: 100,
        trafico: 'bajo',
        costoPorKm: 10,
        activa: true
    },
    {
        id: 2,
        distancia: 200,
        trafico: 'medio',
        costoPorKm: 15,
        activa: true
    },
    {
        id: 3,
        distancia: 300,
        trafico: 'alto',
        costoPorKm: 20,
        activa: true
    },
    {
        id: 4,
        distancia: 400,
        trafico: 'bajo',
        costoPorKm: 10,
        activa: false
    },
    {
        id: 5,
        distancia: 500,
        trafico: 'medio',
        costoPorKm: 15,
        activa: false
    },
    {
        id: 6,
        distancia: 600,
        trafico: 'alto',
        costoPorKm: 20,
        activa: true
    },
    {
        id: 7,
        distancia: 700,
        trafico: 'bajo',
        costoPorKm: 10,
        activa: true
    },
    {
        id: 8,
        distancia: 800,
        trafico: 'medio',
        costoPorKm: 15,
        activa: true
    },
    {
        id: 9,
        distancia: 900,
        trafico: 'alto',
        costoPorKm: 20,
        activa: true
    },
    {
        id: 10,
        distancia: 1000,
        trafico: 'bajo',
        costoPorKm: 10,
        activa: false
    }
]