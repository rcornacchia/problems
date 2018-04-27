const { printList, ListNode } = require('../../dataStructures/linkedList')

const mergesort = head => {
  if (!head || !head.next) return head
  let list = head
  let length = 1
  while (list) {
    length++
    list = list.next
  }

  let mid = Math.floor(length/2)
  let list2 = head
  let counter = 1
  while(list2 && counter < mid) {
    counter++
    list2 = list2.next
  }
  let tail = list2
  list2 = list2.next
  tail.next = null

  let l1 = mergesort(head)
  let l2 = mergesort(list2)

  return merge(l1, l2)
}

let merge = (list1, list2) => {
  if (!list1 && !list2) return
  if (list1 && !list2) return list1
  if (!list1 && list2) return list2

  let result
  let tail
  while (list1 && list2) {
    let next
    if (list2.data > list1.data) {
      next = list1
      list1 = list1.next
    } else {
      next = list2
      list2 = list2.next
    }

    if (!result) {
      result = next
      tail = next
    }
    else {
      tail.next = next
      tail = next
    }
  }

  if (list1) tail.next = list1
  if (list2) tail.next = list2
  return result
}

const node8 = new ListNode(8)
const node6 = new ListNode(16, node8)
const node4 = new ListNode(14, node6)
const node5 = new ListNode(55, node4)
const node3 = new ListNode(3, node5)
const head = new ListNode(22, node3)

printList(head)
console.log()
const res = mergesort(head)
printList(res)