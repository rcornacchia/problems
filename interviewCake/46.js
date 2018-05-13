const network = {
  'Min'     : ['William', 'Jayden', 'Omar'],
  'William' : ['Min', 'Noam'],
  'Jayden'  : ['Min', 'Amelia', 'Ren', 'Noam'],
  'Ren'     : ['Jayden', 'Omar'],
  'Amelia'  : ['Jayden', 'Adam', 'Miguel'],
  'Adam'    : ['Amelia', 'Miguel', 'Sofia', 'Lucas'],
  'Miguel'  : ['Amelia', 'Adam', 'Liam', 'Nathan'],
  'Noam'    : ['Nathan', 'Jayden', 'William'],
  'Omar'    : ['Ren', 'Min', 'Scott'],
};

const findShortestPath = (start, end) => {
  let visited = new Set()
  let result = []
  let q = [start]
  let prev = { [start]: null}

  while (q.length) {
    let curr = q.shift()
    visited.add(curr)
    
    if (curr == end) {
      // calculate path back to start
      while (curr) {
        result.push(curr)
        curr = prev[curr]
      }
      return result.reverse()
    }
    let neighbors = network[curr]
    neighbors.forEach(neighbor => {
      if (!visited.has(neighbor)) {
        prev[neighbor] = curr
        q.push(neighbor)
      }
    })
  }
  throw new Error('No path found')
}

console.log(findShortestPath('Jayden', 'Adam'))

/**
 * general approach is to use breadth first search
 */