const createHelloWorld = function () {
  return function () {
    return "Hello World 2";
  };
};

const f = createHelloWorld();
console.log(f());
