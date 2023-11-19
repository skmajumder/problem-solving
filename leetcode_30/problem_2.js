// * "createCounter" is factory function, because that returns another function.
const createCounter = function (n) {
  let count = n; // * Hidden state

  return function () {
    return count++;
  };
};

const counter = createCounter(10);

console.log(counter());
console.log(counter());
