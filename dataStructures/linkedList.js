class ListNode {
  constructor(data, next) {
    this.data = data
    this.next = next
  }
}

const node5 = new ListNode(4, null)
const node4 = new ListNode(4, node5)
const node3 = new ListNode(3, node4)
const node2 = new ListNode(2, node3)
const node1 = new ListNode(1, node2)

function printList(head) {
  while(head) {
    console.log(head.data)
    head = head.next
  }
}

module.exports = {
  head: node1,
  printList
}