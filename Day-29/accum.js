function accum(s) {
  // your code goes below
  let returnChar = "";
  for (let i = 0; i < s.length; i++) {
    returnChar += s[i].toUpperCase() + s[i].toLowerCase().repeat(i) + "-";
  }
  returnChar = returnChar.slice(0, returnChar.length - 1);
  return returnChar;
}
