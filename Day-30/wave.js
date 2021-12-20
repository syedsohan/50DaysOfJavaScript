function wave(str) {
  // Your Code goes below
  let array = [],
    word = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") continue;
    word += str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1);
    array.push(word);
    word = "";
  }

  return array;
}

console.log(wave("hello"));
