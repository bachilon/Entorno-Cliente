const input = prompt("Escribe una frase para poder encontrar a nemo ");

const array = input.toLowerCase().split(" ");

if (array.includes("nemo")) {
  document.write(`<h1>He encontrado a Nemo en la posición número ${array.indexOf("nemo")}</h1>`);

} else {

  document.write(`<h1>No he encontrado a Nemo :(</h1>`);
}
