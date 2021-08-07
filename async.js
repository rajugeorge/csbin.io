function sayHowdy() {
  console.log("Howdy");
}

function testMe() {
  setTimeout(sayHowdy, 0);
  console.log("Partnah");
}

function delayedGreet(){
  setTimeout(() => {
    console.log("hello");
  }, 3000);
}

function helloGoodbye() {
  console.log("hello");
  setTimeout(() => {
    console.log("Goodbye");
  }, 3000);
}

module.exports = {
  testMe,
  delayedGreet,
  helloGoodbye
};
