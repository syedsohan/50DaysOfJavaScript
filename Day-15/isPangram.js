const isPangram = (input) => {
  // Code here
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let pangram = true;
  let inputLower = input.toLowerCase();
  for (let i = 0; i < alphabet.length; i++) {
    if (!inputLower.includes(alphabet[i])) {
      pangram = false;
    }
  }
  return pangram;
};

console.log(
  `Pangram: ${isPangram("The quick brown fox jumps over the lazy dog.")}`
);
