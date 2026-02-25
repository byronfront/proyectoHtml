let nombre, edad, ciudad;

const edadVerificacion = (edad) => {
    console.log("Nombre: " + nombre);
    console.log("Edad: " + edad);
    console.log("Ciudad: " + ciudad);
    if (edad < 33) {
        console.log("Usted es menor de edad");
    } else if (edad >= 33 && edad <= 100) {
        console.log("Usted es mortal");
    } else if (edad > 100 && edad < 500) {
        console.log("Usted ha vivido mucho");
    } else {
        console.log("Usted es inmortal");
    }
    console.log("--------------------------------");
}

nombre = 'Byron';
edad = 34;
ciudad = 'Medellin';

edadVerificacion(edad);

nombre = 'Aragorn';
edad = 87;
ciudad = 'Minas Tirith';

edadVerificacion(edad);

nombre = 'Gandalf';
edad = 2000;
ciudad = 'Valinor';

edadVerificacion(edad);

nombre = 'Sauron';
edad = 10000;
ciudad = 'Mordor';

edadVerificacion(edad);

nombre = 'Frodo';
edad = 50;
ciudad = 'La Comarca';

edadVerificacion(edad);

nombre = 'Samwise Gamgee';
edad = 101;
ciudad = 'La Comarca';

edadVerificacion(edad);

nombre = 'Meriadoc Brandybuck';
edad = 32;
ciudad = 'La Comarca';

edadVerificacion(edad);

nombre = 'Peregrin Took';
edad = 30;
ciudad = 'La Comarca';

edadVerificacion(edad);

nombre = 'Boromir';
edad = 40;
ciudad = 'Minas Tirith';

edadVerificacion(edad);

nombre = 'Legolas';
edad = 1000;
ciudad = 'Erebor';

edadVerificacion(edad);