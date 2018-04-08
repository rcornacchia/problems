const { head, printList} = require('../../dataStructures/linkedList')

function deleteNode(head, key) {
  if (head.data == key) {
    head = head.next
    return head
  }

  let curr = head
  while (curr.next) {
    if (curr.next.data == key) {
      // delete curr.next
      curr.next = curr.next.next
      return head
    } else {
      curr = curr.next
    }
  }
}

deleteNode(head, 3)
printList(head)