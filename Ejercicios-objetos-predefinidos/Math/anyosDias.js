alert("Introduce el número de años para convertirlos en días");
let year = prompt();
let days = calgAge(year);
alert(days);

function calgAge(years) {
  return years * 365;
}
