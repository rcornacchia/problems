const { printList, ListNode } = require('../../dataStructures/linkedList')

const add = (list1, list2) => {
  let result = new ListNode()
  let resultHead = result
  let carry = 0

  while (list1 || list2 || carry) {
    if (!list1 && !list2 && carry) {
      result.next = new ListNode(carry)
      carry = 0
    } else if (!list1 && list2) {
      result.next = new ListNode(list2.data + carry)
      carry = 0
      list2 = list2.next
    } else if (!list2 && list1) {
      result.next = new ListNode(list1.data + carry)
      carry = 0
      list1 = list1.next
    } else {
      let sum = list1.data + list2.data + carry
      carry = (sum > 9) ? 1 : 0
      let digit = sum % 10
      result.next = new ListNode(digit)
      list1 = list1.next
      list2 = list2.next
    }
    result = result.next
  }
  result.next = null
  return resultHead
}

const node10 = new ListNode(9)
const node8 = new ListNode(8, node10)
const node6 = new ListNode(6, node8)
const node4 = new ListNode(4, node6)
const evenHead = new ListNode(2, node4)

const node5 = new ListNode(5)
const node3 = new ListNode(3, node5)
const oddHead = new ListNode(1, node3)

let res = add(oddHead, evenHead)
printList(res)