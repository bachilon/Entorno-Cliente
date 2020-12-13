alert("Introduce la altura");
let altura = prompt();
alert("Introduce el radio");
let radio = prompt();
let volumen = coneVolume(altura, radio);
alert(volumen);

function coneVolume(h, r) {
  return (Math.PI * (r * r) * h) / 3;
}
