const async = require("./async");

afterEach(() => {
  jest.useRealTimers();
});

test("testMe", () => {
  // async.testMe = () => "Partnah";
  jest.useFakeTimers();
  async.testMe();
  jest.runAllTimers();
});

test("delayedGreet", () => {
  // async.delayedGreet = () => {
  //   console.log("hello");
  // };
  jest.useFakeTimers();
  async.delayedGreet();
  jest.runAllTimers();
});

test("helloGoodbye", () => {
  // async.helloGoodbye = ()=>{console.log("hello");}

  jest.useFakeTimers();
  async.helloGoodbye();
  jest.runAllTimers();
});

test("brokenRecord", () => {
  // async.brokenRecord = ()=>{console.log("Broken record");}
  jest.useFakeTimers();
  async.brokenRecord();
  jest.runAllTimers();
});

test("limitedRepeat", () => {
  // async.limitedRepeat = (input) => {
  //   console.log("limitedRepeat");
  // };
  jest.useFakeTimers();
  async.limitedRepeat(5);
  jest.runAllTimers();
});
test.todo("everyXsecsForYsecs");
test.todo("delayCounter");
test.todo("promised");
test.todo("SecondClock");
test.todo("debounce");
