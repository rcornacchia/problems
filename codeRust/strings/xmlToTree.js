class Node {
  constructor(element, children) {
    this.element = element
    this.children = children || []
  }
}

const convertXMLToTree = str => {
  let stack = []
  let current = ''
  let isClosingTag = false
  let i = 0
  let root

  while (i < str.length) {
    let letter = str[i]
    if (letter !== '<') {
      while (i < str.length && str[i] !== '<') {
        current += str[i++]
      }
      if (!stack.length) throw new Error ('Invalid XML')
      stack[stack.length-1].children.push(new Node(current))
    }
    if (letter == '<') {
      i++
      while (str[i] !== '>' && i < str.length) {
        current += str[i]
        if (str[i] == '/') isClosingTag = true
        i++
      }
      // move past '>' character
      i++
      if (!isClosingTag) {
        const newNode = new Node(current)
        if (!root) root = newNode
        stack.push(newNode)
      }
      else {
        if (!stack.length) throw new Error ('Invalid XML')
        let node = stack.pop()
        if (stack.length) stack[stack.length-1].children.push(node)
      }
      // reset these to initial state
      isClosingTag = false
      current = ''
    }
  }
  return root
}

const printNaryTree = root => {
  console.log(root)
  let stack = [...root.children]
  while (stack.length) {
    let node = stack.pop()
    console.log(node)
    if (node.children.length) {
      stack.push(...node.children)
    }
  }
}

let testString = "<html><body><div><h1>CodeRust</h1><a>http://coderust.com</a></div><div><h2>Chapter 1</h2></div><div><h3>Chapter 2</h3><h4>Chapter 2.1</h4></div></body></html>"
let result = convertXMLToTree(testString)
printNaryTree(result)