function formatoFecha(date) {
    let datee = date.split("/");
    let datereverse = datee[2] + "" + datee[1] + "" + datee[0];
    console.log(datereverse);
  }
  
  formatoFecha("1/15/2019");
  