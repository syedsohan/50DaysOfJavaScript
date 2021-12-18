function fibonacci(n) {
  // write your solution here

  return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(`fibonacci value at position 5: ${fibonacci(5)}`);
