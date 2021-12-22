function openOrSenior(data) {
  // your code goes below
  return data.map(function (person) {
    if (person[0] >= 55 && person[1] > 7) return "Senior";
    else return "Open";
  });
}

let output = openOrSenior([
  [45, 12],
  [55, 21],
  [19, -2],
  [104, 20],
]);

console.log(output);
