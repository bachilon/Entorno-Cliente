let notas = { nombre: "Carlos", notas: [6, 7, 8, 9, 10] };
notaAlta();
console.log(notas);

function notaAlta() {
  var array = Object.entries(notas);
  var notes = array[1][1];
  var guardado = 0;
  for (var i = 0; i < notes.length; i++) {
    if (notes[i] > guardado) {
      guardado = notes[i];
    }
  }
  delete notas.notas;
  notas.topNota = guardado;
}
