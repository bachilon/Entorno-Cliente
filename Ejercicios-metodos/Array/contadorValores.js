function contadorValores(array_booleans) {
  document.write(`<br>`);

  let veces_repetidas = array_booleans.filter((bolean) => bolean == true).length; 

  if (array_booleans.length > 0) {
    document.write(`Hay ${veces_repetidas} trues.`);
  } else {
    document.write(`Hay 0 trues.`);
  }

  document.write(`<br>`);
}