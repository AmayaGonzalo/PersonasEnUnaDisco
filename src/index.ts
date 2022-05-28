let numero: number = 0;
let menorValor: number = 18;
let mayorValor: number = 40;
let cantMenor: number = 0;
let cantMayor: number = 0;
let contador: number = 0;
let persona: number;

function cargarEdades(menorValor: number, mayorValor: number) {
  numero = Math.floor(Math.random() * 100);
  if (menorValor <= numero && numero <= mayorValor) {
    persona = numero;
  }
  return persona;
}

for (contador = 0; contador < 270; contador++) {
  if (cargarEdades(menorValor, mayorValor) < 21) {
    cantMenor += 1;
  } else cantMayor += 1;
}

console.log("Total menores de 21: ", cantMenor);
console.log("Total mayores o igual a 21: ", cantMayor);
console.log("Total Personas: ", cantMenor + cantMayor);
