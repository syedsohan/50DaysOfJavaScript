const str = "XeroX";

function getTheGapX(str) {
  // write your solution here

  return str.indexOf("X") === -1 ? -1 : str.lastIndexOf("X") - str.indexOf("X");
}

console.log(`Gap between the X's: ${getTheGapX(str)}`);
