const { head, printList, ListNode } = require('../../dataStructures/linkedList')

const swapNthNode = (head, n) => {
  if (!head || !n) return
  if (n < 2) return head

  let curr = head
  let counter = 2
  while (curr.next && counter < n) {
    curr = curr.next
    counter++
  }

  if (!curr.next) return
  let newHead = curr.next
  let temp = newHead.next
  newHead.next = head.next
  curr.next = head
  curr.next.next = temp
  return newHead
}

printList(head)
let result = swapNthNode(head, 4)
console.log()
printList(result)