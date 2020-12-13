function letraN(word) {
    let reg = new RegExp("[n]$");
    let p = word.match(reg);
    if (p == null) {
      alert('La última letra no es "n"');
    } else {
      alert('La última letra es "n"');
    }
  }
  letraN("Aiden");
  