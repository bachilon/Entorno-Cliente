function busque_siete(array_num) {
    document.write(`<br>`);
    if (array_num.indexOf(7) == -1) {
      //Si el 7 no esta en el array el numero que dará será -1 y nos imprime lo siguiente:
      document.write("No hay 7 en el array.");
    } else {
      //Lo ha encontrado
      document.write("Boom!");
    }
    document.write(`<br>`);
  }
  