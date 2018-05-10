// declare pointers for start of each halfdeck array
// iterate through deck of cards
// decrement pointer if it maches the card
// return true if both pointers are -1 when finished
const isRiffle = (deck, half1, half2) => {
  let top1 = 0
  let top2 = 0

  for (let i=0; i < deck.length; i++) {
    let card = deck[i]
    if (top1 < half1.length && card == half1[top1]) {
      top1++
    } else if (top2 < half2.length && card == half2[top2]) {
      top2++
    } else return false
  }

  return true
}

console.log(isRiffle([1, 2, 3, 4, 5, 6], [1, 4, 6, 7], [2, 3, 5]))