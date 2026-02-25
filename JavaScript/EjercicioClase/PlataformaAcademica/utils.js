export const convertirAMayusculas = (nombre) => {
    if (typeof nombre === "number") {
      return "El nombre no puede ser un número";
    } else if (typeof nombre === "string" && nombre.length > 0) {
        if (!Number.isNaN(Number(nombre))) {
          return "El nombre no puede ser un número";
      }
      return nombre.toUpperCase();
    } else {
      return "No hay nombre";
    }
  };
  
  // console.log(convertirAMayusculas("byron cardona ospina"));
  // console.log(convertirAMayusculas(1234567890));
  // console.log(convertirAMayusculas(""));
  // console.log(convertirAMayusculas("1234567890"));
  
  export const capitalizarNombre = (nombre) => {
      if (typeof nombre === "number") {
          return "El nombre no puede ser un número";
      } else if (typeof nombre === "string" && nombre.length > 0) {
        if (!Number.isNaN(Number(nombre))) {
            return 'El nombre no puede ser un número';
        }
        return nombre
        .split(' ')
        .map((palabra) => palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase())
        .join(' ');
    } else {
      return "No hay nombre";
    }
  };
  
  // console.log(capitalizarNombre("byron cardona ospina"));
  // console.log(capitalizarNombre(1234567890));
  // console.log(capitalizarNombre(""));
  // console.log(capitalizarNombre("1234567890"));
  