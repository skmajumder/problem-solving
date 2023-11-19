const createHelloWorld = function () {
  return function () {
    return "Hello World 2";
  };
};

const f = createHelloWorld();
console.log(f());

// * closure
// function createCounter() {
//   let value = 0; // * Hidden state

//   function increment() {
//     return ++value;
//   }

//   return {
//     increment,
//   };
// }

// const counter = createCounter();
// const counter2 = createCounter();

// console.log(counter.increment());
// console.log(counter.increment());
// console.log(counter.increment());
// console.log(counter2.increment());
