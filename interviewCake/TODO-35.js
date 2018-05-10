/**
 * Write a function for doing an in-place shuffle of an array.
 * The shuffle must be "uniform," meaning each item in the original array must have 
 * the same probability of ending up in each spot in the final array.
 * Assume that you have a function getRandom(floor, ceiling) for getting a random 
 * integer that is >= floor and <= ceiling.
 */
const getRandom = (floor, ceiling) => {
  const range = ceiling - floor + 1
  const rand = Math.floor(Math.random() * range + floor)
  console.log(rand)

}

const shuffle = arr => {
  const a = Array(10).fill().map((_, i) => i)
  getRandom(14, 16)
  return arr
}

console.log(shuffle(Array(10).forEach((_, i) => i)))