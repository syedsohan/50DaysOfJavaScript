const DAY_IN_MILLISECONDS = 1000 * 60 * 60 * 24;

function getDaysBetweenDates(dateText1, dateText2) {
  // write your solution here

  return Math.round(
    (new Date(dateText2) - new Date(dateText1)) / DAY_IN_MILLISECONDS
  );
}

console.log(
  `Days difference: ${getDaysBetweenDates("10/15/2020", "12/1/2020")}`
);
