function high(x) {
  //code your magic here
  let array = x.split(" ");
  let max = 0;
  let maxWord = "";
  for (let i = 0; i < array.length; i++) {
    let score = 0;
    for (let j = 0; j < array[i].length; j++) {
      score += array[i].charCodeAt(j) - 96;
    }
    if (score > max) {
      max = score;
      maxWord = array[i];
    }
  }
  return maxWord;
}
