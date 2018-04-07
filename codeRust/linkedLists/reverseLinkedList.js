const { head, printList} = require('../../dataStructures/linkedList')

function iterativeReverseLinkedList(head) {
  if (head == null || head.next == null) return head

  let curr = head
  let next = head.next
  head.next = null

  while (next != null) {
    let temp = next.next
    next.next = curr
    curr = next
    next = temp
  }
  printList(curr)
  return curr
}

function recursiveReverseLinkedList(head) {
  if (head == null || head.next == null) return head

  const reversedHead = recursiveReverseLinkedList(head.next)
  console.log(reversedHead)
  head.next.next = head
  head.next = null;
  printList(reversedHead)
  return reversedHead;
}

recursiveReverseLinkedList(head)