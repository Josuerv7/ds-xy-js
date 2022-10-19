//Imprime los 11 primeros elementos de la sucesión de Fibonacci
function fibonacci(number) {
  var n = [];
  n[0] = 0;
  n[1] = 1;
  for (let i = 2; i < number; i++) {
    n[i] = n[i - 2] + n[i - 1];
  }
  return n;
}
console.log(fibonacci(11));