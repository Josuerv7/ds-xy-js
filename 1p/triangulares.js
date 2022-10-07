//Imprime los 11 primeros números triangulares
let numero = 0;
let array = [];
for (let i = 1; i <= 11; i++) {
  numero += i;
  array[i - 1] = numero;
}
console.log(array)