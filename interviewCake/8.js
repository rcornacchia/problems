/**
 * Write a function to see if a binary tree ↴ is "superbalanced" (a new tree property we just made up).
 * A tree is "superbalanced" if the difference between the depths of any two leaf nodes is no greater than one.
 */

// throw Error if no root
// bfs of root, keeping track of depth for each node, minLeafDepth and maxLeafDepth
// if maxLeafDepth-minLeafDepth > 1 return false

const isSuperBalanced = root => {
  if (!root) throw new Error('Invalid input.')

  let minLeafDepth = 0
  let maxLeafDepth = 0
  let q = [{
    node: root,
    depth: 0
  }]

  while (q.length && maxLeafDepth-minLeafDepth < 2) {
    let { node, depth } = q.shift()
    if (!node.left && !node.right) {
      if (!minLeafDepth) {
        minLeafDepth = depth
        maxLeafDepth = depth
      } else {
        if (depth > maxLeafDepth) {
          maxLeafDepth = depth
        }
      }
    } else {
      node.left && q.push({
        node: node.left,
        depth: depth+1
      })
      node.right && q.push({
        node: node.right,
        depth: depth+1
      })
    }
  }

  return (minLeafDepth && maxLeafDepth && maxLeafDepth-minLeafDepth < 1)
}

class Node {
  constructor(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

const nodeH = new Node('H')
const nodeG = new Node('G', nodeH)
const nodeF = new Node('F')
const nodeE = new Node('E')
const nodeD = new Node('D', nodeG)
const nodeC = new Node('C')
const nodeB = new Node('B', nodeD, nodeE)
const nodeA = new Node('A', nodeB, nodeC)

console.log(isSuperBalanced(nodeA))