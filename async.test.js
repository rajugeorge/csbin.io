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
  async.delayGreet = () => {
    console.log("hello");
  };

  async.delayGreet();
});
test.todo("helloGoodbye");
test.todo("brokenRecord");
test.todo("limitedRepeat");
test.todo("everyXsecsForYsecs");
test.todo("delayCounter");
test.todo("promised");
test.todo("SecondClock");
test.todo("debounce");
