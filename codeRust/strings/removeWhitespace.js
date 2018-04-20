const removeWhitespace = str => {
  let arr = str.split("");
  let read = write = 0;
  while (read < arr.length) {
    if (arr[read] == ' ') {
      read++;
    } else {
      arr[write] = arr[read];
      write++;
      read++;
    }
  }
  return arr.splice(0, write).join("");
}

console.log(removeWhitespace("    All greek  to    me.   "))