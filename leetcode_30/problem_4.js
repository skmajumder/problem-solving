const map = function (arr, fn) {
  const returnedArray = new Array(arr.length);

  for (const index in arr) {
    returnedArray[index] = fn(arr[index], Number(index));
  }
  return returnedArray;
};
