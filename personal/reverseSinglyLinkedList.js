class Node {
  constructor(val, next) {
    this.val = val;
    this.next = next || null;
  }
}

function reverse(curr) {
  let next = curr && curr.next;
  let prev = curr;
  curr.next = null;
  curr = next;
  while (curr) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return curr;
}

function iterateList(curr) {
  while (curr) {
    console.log(curr.val);
    curr = curr.next;
  }
}

const nodeA = new Node('A');
const nodeB = new Node('B');
const nodeC = new Node('C');
const nodeD = new Node('D');

nodeA.next = nodeB;
nodeB.next = nodeC;
nodeC.next = nodeD;

console.log(reverse(nodeA));
console.log(iterateList(nodeD));