//Imprime la multiplicatoria de los múltiplos de 7 en el rango [200-300].
let mult = 1;
for (let i = 200; i < 300; i++) {
  if (i % 7 == 0) {
    mult *= i;
  }
}
console.log("La multiplicatoria es: " + mult);