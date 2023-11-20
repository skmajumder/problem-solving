const createCounter = function (init) {
  let initCount = init; // * Hidden state

  const increment = () => ++initCount;

  const decrement = () => --initCount;

  const reset = () => (initCount = init);

  return {
    increment,
    decrement,
    reset,
  };
};

const counter = createCounter(5);

console.log(counter.increment());
console.log(counter.reset());
console.log(counter.decrement());
