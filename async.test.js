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
test("helloGoodbye", ()=>{
  // async.helloGoodbye = ()=>{console.log("hello");}

  jest.useFakeTimers();
  async.helloGoodbye()
  jest.runAllTimers()
});
test.todo("brokenRecord");
test.todo("limitedRepeat");
test.todo("everyXsecsForYsecs");
test.todo("delayCounter");
test.todo("promised");
test.todo("SecondClock");
test.todo("debounce");
