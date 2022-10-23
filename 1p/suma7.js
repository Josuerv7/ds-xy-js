//Imprime la sumatoria de los múltiplos de 7 en el rango [200-300]
let sum = 0;
for (let i = 200; i < 300; i++) {
  if (i % 7 == 0) {
    sum += i;
  }
}
console.log("La suma es: " + sum);