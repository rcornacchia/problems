function maxDuffelBagValue(cakes, capacity) {
  if (!capacity && !cakes.find(cake => cake.weight===0)) return 0
  let result = []
  for (let currentCapacity=0; currentCapacity <= capacity; currentCapacity++) {
    let max = 0
    cakes.forEach(cake => {
      if (cake.weight === 0 && cake.value > 0) {
        return Infinity
      } else if (cake.weight <= currentCapacity) {
        let remaining = currentCapacity - cake.weight
        let curr = cake.value + result[remaining]
        max = Math.max(max, curr)
      }
    })
    result.push(max)
  }
  console.log(result[capacity])
  return result[capacity]
}

const cakeTypes = [
  { weight: 2, value: 15 },
  { weight: 7, value: 160 },
  { weight: 3, value: 90 },
];

const cakeTypes2 = [
  { weight: 0, value: 40 },
  { weight: 3, value: 40 },
  { weight: 5, value: 70 },
]

maxDuffelBagValue(cakeTypes, 20);
maxDuffelBagValue(cakeTypes2, 9);
// returns 555 (6 of the middle type of cake and 1 of the last type of cake)