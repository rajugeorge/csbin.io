function sayHowdy() {
  console.log('Howdy');
}

function testMe() {
  setTimeout(sayHowdy, 0);
  console.log('Partnah');
}

function delayedGreet() {
  setTimeout(() => {
    console.log('hello');
  }, 3000);
}

function helloGoodbye() {
  console.log('hello');
  setTimeout(() => {
    console.log('Goodbye');
  }, 3000);
}

function brokenRecord() {
  let count = 0;
  const timeInterval = setInterval(() => {
    if (count < 10) {
      console.log('hi again');
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
      console.log('hi for now');
      count++;
    } else {
      clearInterval(timeInterval);
    }
  }, 1000);
}

function everyXsecsForYsecs(cb, interval, duration) {
  let intervalSum = 0;
  const timeInterval = setInterval(() => {
    intervalSum += interval;
    if (intervalSum <= duration) {
      cb();
    } else {
      clearInterval(timeInterval);
    }
  }, interval);
}

function promised(val) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(val);
    }, 2000);
  });
}

class SecondClock {
  constructor(cb) {
    this.cb = cb;
    this.secCount = 0;
    this.secInterval = 0;
  }
  start() {
    this.secInterval = setInterval(() => {
      this.secCount++;
      this.secCount = this.secCount > 60 ? 1 : this.secCount;
      this.cb(this.secCount);
    }, 1000);
  }

  reset() {
    this.secCount = 0;
    clearInterval(this.secInterval);
  }
}

function debounce(cb, timeout) {
  let timer = undefined;
  return function (...args) {
    if (timer === undefined) {
      timer = setTimeout(() => {
        timer = undefined;
      }, timeout);
      return cb(...args);
    }
    return undefined;
  };
}

module.exports = {
  testMe,
  delayedGreet,
  helloGoodbye,
  brokenRecord,
  limitedRepeat,
  everyXsecsForYsecs,
  promised,
  SecondClock,
  debounce,
};
