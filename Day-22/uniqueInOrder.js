let uniqueInOrder = (iterable) => {
  //your code here - remember iterable can be a string or an array
  if (typeof iterable === "string") {
    return iterable
      .split("")
      .filter((item, index) => item !== iterable[index - 1]);
  } else {
    return iterable.filter((item, index) => item !== iterable[index - 1]);
  }
};
