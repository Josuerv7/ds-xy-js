var pasos_a = []
var tiempo_a = []

crearFila(10)
datos()

crearFila(100)
datos()

crearFila(1000)
datos()

function fila(t) {
  this.data = []
  this.top = t
  this.empty = empty
  this.enqueue = enqueue
  this.dequeue = dequeue
  this.show = show
  this.peek = peek
}

function enqueue(element) {
  this.data.push(element)
}

function dequeue() {
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

function crearFila(x) {
  for (let k = 1; k <= 5; k++) {
    let pasos = 0;
    var tomar_tiempo = Date.now()
    let a = new fila(x);
    let b = new fila(x);
    let n, r;
    let i = 1;
    n = Math.floor(Math.random() * (x - 1) + 1)
    a.enqueue(n)
    while (i < x) {
      r = Math.floor(Math.random() * (x - 1) + 1)
      while (a.empty() != true) {
        b.enqueue(a.dequeue())
        pasos++
      }
      while (r > b.peek()) {
        a.enqueue(b.dequeue())
        pasos++
      }
      if (b.empty()) {
        a.enqueue(r)
        pasos++
      }
      if (r <= b.peek()) {
        a.enqueue(r)
        pasos++
      }
      while (b.empty() != true) {
        a.enqueue(b.dequeue())
      }
      i++
    }
    pasos_a[k - 1] = pasos;
    console.log(a.show())
    console.log("pasos: " + pasos)
    var terminar_t = Date.now()
    tiempo_a[k - 1] = terminar_t - tomar_tiempo
    console.log("tiemp: " + tiempo_a[k - 1] + "s")
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