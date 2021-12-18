/**
 *
 * @param {number[]} digits Array of valid digits of baseA
 * @param {number} baseA base a
 * @param {number} baseB base b in which digits are to be converted
 * @returns {number[]} Array of valid digits of baseB
 */
const convertDigitsToAskedBase = (digits, baseA, baseB) => {
  // Your code here
  let result = [];
  let temp = 0;
  for (let i = 0; i < digits.length; i++) {
    temp += digits[i] * Math.pow(baseA, digits.length - i - 1);
  }
  while (temp > 0) {
    result.push(temp % baseB);
    temp = Math.floor(temp / baseB);
  }
  return result.reverse();
};
