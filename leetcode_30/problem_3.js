const createCounter = function (init) {
  let initCount = init; // * Hidden state

  function increment() {
    return ++initCount;
  }
  function decrement() {
    return --initCount;
  }
  function reset() {
    return (initCount = init);
  }

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
