let obj = {};
let obj2 = {};
for (i = 0; i < 1e3; i++) {
  let name = "name" + (1 + Math.floor(Math.random() * 1e3));
  obj[name] = name;
}

llaves = Object.keys(obj);

console.log(llaves.sort((p, q) => p < q ? -1 : p > q ? 1 : 0));

//for (let j=0;j<llaves.lenght;j++){
//} 
//llaves = llaves.sort((p, q) => q < p ? -1 : q > p ? 1 : 0)
/*nombres = Object.getOwnPropertyNames(obj);
nombres.sort((p, q) => {
    return q > p ? -1 : q < q ? 1 : 0;
});
console.log(nombres)*/
//llaves2 = llaves.sort((p, q) => p < q ? -1 : p > q ? 1 : 0)