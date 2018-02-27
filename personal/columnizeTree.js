function columnize(root) {
  let stack = [{ node: root, depth: 0}]
  let result = {}

  while (stack.length) {
    let curr = stack.pop()
    let { node, depth } = curr

    if (node.left) stack.push({ 
      node: node.left,
      depth: depth+1
    })
    if (node.right) stack.push({
      node: node.right,
      depth: depth+1
    })
    
    if (result[depth]) {
      result[depth].push(node.val)
     } else {
       result[depth] = [node.val]
     }
  }

  return result
}

class TreeNode {
  constructor (val, left, right) {
    this.val = val
    this.left = left
    this.right = right
  }
}

const nodeA = new TreeNode('A')
const nodeB = new TreeNode('B')
const nodeC = new TreeNode('C')
const nodeD = new TreeNode('D')
const nodeE = new TreeNode('E')
const nodeF = new TreeNode('F')

nodeA.left = nodeB
nodeA.right = nodeC
nodeB.left = nodeD
nodeB.right = nodeE
nodeC.left = nodeF

const result = columnize(nodeA)
console.log(result)
