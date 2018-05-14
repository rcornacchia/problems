class MinHeap {
  constructor() {
    this.heap = []
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
  
  getMin() {
    if (!this.heap.length) return null
    return this.heap[0]
  }

  getSize() {
    return this.heap.length
  }

  print() {
    console.log(this.heap)
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

    while (currIndex < this.heap.length-1) {
      let leftIndex = this.getLeft(currIndex)
      let rightIndex = this.getRight(currIndex)
      let left = this.heap[leftIndex]
      let right = this.heap[rightIndex]
      let curr = this.heap[currIndex]

      if (left && left.key < curr.key && (!right || left.key < right.key)) {
        this.heap[currIndex] = left
        this.heap[leftIndex] = curr
        currIndex = leftIndex
      } else if (right && right.key < curr.key) {
        this.heap[currIndex] = right
        this.heap[rightIndex] = curr
        currIndex = rightIndex
      } else {
        return min
      }
    }
    return min
  }

  insert(key, data) {
    if (!key || !data) return

    // add the data to the end of the array
    this.heap.push({ key, data })
    // while the current node key is not the root and is less than it's parent, swap
    let currIndex = this.heap.length-1
    let curr = this.heap[currIndex]
    let parentIndex = this.getParent(currIndex)
    let parent = this.heap[parentIndex]
    while (currIndex > 0 && parentIndex >= 0 && (!parent || curr.key < parent.key)) {
      this.heap[currIndex] = parent
      this.heap[parentIndex] = curr
      currIndex = parentIndex
      curr = this.heap[currIndex]
      parentIndex = this.getParent(currIndex)
      parent = this.heap[parentIndex]
    }
  }
}

const findMinSpanningTree = (adj, weights) => {
  // construct min heap with all the edges, based on weight
  const minHeap = new MinHeap()
  const numNodes = Object.keys(adj).length
  const minSpanningTreeNodes = new Set()
  const minSpanningTreeEdges = new Set()
  let minSpanningTreeWeight = 0

  // add first node to minheap
  const nodes = Object.keys(adj)
  if (!nodes.length) return null

  const first = nodes.length && nodes[0]
  const neighbors = adj[first]

  neighbors.map(neighbor => {
    const edge = [parseInt(first), parseInt(neighbor)]
    if (!minSpanningTreeEdges.has(edge)) {
      const distance = weights.get(edge.toString())
      minSpanningTreeNodes.add(first)
      minSpanningTreeEdges.add(edge.toString())
      minHeap.insert(distance, edge)
      minHeap.print()
    }
  })

  minHeap.print()

  // add all edges (starting with node) to minheap with key = weight
  // take an edge off the stack and if the destination hasn't been visited yet, do the same
  while (minHeap.getSize()) {
    let { key, data } = minHeap.extractMin()
    const [start, end] = data
    if (!minSpanningTreeNodes.has(end)) {
      const neighbors = adj[end]
      console.log(neighbors)
      minSpanningTreeNodes.add(end)
      minSpanningTreeEdges.add(data.sort().toString())
      minSpanningTreeWeight += key

      neighbors.map(neighbor => {
        const edge = [parseInt(end), parseInt(neighbor)]
        if (!minSpanningTreeNodes.has(neighbor)) {
          const distance = weights.get(edge.sort().toString())
          minHeap.insert(distance, edge)
          minHeap.print()
        }
      })
    }
  }

  return {
    minSpanningTreeNodes,
    minSpanningTreeEdges,
    minSpanningTreeWeight
  }
}

const adj = {
  1: [2, 3],
  2: [1, 3, 4],
  3: [1, 2, 5],
  4: [2, 5],
  5: [3, 4]
}

const distances = new Map()
distances.set('1,2', 1)
distances.set('2,1', 1)
distances.set('2,3', 2)
distances.set('3,2', 2)
distances.set('2,4', 3)
distances.set('4,2', 3)
distances.set('4,5', 2)
distances.set('5,4', 2)
distances.set('3,5', 3)
distances.set('5,3', 3)
distances.set('1,3', 1)
distances.set('3,1', 1)

console.log(findMinSpanningTree(adj, distances))