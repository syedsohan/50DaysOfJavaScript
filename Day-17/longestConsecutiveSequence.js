/**
 *
 * @param {number[]} inputArray Array of numbers
 */
const longestConsecutiveSequence = (inputArray) => {
  // Your code here
  if (!inputArray.length) return 0;

  const set = new Set(inputArray);
  let max = 0;

  for (const element of set) {
    if (set.has(element - 1)) continue;

    let currentElement = element;
    let currentMax = 1;

    while (set.has(currentElement + 1)) {
      currentElement++;
      currentMax++;
    }

    max = Math.max(max, currentMax);
  }

  return max;
};
