function extraerDia(fecha) {
    let result = new Date(fecha);
    let dias = new Array(
      "Lunes",
      "Martes",
      "Miércoles",
      "Jueves",
      "Viernes",
      "Sábado",
      "Domingo"
    );
    return dias[result.getDay()];
  }
  const fecha = "12/08/2011";
  document.write(`${extraerDia(fecha)}`);
  