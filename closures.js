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

module.exports = {
  createFunction,
  createFunctionPrinter,
};
