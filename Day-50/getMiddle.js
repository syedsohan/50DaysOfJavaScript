function getMiddle(s) {
  // your code here
  let middle = "";
  if (s.length % 2 === 0) {
    middle = s.substring(s.length / 2 - 1, s.length / 2 + 1);
  } else {
    middle = s.substring(s.length / 2 - 0.5, s.length / 2 + 0.5);
  }
  return middle;
}
