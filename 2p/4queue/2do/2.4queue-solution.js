function queue() {
  this.data = []
  this.max = 5
  this.enqueue = enqueue
  this.dequeue = dequeue
  this.full = full
  this.empty = empty
  this.show = show
}


function enqueue(element) {
  if (this.full())
    console.log("fila llena")

  else
    this.data.push(element)

}

function dequeue() {
  if (this.empty())
    console.log("fila vacia")

  else
    this.data.shift()

}

function full() {
  if (this.data.length === this.max)
    return true
  else
    return false
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

let fila = new queue();

fila.enqueue(3)
fila.enqueue(1)
fila.enqueue(12)
fila.enqueue(2)
fila.enqueue(7)
console.log(fila.show())
fila.enqueue(3)
fila.dequeue()
fila.dequeue()
fila.dequeue()
fila.dequeue()
fila.dequeue()
fila.dequeue()
