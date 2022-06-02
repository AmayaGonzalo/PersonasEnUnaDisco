let cantidadPersonas: number = 270;
let personas: number[] = new Array(cantidadPersonas);
let menorValor: number = 18;
let mayorValor: number = 40;
let cantMenor: number = 0;
let cantMayor: number = 0;

function cargarEdades() {
  for (let indice = 0; indice < cantidadPersonas; indice++) {
    let edad =
      Math.floor(Math.random() * (mayorValor - menorValor + 1)) + menorValor;
    personas[indice] = edad;
  }
}

cargarEdades();
for (let indice = 0; indice < cantidadPersonas; indice++) {
  if (personas[indice] < 21) {
    cantMenor += 1;
  } else {
    cantMayor += 1;
  }
}

console.log("Total menores de 21: ", cantMenor);
console.log("Total mayores o igual a 21: ", cantMayor);
console.log("Total Personas: ", cantMenor + cantMayor);
