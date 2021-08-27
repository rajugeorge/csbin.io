const async = require('./async');

afterEach(() => {
  jest.useRealTimers();
});

test('testMe', () => {
  // async.testMe = () => "Partnah";
  jest.useFakeTimers();
  async.testMe();
  jest.runAllTimers();
});

test('delayedGreet', () => {
  // async.delayedGreet = () => {
  //   console.log("hello");
  // };
  jest.useFakeTimers();
  async.delayedGreet();
  jest.runAllTimers();
});

test('helloGoodbye', () => {
  // async.helloGoodbye = ()=>{console.log("hello");}

  jest.useFakeTimers();
  async.helloGoodbye();
  jest.runAllTimers();
});

test('brokenRecord', () => {
  // async.brokenRecord = ()=>{console.log("Broken record");}
  jest.useFakeTimers();
  async.brokenRecord();
  jest.runAllTimers();
});

test('limitedRepeat', () => {
  // async.limitedRepeat = (input) => {
  //   console.log("limitedRepeat");
  // };
  jest.useFakeTimers();
  async.limitedRepeat(5);
  jest.runAllTimers();
});

test('everyXsecsForYsecs', () => {
  // async.everyXsecsForYsecs = (cb, interval, duration) => {
  //   console.log("object");
  // };

  const theEnd = jest.fn(function () {
    console.log('This is the end!');
  });

  let interval = 2;
  let duration = 20;
  let callTimes = Math.floor(duration / interval);

  jest.useFakeTimers();
  async.everyXsecsForYsecs(theEnd, interval, duration);
  jest.runAllTimers();
  expect(theEnd).toHaveBeenCalledTimes(callTimes);

  interval = 1000;
  duration = 5000;
  callTimes = Math.floor(duration / interval);
  theEnd.mockRestore();

  jest.useFakeTimers();
  async.everyXsecsForYsecs(theEnd, interval, duration);
  jest.runAllTimers();
  expect(theEnd).toHaveBeenCalledTimes(callTimes);
});

test('delayCounter', () => {
  async.delayCounter = () => () => {
    console.log(1);
  };

  let target = 3;
  let wait = 1000;
  const countLogger = async.delayCounter(target, wait);
  countLogger();
});

test('promised', async () => {
  // async.promised = (val) => Promise.resolve(val);

  jest.useFakeTimers();
  const createPromise = async.promised('wait for it...');
  createPromise.then((val) => console.log(val));
  jest.runAllTimers();
});

test('SecondClock', () => {
  // async.SecondClock = class SecondClock {
  //   start() {
  //     console.log("started");
  //   }
  //   reset() {
  //     console.log("reset");
  //   }
  // };

  jest.useFakeTimers();

  const clock = new async.SecondClock((val) => {
    console.log(val);
  });
  console.log('Started Clock.');
  clock.start();
  setTimeout(() => {
    clock.reset();
    console.log('Stopped Clock after 6 seconds.');
  }, 6000);
  jest.runAllTimers();
});

test('debounce', () => {
  // async.debounce =
  //   (func, timeout) =>
  //   (...args) =>
  //     func(...args);

  jest.useFakeTimers();

  const giveHi = jest.fn(function () {
    return 'hi';
  });
  const giveHiSometimes = async.debounce(giveHi, 3000);
  expect(giveHiSometimes()).toEqual('hi'); // -> 'hi'
  setTimeout(function () {
    expect(giveHiSometimes()).toEqual(undefined);
  }, 2000); // -> undefined

  setTimeout(function () {
    expect(giveHiSometimes()).toEqual('hi');
  }, 4000); // -> 'hi'
  setTimeout(function () {
    expect(giveHiSometimes()).toEqual('hi');
  }, 8000); // -> 'hi'
  jest.runAllTimers();
});
