function spinWords(string) {
  //TODO Have fun :)
  let newString = string.split(" ");
  let newArray = [];
  newString.forEach((element) => {
    if (element.length >= 5) {
      newArray.push(element.split("").reverse().join(""));
    } else {
      newArray.push(element);
    }
  });
  return newArray.join(" ");
}
