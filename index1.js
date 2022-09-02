var frutas = ['Maçã', 'Banana'];


// 2

var primeiro = frutas[0];
// Maçã

var ultimo = frutas[frutas.length - 1];
// Banana

console.log(ultimo);

frutas.forEach(function (item, indice, array) {
    console.log(item, indice);
  });
  // Maçã 0
  // Banana 1