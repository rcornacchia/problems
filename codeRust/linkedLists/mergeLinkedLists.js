const { printList, ListNode } = require('../../dataStructures/linkedList')

const mergeLinkedLists = (list1, list2) => {
  if (!list1) return list2
  if (!list2) return list1

  let head = tail = null
  while (list1 || list2) {
    if (list1 && !list2) {
      tail.next = list1
      break
    }
    if (list2 && !list1) {
      tail.next = list2
      break
    }

    let next
    if (list1.data < list2.data) {
      next = list1
      list1 = list1.next
    } else {
      next = list2
      list2 = list2.next
    }

    if (!head || !tail) {
      head = next
      tail = next
    } else {
      tail.next = next
      tail = tail.next
    }
    if (next && next.next) next.next = null
  }
  return head
}

const node10 = new ListNode(10)
const node8 = new ListNode(8, node10)
const node6 = new ListNode(6, node8)
const node4 = new ListNode(4, node6)
const evenHead = new ListNode(2, node4)

const node5 = new ListNode(5)
const node3 = new ListNode(3, node5)
const oddHead = new ListNode(1, node3)

let merged = mergeLinkedLists(evenHead, oddHead)
printList(merged)