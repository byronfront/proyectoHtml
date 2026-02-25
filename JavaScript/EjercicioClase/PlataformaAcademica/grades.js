export const calcularPromedio = (notas) => {
  if (notas.length === 0) {
    return "No hay notas";
  }
  const notasValidas = notas.every(
    (nota) => typeof nota === "number" && !Number.isNaN(nota)
  );
  if (!notasValidas) {
    return "Las notas deben ser números";
  }
  if (notas.some((nota) => nota > 5)) {
    return "Ninguna nota puede ser mayor que 5";
  }
  const promedio = notas.reduce((acc, nota) => acc + nota, 0);
  return promedio / notas.length;
};

// console.log(calcularPromedio([4.5, 2.8, 3.9, 4.8, 2.5]));
// console.log(calcularPromedio([]));
// console.log(calcularPromedio(['fsdahjkl', '1234567890', '1234567890']));