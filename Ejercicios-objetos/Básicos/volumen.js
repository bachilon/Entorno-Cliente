var dimensiones = { ancho: 2, largo: 3, alto: 2 };
var volumen = volumen(dimensiones);
console.log(volumen);

function volumen(dimensions) {
  var vol = dimensions.ancho * dimensions.largo * dimensions.alto;
  return vol;
}
