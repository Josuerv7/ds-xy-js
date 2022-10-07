let num1 = [];
let resultado1 = [];
let k1 = 0;
let busc = 200;

for (let i = 0; i <= 10e3; i++) {
  num1[i] = (1 + Math.floor(Math.random() * 10e3))
}

function secuencial(x1) {
  console.time("El tiempo fue de: ");
  for (let i = 0; i < num1.length; i++) {
    if (num1[i] === x1) {
      resultado1.push(i);
      k1++
    }
    k1++
  }

  if (resultado1.length === 0) {
    return ("0, No se encontró el numero")
  }
  return resultado1
}
console.log("Se busca el numero: " + busc)
console.log("El numero esta en la posición: " + secuencial(busc));
console.log(num1);
console.log("Tomó " + k1 + " pasos");
console.timeEnd("El tiempo fue de: ");

let num2 = [];
let resultado2 = [];
let k2 = 0;
let busc2 = 200;

function secuencial2(x2) {
  console.time("El tiempo fue de: ");
  for (let i = 0; i <= 10e4; i++) {
    num2[i] = (1 + Math.floor(Math.random() * 10e4))
  }

  for (let i = 0; i < num2.length; i++) {
    if (num2[i] === x2) {
      resultado2.push(i)
      k2++
    }
    k2++
  }
  if (resultado2.length === 0) {
    return ("0, No se encontró el numero")
  }
  return resultado2
}
console.log("\nSe busca el numero: " + busc2)
console.log("El numero esta en la posición: " + secuencial2(busc2));
console.log(num2);
console.log("Tomó " + k2 + " pasos");
console.timeEnd("El tiempo fue de: ");

let num3 = [];
let resultado3 = [];
let k3 = 0;
let busc3 = 200;

function secuencial3(x3) {
  console.time("El tiempo fue de: ");
  for (let i = 0; i <= 10e4; i++) {
    num3[i] = (1 + Math.floor(Math.random() * 10e4))
  }

  for (let i = 0; i < num3.length; i++) {
    if (num3[i] === x3) {
      resultado3.push(i)
      k3++
    }
    k3++
  }
  if (resultado3.length === 0) {
    return ("0, No se encontró el numero")
  }
  return resultado3
}
console.log("\nSe busca el numero: " + busc3)
console.log("El numero esta en la posición: " + secuencial3(busc3));
console.log(num3);
console.log("Tomó " + k3 + " pasos");
console.timeEnd("El tiempo fue de: ");