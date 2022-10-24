var pasos_a = []
var tiempo_a = []

crearPila(10);
datos();

crearPila(100);
datos();

crearPila(1000);
datos();

function Pila(t) {
  this.data = []
  this.top = t
  this.empty = empty
  this.push = push
  this.pop = pop
  this.show = show
  this.peek = peek
  this.datos = datos
}

function push(element) {
  this.data.unshift(element)
}

function pop() {
  if (this.empty()) {
    console.log("Está vacia")
  } else {
    return this.data.shift()
  }
}

function empty() {
  if (this.data.length === 0)
    return true
  else
    return false
}

function show() {
  let show = ""
  for (let i = 0; i < this.data.length; ++i) {
    show += this.data[i] + "\n"
  }
  return show
}

function peek() {
  return this.data[0]
}

function crearPila(x) {
  for (let k = 1; k <= 5; k++) {
    let pasos = 0;
    var tomar_tiempo = Date.now()
    let p = new Pila(x);
    let ms = new Pila(x);

    let a, e, i = 1;
    a = Math.floor(Math.random() * (x - 1) + 1)
    p.push(a)
    while (i < x) {
      while (ms.empty() != true) {
        p.push(ms.pop())
        pasos++
      }
      e = Math.floor(Math.random() * (x - 1) + 1)
      while (e <= p.peek() && p.empty() != true) {
        ms.push(p.pop())
        pasos++
      }
      if (e >= p.peek() || p.empty()) {
        p.push(e)
        pasos++
      }
      i++
    }
    while (!ms.empty()) {
      p.push(ms.pop())
    }
    pasos_a[k - 1] = pasos;
    console.log(p.show())
    console.log("Cantida de pasos: " + pasos)
    var terminar_t = Date.now()
    tiempo_a[k - 1] = terminar_t - tomar_tiempo
    console.log("El tiempo es de: " + tiempo_a[k - 1] + "ms")
    pasos = 0
  }
}

function datos() {
  pasos_a[5] = (pasos_a[0] + pasos_a[1] + pasos_a[2] + pasos_a[3] + pasos_a[4]) / (5)
  pasos_a[6] = (pasos_a[0] + pasos_a[1] + pasos_a[2] + pasos_a[3] + pasos_a[4])
  tiempo_a[5] = (tiempo_a[0] + tiempo_a[1] + tiempo_a[2] + tiempo_a[3] + tiempo_a[4]) / (5)
  tiempo_a[6] = (tiempo_a[0] + tiempo_a[1] + tiempo_a[2] + tiempo_a[3] + tiempo_a[4])
  console.log("Promedio de pasos: " + pasos_a[5])
  console.log("Total de pasos: " + pasos_a[6])
  console.log("Promedio del tiempo: " + tiempo_a[5] + "ms")
  console.log("Total de tiempo: " + tiempo_a[6] + "ms")
}