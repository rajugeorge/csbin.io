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

// create a function with
// Input : count on which the passed fn should be called, fn
function after(count, func) {
  // create a count
  let called = 0;
  // create a function copy that takes the argument which will
  // be passed to the passed function
  const copyFn = (...args) => {
    // increment count
    called++;
    // check if count is greater than or equal to the passed limit
    if (called >= count) {
      // if the count is equal to greater than the limit call the passed fn.
      func(...args);
    }
  };
  // return function copy
  return copyFn;
}

// create a function with
// Input : function, delay, extra params

function delay(func, wait, ...rest) {
  // create a function copy
  const copyFn = (...args) => {
    // merge the extra params with the function params.
    const mergedParams = [...rest, ...args];
    // start a timer and call the passed function after the delay
    setTimeout(() => {
      func(...mergedParams);
    }, wait);
  };
  // return the copy function
  return copyFn;
}

function rollCall(names) {
  let index = 0;
  return function () {
    let name = "Everyone accounted for";
    if (index < names.length) {
      name = names[index];
      index++;
    }
    return name;
  };
}

module.exports = {
  createFunction,
  createFunctionPrinter,
  outer,
  addByX,
  once,
  after,
  delay,
  rollCall,
};
