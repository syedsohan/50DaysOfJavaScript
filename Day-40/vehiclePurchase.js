const needsLicense = (kind) => {
  // code here

  return ["car", "truck"].includes(kind);
};

const chooseVehicle = (option1, option2) => {
  // code here

  return `${
    option1.localeCompare(option2) === 1 ? option2 : option1
  } is clearly the better choice.`;
};

const calculateResellPrice = (originalPrice, age) => {
  // code here

  let factor = 0;
  if (age > 10) return 0.5 * originalPrice;
  if (age < 3) return 0.8 * originalPrice;
  else return 0.7 * originalPrice;
};
