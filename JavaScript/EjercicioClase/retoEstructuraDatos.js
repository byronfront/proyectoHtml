const estudiantes = [
    { id: 1, nombre: "Laura", nota: 4.5, activo: true },
    { id: 2, nombre: "Carlos", nota: 2.8, activo: false },
    { id: 3, nombre: "Sofía", nota: 3.9, activo: true },
    { id: 4, nombre: "Mateo", nota: 4.8, activo: true },
    { id: 5, nombre: "Valentina", nota: 2.5, activo: false }
  ];

  const estudiantesActivos = estudiantes.filter(act => act.activo)

  console.log('Estudiantes activos: ', estudiantesActivos)

  const nombreEstActivos = estudiantes
    .filter(est => est.activo)
    .map((est) => est.nombre)

  console.log('Nombre estudiantes activos: ', nombreEstActivos)

  const promedioEstudiantes = estudiantes.reduce((est, promedio) => est + promedio.nota / 5, 0)

  console.log('Promedio estudiantes: ', promedioEstudiantes)

  const estudiantesAprobados = estudiantes.every(est => est.nota >= 3.0)

  console.log(estudiantesAprobados ? 'Todos los estudiantes aprobaron' : 'No todos los estudiantes aprobaron')

  const mejorNota = estudiantes.find(est => est.nota >= 4.7)

  console.log('Mejor estudiante: ', mejorNota)

  const estadoEstudiante = estudiantes.map((est) => ({
    ...est,
    aprobado: est.nota >= 3.0,
  }))

  console.log('Estado del estudiante: ', estadoEstudiante)