//123
// imports ES5
// Node (Node4stu5es.js)
//
let n1=new Node('a')
let n2=new Node('b')

let l = new Linked(n1)//new Node('a')
l.traverse(l.getHead())

l.prepend(n2)
l.traverse(l.getHead())

l.append(new Node('c'))
l.traverse(l.getHead())

//
l.prepend(new Node('d'))
l.traverse(l.getHead())


function Linked(n) {//node
    this.head = n//node
    this.tail = n//node
    this.size = 1

    this.getHead = getHead
    this.prepend = prepend
    this.append = append
    this.traverse = traverse
    //this.contains = contains
}

function getHead(){return this.head}

function prepend(n){//new node
    n.next = this.head
    this.head=n
    this.size++
}

function append(n){//new node
    n.next = null//
    this.tail.next=n
    this.tail=n
    this.size++
}

function traverse(){
    let c=this.head
    while(c){//exists
	//console.log(c.key)
	console.log(c.data)
	c=c.next
    }
    console.log('\n')
}

function Node(data) {//constructor
   this.data = data
   this.next = null
}

//
// exercises
//
function contains(v){}
function getTail(){}
