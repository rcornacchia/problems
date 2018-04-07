const { head, printList} = require('../../dataStructures/linkedList')

function removeDuplicates(head) {
  if (!head || !head.next) return head
  const seen = new Set()
  console.log(head)
  let curr = head
  seen.add(curr.data)
  console.log('test')
  while (curr.next) {
    if (seen.has(curr.next.data)) {
      // delete the node
      curr.next = curr.next.next
    } else {
      seen.add(curr.next.data)
      curr = curr.next
    }
  }
  printList(head)
}

printList(head)
removeDuplicates(head)