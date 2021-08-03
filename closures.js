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

//create a function with
// input : function that takes only one argument, string for password
function saveOutput(func, magicWord) {
  // create an object to store all the inputs and outputs
  const obj = {};
  // create a function copy that accepts only one argument
  const copyObj = (input) => {
    // if the input is similar to password return the object
    if (input === magicWord) {
      return obj;
    }
    // else pass the input to the function and store the result in object
    obj[input] = func(input);
  };
  //return the function copy
  return copyObj;
}

// create a function with
// Input : function that takes no argument
function cycleIterator(array) {
  // store the index with initial value as 0
  let index = 0;
  // create and return a function that takes no arguments
  return function () {
    // create a variable to store the value in current index.
    let name = "";
    // if index is greater than or equal to array length
    if (index >= array.length) {
      // reset the index to 0
      index = 0;
    }
    // store the value at current index
    name = array[index];
    // increment the index
    index++;
    // return the value
    return name;
  };
}

// create a function with
// Input : callback , value
function defineFirstArg(func, arg) {
  // return a function that takes arguments
  return function (...args) {
    // return the result by calling the passed fn
    // with first parameter as the arg passed to the main fn
    return func(arg, ...args);
  };
}

// create a function with
// Input : function that take any number of arguments
function dateStamp(func) {
  // return a function that takes any number of arguments
  // and returns an object with date as current date and output
  // as the result of executing the passed function
  return function (...args) {
    return {
      date: Date.now(),
      output: func(...args),
    };
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
  saveOutput,
  cycleIterator,
  defineFirstArg,
  dateStamp,
};
