let nombreDeUsuario, edadDeUsuario, tipoDeMembresia = 'Basic' || 'Premium' || 'VIP';

const membresiaVerificacion = (edadDeUsuario, tipoDeMembresia) => {
    console.log(`Nombre del usuario: ${nombreDeUsuario}`);
    console.log(`Edad del usuario: ${edadDeUsuario}`);
    if (edadDeUsuario < 33) {
        console.log("Usted es menor de edad y no puede acceder a la membresia");
    } else {
        switch (tipoDeMembresia) {
            case 'Basic':
                console.log(`Su membresia es: ${tipoDeMembresia}`);
                console.log("Acceso a la sala de espera");
                break;
            case 'Premium':
                console.log(`Su membresia es: ${tipoDeMembresia}`);
                console.log("Acceso a la sala de espera y a la sala de cine");
                break;
            case 'VIP':
                console.log(`Su membresia es: ${tipoDeMembresia}`);
                console.log("Acceso a la sala de espera, a la sala de cine y a la sala de juegos");
                break;
        }
    }
    console.log("--------------------------------");

}

nombreDeUsuario = 'Byron';
edadDeUsuario = 34;
tipoDeMembresia = 'Premium';

membresiaVerificacion(edadDeUsuario, tipoDeMembresia);

nombreDeUsuario = 'Pippin';
edadDeUsuario = 32;
tipoDeMembresia = 'Basic';

membresiaVerificacion(edadDeUsuario, tipoDeMembresia);

nombreDeUsuario = 'Aragorn';
edadDeUsuario = 87;
tipoDeMembresia = 'VIP';

membresiaVerificacion(edadDeUsuario, tipoDeMembresia);

nombreDeUsuario = 'Frodo';
edadDeUsuario = 2000;
tipoDeMembresia = 'VIP';

membresiaVerificacion(edadDeUsuario, tipoDeMembresia);

nombreDeUsuario = 'Samwise Gamgee';
edadDeUsuario = 101;
tipoDeMembresia = 'Premium';

membresiaVerificacion(edadDeUsuario, tipoDeMembresia);
