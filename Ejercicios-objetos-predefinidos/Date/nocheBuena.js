function nocheBuena(date) {
    if (date.getMonth() == 11 && date.getDate() == 24) {
      alert("Es nochebuena!");
    } else {
      alert("F no es nochebuena");
    }
  }
  
  nocheBuena(new Date(2013, 0, 23));
  