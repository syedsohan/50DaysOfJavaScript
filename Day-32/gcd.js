function gcd(a, b) {
  // write your code here
  return b === 0 ? a : gcd(b, a % b);
}

const a = 2154;
const b = 458;

console.log("The GCD of " + a + " ", b + " is " + gcd(a, b));
