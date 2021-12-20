const unionOfArrays = (arr1, arr2) => {
  // code below here
  let union = [...arr1, ...arr2];
  let unique = union.filter((item, index) => {
    return union.indexOf(item) === index;
  });
  return unique;
};

console.log(`The union is ${unionOfArrays([1, 2, 34, 45, 3], [3, 24, 21])}`);
