var notas = { bien: 7, mal: 3 };
var notaFinal = resta(notas);
console.log(notaFinal);

function resta(notes) {
  var note = notes.bien - notes.mal;
  return note;
}
