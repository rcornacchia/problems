class MinHeap {
  constructor() {
    this.heap = []
  }

  getMin() {
    if (!this.heap.length) return null
    return this.heap[0]
  }

  extractMin() {
    if (!this.heap.length) return null

    // replace the root with the last element on the heap
    // then bubble that last element down until it's larger than both children
    const last = this.heap.pop()
    const min = this.heap[0]
    if (!this.heap.length) return last

    let currIndex = 0
    this.heap[0] = last

    while (currIndex < this.heap.length) {
      let left = this.getLeft()
    }
  }

  getParent(i) {
    return Math.floor((i-1)/2)
  }

  getLeft(i) {
    return 2*i+1
  }

  getRight(i) {
    return 2*i+2
  }

  insert(key, data) {
    if (!key || !data) return
    console.log(key)
    console.log(data)

    // add the data to the end of the array
    this.heap.push({ key, data })
    // while the current node key is not the root and is less than it's parent, swap
    let currIndex = this.heap.length-1
    let curr = this.heap[currIndex]
    let parentIndex = this.getParent(currIndex)
    let parent = this.heap[parentIndex]
    while (currIndex > 0 && parentIndex >= 0 && (!parent || curr.key < parent.key)) {
      let temp = curr
      this.heap[currIndex] = parent
      this.heap[parentIndex] = temp
      currIndex = parentIndex
      curr = this.heap[currIndex]
      parentIndex = this.getParent(currIndex)
      parent = this.heap[parentIndex]
    }
    console.log(this.heap)
  }
}

const findMinSpanningTree = (adj, weights) => {
  // construct min heap with all the edges, based on weight
  let minHeap = new MinHeap()
  
  console.log(weights)
  weights.forEach((value, key) => {
    minHeap.insert(value, key)
  })

  console.log(minHeap)
  
  // initialize set to keep track of nodes that have been added
  // initialize set to keep track of edges (represents min spanning tree)
  // while the num nodes in min spanning tree is less than total num nodes 
    // extract min weight edge from min heap
    // if there's a node that isn't part of the nodes covered set add it to the set, and the edge to the result set
}

const adj = {
  1: [2, 3],
  2: [1, 3, 4],
  3: [1, 2, 5],
  4: [2, 5],
  5: [3, 4]
}

const distances = new Map()
distances.set([1, 2], 1)
distances.set([2, 3], 2)
distances.set([2, 4], 3)
distances.set([4, 5], 2)
distances.set([3, 5], 3)
distances.set([1, 3], 1)

console.log(findMinSpanningTree(adj, distances))