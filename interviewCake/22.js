// delete node by copying the next node into the current node
// and then bypassing the next node

const deleteNode = node => {
  if (!node.next) {
    throw new Error('Cannot delete last node')
  } else {
    node.value = node.next.value
    node.next = node.next.next
  }
}

function LinkedListNode(value) {
  this.value = value;
  this.next = null;
}

var a = new LinkedListNode('A');
var b = new LinkedListNode('B');
var c = new LinkedListNode('C');

a.next = b;
b.next = c;

deleteNode(b);