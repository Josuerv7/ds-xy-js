let obj = {}
for (i = 0; i < 1e3; i++) {
  let name = "name" + (1 + Math.floor(Math.random() * 1e3));
  obj[name] = name
}
console.log(obj)