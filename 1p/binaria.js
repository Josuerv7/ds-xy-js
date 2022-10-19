//asasdasdasd

let array = [];
let k1 = 0;
let busc = 5;
for (let i = 0; i < 1e3; i++) {
    array[i] = 1 + (Math.floor(Math.random() * 1e3));
}

binarySearch = function(item) {
    console.time("El tiempo fue de: ");
    array.sort(function(a, b) { return a - b });
    console.log(array);
    let low = 0,
        high = array.length - 1,
        mid, element;
    while (low <= high) {
        mid = Math.floor((low + high) / 2);
        element = array[mid];
        k1++;
        if (element < item) {
            low = mid + 1;
            k1++;
        } else if (element > item) {
            high = mid - 1;
            k1++;
        } else {
            k1++;
            return mid;
        }
    }return "0, No se encontró el numero";
}

console.log("El número a buscar es: " + busc)
console.log("Está en la posición: " + binarySearch(busc));
console.log("Tomó " + k1 + " pasos");
console.timeEnd("El tiempo fue de: ");

let array2 = [];
let k2 = 0;
let busc2 = 20;
for (let i = 0; i < 1e4; i++) {
    array2[i] = 1 + (Math.floor(Math.random() * 1e4));
}
binarySearch2 = function(item) {
    console.time("El tiempo fue de: ");
    array2.sort(function(a, b) { return a - b });
    console.log(array2);
    let low = 0,
        high = array2.length - 1,
        mid, element;
    while (low <= high) {
        mid = Math.floor((low + high) / 2);
        element = array2[mid];
        k2++;
        if (element < item) {
            low = mid + 1;
            k2++;
        } else if (element > item) {
            high = mid - 1;
            k2++;
        } else {
            k2++;
            return mid;
        }
    }return "0, No se encontró el numero";
}

console.log("\nEl número a buscar es: " + busc2)
console.log("Está en la posición: " + binarySearch2(busc2));
console.log("Tomó " + k2 + " pasos");
console.timeEnd("El tiempo fue de: ");

let array3 = [];
let k3 = 0;
let busc3 = 200;
for (let i = 0; i < 1e5; i++) {
    array3[i] = 1 + (Math.floor(Math.random() * 10e5));
}

binarySearch3 = function(item) {
    console.time("El tiempo fue de: ");
    array3.sort(function(a, b) { return a - b });
    console.log(array3);
    let low = 0,
        high = array3.length - 1,
        mid, element;
    while (low <= high) {
        mid = Math.floor((low + high) / 2);
        element = array3[mid];
        k3++;
        if (element < item) {
            low = mid + 1;
            k3++;
        } else if (element > item) {
            high = mid - 1;
            k3++;
        } else {
            k3++;
            return mid;
        }
    }return "0, No se encontró el numero";
}
console.log("\nEl número a buscar es: " + busc3)
console.log("Está en la posicion: " + binarySearch3(busc3));
console.log("Tomó " + k3 + " pasos");
console.timeEnd("El tiempo fue de: ");