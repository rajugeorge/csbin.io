function createFunction() {
  function callHello() {
    console.log("hello");
  }
  return callHello;
}

//create a function
//input : String
function createFunctionPrinter(input) {
  //return a function
  return function () {
    //print the input string
    console.log(input);
  };
}

function outer() {
  let counter = 0; // this variable is outside incrementCounter's scope
  function incrementCounter() {
    counter++;
    console.log("counter", counter);
  }
  return incrementCounter;
}

function addByX(x) {
  return function (i) {
    return i + x;
  };
}

function once(fn) {
  let result = 0;
  let runOnce = false;
  const copyFn = (...args) => {
    if (!runOnce) {
      result = fn(...args);
      runOnce = true;
    }
    return result;
  };
  return copyFn;
}

module.exports = {
  createFunction,
  createFunctionPrinter,
  outer,
  addByX,
  once,
};
