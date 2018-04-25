class Node {
  constructor(data, next, prev) {
    this.data = data || null
    this.next = next || null
    this.prev = prev || null
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity
    this.elements = {}
    this.cache = new Node()
    this.tail = this.cache
  }

  get(data) {
    // if in cache, remove and add to end of linked list
    if (this.elements[data]) {
      let curr = this.elements[data]
      let prev = curr.prev
      let next = curr.next
      prev.next = next
      next.prev = prev
      // add to end of list and adjust pointers
      let oldest = this.tail.prev
      oldest.next = curr
      curr.prev = oldest
      curr.next = this.tail
      this.tail.prev = curr
      return curr.data
    }
    return
  }

  set(data) {
    // if in cache, call get on that element
    if (elements[data]) {
      get(data)
      return
    }

    // if already at capacity, evict the first element of the list and delete from elements map
    if (Object.keys(this.elements).length == this.capacity) {
      let oldest = this.cache.next
      if (oldest && oldest.data) {
        delete this.elements[oldest.data]
        let newOldest = oldest.next
        this.cache.next = newOldest
        newOldest.prev = this.cache
      }
    }
    // add the new node to the end of the list and add to the elements map
    let newest = new Node(data, this.tail, this.tail.prev)
    if (this.tail.prev) this.tail.prev.next = newest
    this.tail.prev = newest
    this.elements[data] = newest
  }
}