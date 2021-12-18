const number = "+919876543210";

function validateMobile(number) {
  // write your solution here

  return number.match(/^(\+91|0)?\s?\d{10}$/) ? true : false;
}

console.log(`is a valid Indian mobile number: ${validateMobile(number)}`);
