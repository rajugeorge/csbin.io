function sayHowdy() {
  console.log("Howdy");
}

function testMe() {
  setTimeout(sayHowdy, 0);
  console.log("Partnah");
}

function delayedGreet() {
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

function brokenRecord() {
  let count = 0;
  const timeInterval = setInterval(() => {
    if (count < 10) {
      console.log("hi again");
      count++;
    } else {
      clearInterval(timeInterval);
    }
  }, 1000);
}

function limitedRepeat(limit) {
  let count = 0;
  const timeInterval = setInterval(() => {
    if (count < limit) {
      console.log("hi for now");
      count++;
    } else {
      clearInterval(timeInterval);
    }
  }, 1000);
}

module.exports = {
  testMe,
  delayedGreet,
  helloGoodbye,
  brokenRecord,
  limitedRepeat,
};
