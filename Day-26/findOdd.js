function findOdd(arr) {
  //happy coding!
  return arr.find((num) => arr.filter((x) => x === num).length % 2 !== 0);
}
