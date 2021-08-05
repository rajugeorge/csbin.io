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

//create a function with
// Input : no
function censor() {
  // create an object to hold the values to be censored
  const obj = {};
  // return a function that takes two params
  return function (str1, str2) {
    // if the second param is undefined then
    // replace the first param with censored values and return
    if (str2 === undefined) {
      let censored = str1;
      for (const key in obj) {
        censored = censored.replace(key, obj[key]);
      }
      return censored;
    }
    // add the two params to the object as key value pairs
    obj[str1] = str2;
  };
}

//create a function with
// Input : any value that is set as secret
function createSecretHolder(secret) {
  // create a param to hold the value
  let value = secret;
  // create an object
  let obj = {};
  obj.setSecret = (input) => {
    // create a set function and attach to object
    value = input;
  };
  // create a get function and attach to object
  obj.getSecret = () => {
    return value;
  };
  // return object
  return obj;
}

// create a function
// Input :
function callTimes() {
  // create a variable to track the number of times
  let count = 0;
  // return a function
  return function () {
    // update the call count and return it
    return ++count;
  };
}

// create a function
// Input : limit
function russianRoulette(num) {
  // create a variable to store the number of times the function is called.
  let i = 0;
  // return a function
  return function () {
    // update the variable
    i++;
    // if the variable is greater than limit return 'reload to play again'
    if (i > num) {
      return "reload to play again";
    } else if (i === num) {
      // if the variable is equal to limit return 'bang'
      return "bang";
    } else if (i < num) {
      // if the variable is less than limit return 'click'
      return "click";
    }
  };
}

// create a function
// input :
function average() {
  // create array to store the valid inputs
  let noOfElements = 0;
  // initalize the average variable to 0
  let sum = 0;
  // return a function which takes one input
  return function (input) {
    if (input) {
      noOfElements++;
      sum += input;
    }
    return noOfElements > 0 ? sum / noOfElements : 0;
  };
  // if the input is valid, add it to the array
  // divide the sum of the array by its length and return
}

// create a function
// input : array of arrays
function makeFuncTester(arrOfTests) {
  // return a function that takes a callback
  return function (cb) {
    // iterate the inputs
    for (let arr of arrOfTests) {
      // if the second element is not equal to the output from the callback to
      // which first element is passed return false
      if (arr[1] !== cb(arr[0])) {
        return false;
      }
    }
    // return true
    return true;
  };
}

// create a function with
// input : history limit
function makeHistory(limit) {
  // create history array
  let history = [];
  // create history array index
  let index = -1;
  return function (str) {
    // if push
    if (str !== "undo") {
      // increment the index
      index++;
      // if index > limit
      if (index >= limit) {
        // pop the first item from the array (shift)
        history.shift();
        index--;
      }
      // push to the array
      history.push(str);
      return str + " done";
    } else {
      // else
      // if undo
      // if index >=0
      // pop the last item

      if (index >= 0) {
        // reduce the index
        index--;
        var removedElement = history.pop();
        return removedElement + " undone";
      } else {
        // else
        // print "nothing to undo"
        return "nothing to undo";
      }
    }
  };
}

function blackjack(inputArr) {
  let index = 0;
  return function (num1, num2) {
    let started = false;
    let busted = false;
    let sum = 0;
    return function () {
      if (busted) {
        return "you are done!";
      }
      if (!started) {
        started = true;
        sum = num1 + num2;
      } else {
        sum += inputArr[index];
        index++;
      }
      if (sum > 21) {
        busted = true;
        return "bust";
      } else {
        return sum;
      }
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
  censor,
  createSecretHolder,
  callTimes,
  russianRoulette,
  average,
  makeFuncTester,
  makeHistory,
  blackjack,
};
