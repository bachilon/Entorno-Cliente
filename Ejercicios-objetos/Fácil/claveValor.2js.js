let objeto = { nombre: "Carlos", apellido: "Garcia" };
var array = new Array(2);
array[0] = new Array(2);
array[1] = new Array(2);
var contador = 0;

for (var i = 0; i < array.length; i++) {
  if (contador == 0) {
    array[i] = Object.keys(objeto);
    contador++;
  } else {
    array[i] = Object.values(objeto);
  }
}
console.log(array);
