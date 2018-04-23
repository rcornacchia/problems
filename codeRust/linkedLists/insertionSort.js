const { head, printList, ListNode } = require('../../dataStructures/linkedList')

const insertionSort = head => {
  if (!head) return

  let first = new ListNode(head.data)
  let sortedHead = first
  let current = head.next

  while (current) {
    // add to sorted in the correct place
    if (current.data < sortedHead.data) {
      let newHead = new ListNode(current.data)
      let temp = sortedHead
      newHead.next = temp
      sortedHead = newHead
    } else {
      let curr = sortedHead
      while (curr.next && curr.next.data < current.data) {
        curr = curr.next
      }

      let temp = curr.next
      let newNode = new ListNode(current.data)
      curr.next = newNode

      if (temp) {
        newNode.next = temp
      }
    }

    current = current.next
  }

  return sortedHead
}

let result = insertionSort(head)
printList(head)
printList(result)