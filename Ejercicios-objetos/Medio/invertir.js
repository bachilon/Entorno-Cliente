let objeto = {
    nombre: "Carlos",
    apellido: "Garcia",
    apellido2: "Acevedo",
    modalidad: "DAW"
  };
  var newObject = {};
  invertir();
  console.log(newObject);
  
  function invertir() {
    var array = Object.entries(objeto);
    console.log(array[0].length);
    for (var i = 0; i < array.length; i++) {
      array[i] = array[i].reverse();
    }
  
    newObject = Object.fromEntries(array);
  }
  