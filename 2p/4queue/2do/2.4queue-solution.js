function queue() {
  this.data = []
  this.top = 5
  this.enqueue = enqueue
  this.dequeue = dequeue
  this.full = full
  this.empty = empty
  this.show = show
}


function enqueue(element) {
  if (this.full())
    console.log("Esta llena")

  else
    this.data.push(element)

}

function dequeue() {
  if (this.empty())
    console.log("Está vacia")

  else
    this.data.shift()

}

function full() {
  if (this.data.length === this.top)
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

fila.enqueue(4)
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
