function remplazar(str, ch) {
    let reg = new RegExp(/[aeiou]/g);
    alert(str.replace(reg, ch));
  }
  
  remplazar("shakespeare", "*");
  