let array = [];
for (let i = 0; i < 5; i++) {
  array[i] = 1 + (Math.floor(Math.random() * 4));
  array.sort();
}

function majority(array = []) {
    let cantidad = Math.floor(array.length / 2);
    let contenedor = [];
    for (let i = 0; i < array.length; i++) {
        let value = array[i];
        contenedor[value] = contenedor[value] + 1 || 1;
        if (contenedor[value] > cantidad)
            return ("El que más se repite es el " + value)
    };
    return ("No hay número más repetido ");
};
console.log(array);
console.log(majority(array));