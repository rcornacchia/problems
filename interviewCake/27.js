const reverseWords = msg => {
  for (let i = 0, j = msg.length-1; i < msg.length && j > i; i++, j--) {
    let temp = msg[i]
    msg[i] = msg[j]
    msg[j] = temp
  }

  let i = 0
  for (let k=0; k < msg.length; k++) {
    if (msg[k+1] == ' ' || msg[k+1] == undefined) {
      let j = k

      while (j > i) {
        let temp = msg[i]
        msg[i] = msg[j]
        msg[j] = temp
        i++
        j--
      }
      i = k+2
    }
  }
}

const message = [
  'c', 'a', 'k', 'e', ' ',
  'p', 'o', 'u', 'n', 'd', ' ',
  's', 't', 'e', 'a', 'l' , ' ',
  'T', 'o', 'n', 'y', ','
];

reverseWords(message);

console.log(message.join(''));