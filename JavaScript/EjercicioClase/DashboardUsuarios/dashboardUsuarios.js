import { usersInfo, purchaseHistory, userConfiguration } from './usersInfo.js';

function obtenerDatosPersonales(callback) {
    setTimeout(() => {
        callback(usersInfo);
    }, 1000);
}

function obtenerHistorialCompras(callback) {
    setTimeout(() => {
        callback(purchaseHistory);
    }, 1000);
}

function obtenerConfiguracion(callback) {
    setTimeout(() => {
        callback(userConfiguration);
    }, 1000);
}

obtenerDatosPersonales((datosPersonales) => {
    console.log('Datos personales:', datosPersonales.length, 'usuarios');
    obtenerHistorialCompras((historialCompras) => {
        console.log('Historial de compras:', historialCompras.length, 'compras');
        obtenerConfiguracion((configuracion) => {
            console.log('Configuración:', configuracion.length, 'configuraciones');
            console.log('--------------------------------');
        });
    });
});