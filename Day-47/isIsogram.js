function isIsogram(str) {
  // your code here
  let stringArray = str.split("");
  let stringArray1 = str.toLowerCase().split("");
  let set = new Set(stringArray1);
  if (stringArray.length === set.size) return true;
  else return false;
}
