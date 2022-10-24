var pt = []
var tt = []
function stack(t) {
  this.data = []
  this.to = t
  this.empty = empty
  this.push = push
  this.pop = pop
  this.show = show
  this.peek = peek
}

function push(element) {
  this.data.unshift(element)
}

function pop() {
  if (this.empty()) {
    console.log("Está vacia")
  }
  else {
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

function sortstack(x) {
  for (let k = 1; k <= 5; k++) {
    let pasos = 0;
    var start = Date.now()
    let p = new stack(x);
    let s = new stack(x);

    let n, r, i = 1;
    n = Math.floor(Math.random() * (x - 1) + 1)
    p.push(n)
    while (i < x) {
      while (s.empty() != true) {
        p.push(s.pop())
        pasos++
      }
      r = Math.floor(Math.random() * (x - 1) + 1)
      while (r <= p.peek() && p.empty() != true) {
        s.push(p.pop())
        pasos++
      }
      if (r >= p.peek() || p.empty()) {
        p.push(r)
        pasos++
      }
      i++
    }
    while (!s.empty()) {
      p.push(s.pop())
    }
    pt[k - 1] = pasos;
    console.log(p.show())
    console.log("pasos: " + pasos)
    var end = Date.now()
    tt[k - 1] = end - start
    console.log("tiempo: " + tt[k - 1] + "s")
    pasos = 0
  }
}

sortstack(10)
pt[5] = (pt[0] + pt[1] + pt[2] + pt[3] + pt[4]) / (5)
pt[6] = (pt[0] + pt[1] + pt[2] + pt[3] + pt[4])
tt[5] = (tt[0] + tt[1] + tt[2] + tt[3] + tt[4]) / (5)
tt[6] = (tt[0] + tt[1] + tt[2] + tt[3] + tt[4])
console.log("promedio: " + pt[5])
console.log("pasos totales: " + pt[6])
console.log("promedio: " + tt[5] + "s")
console.log("tiempo total: " + tt[6] + "s")

sortstack(100)
pt[5] = (pt[0] + pt[1] + pt[2] + pt[3] + pt[4]) / (5)
pt[6] = (pt[0] + pt[1] + pt[2] + pt[3] + pt[4])
tt[5] = (tt[0] + tt[1] + tt[2] + tt[3] + tt[4]) / (5)
tt[6] = (tt[0] + tt[1] + tt[2] + tt[3] + tt[4])
console.log("promedio: " + pt[5])
console.log("pasos totales: " + pt[6])
console.log("promedio: " + tt[5] + "s")
console.log("tiempo total: " + tt[6] + "s")

sortstack(100)
pt[5] = (pt[0] + pt[1] + pt[2] + pt[3] + pt[4]) / (5)
pt[6] = (pt[0] + pt[1] + pt[2] + pt[3] + pt[4])
tt[5] = (tt[0] + tt[1] + tt[2] + tt[3] + tt[4]) / (5)
tt[6] = (tt[0] + tt[1] + tt[2] + tt[3] + tt[4])
console.log("promedio: " + pt[5])
console.log("pasos totales: " + pt[6])
console.log("promedio: " + tt[5] + "s")
console.log("tiempo total: " + tt[6] + "s")