import { capitalizarNombre } from './utils.js';
import { calcularPromedio } from './grades.js';

function Student(nombre, notas) {
    this.nombre = capitalizarNombre(nombre);
    this.notas = calcularPromedio(notas);
    this.estado =
        typeof this.notas === 'number' && this.notas >= 3.0
            ? 'Aprobado'
            : typeof this.notas === 'number'
              ? 'Reprobado'
              : 'Sin evaluar';
    console.log("--------------------------------");
}

export default Student;

// const student1 = new Student('byron cardona ospina', [3.5, 4.5, 5.0, 4.0, 4.5]);
// console.log(student1);

// const student2 = new Student('laura morales', []);
// console.log(student2);

// const student3 = new Student('', [1.5, 2.5, 3.0, 4.0, 5.0]);
// console.log(student3);

// const student4 = new Student('sofia lopez', ['0.5', 1.5, 2.0, 3.0, 4.0]);
// console.log(student4);

// const student5 = new Student('1234565', [3.5, 4.5, 5.5, 6.5, 7.5]);
// console.log(student5);