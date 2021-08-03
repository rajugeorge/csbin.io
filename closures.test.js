const closures = require("./closures");

afterEach(() => {
  jest.useRealTimers();
});

test("createFunction", () => {
  let wrapper = closures.createFunction;

  let closure = jest.fn(wrapper());

  expect(typeof closure).toBe("function");
});

test("createFunctionPrinter", () => {
  //   closures.createFunctionPrinter = jest.fn((sample) => () => sample);

  const wrapper = jest.fn(closures.createFunctionPrinter);

  const closure1 = jest.fn(wrapper("sample"));
  const closure2 = jest.fn(wrapper("hello"));

  expect(typeof closure1).toBe("function");
  expect(typeof closure2).toBe("function");
  expect(wrapper.mock.calls).toEqual([["sample"], ["hello"]]);
});

test("outer", () => {
  // closures.outer = jest.fn(() => () => {
  //   console.log("done");
  // });

  const wrapper = closures.outer;
  const closure1 = wrapper();
  const closure2 = wrapper();

  // closure1();
  // closure1();
  // closure1();
  // closure2();
  // closure1();

  expect(typeof closure1).toBe("function");
});

test("addByX", () => {
  // closures.addByX = jest.fn((x) => (i) => 4);

  const addByTwo = closures.addByX(2);
  const addByThree = closures.addByX(3);
  const addByFour = closures.addByX(4);

  const result1 = addByTwo(1);
  const result2 = addByTwo(2);
  const result3 = addByTwo(3);

  const result4 = addByThree(1);
  const result5 = addByThree(2);

  const result6 = addByFour(4);
  const result7 = addByFour(5);

  expect(result1).toEqual(3);
  expect(result2).toEqual(4);
  expect(result3).toEqual(5);

  expect(result4).toEqual(4);
  expect(result5).toEqual(5);

  expect(result6).toEqual(8);
  expect(result7).toEqual(9);
});

test("once", () => {
  // closures.once = jest.fn(
  //   (fn) =>
  //     (...args) =>
  //       6
  // );

  const addByTwo = (i) => i + 2;

  const onceFunc = closures.once(addByTwo);

  const result1 = onceFunc(4);
  const result2 = onceFunc(10);
  const result3 = onceFunc(9001);

  expect(result1).toEqual(6);
  expect(result2).toEqual(6);
  expect(result3).toEqual(6);
});

test("after", () => {
  // closures.after = jest.fn(
  //   (count, fn) =>
  //     (...args) =>
  //       fn(...args)
  // );

  const called = jest.fn(function () {
    console.log("hello");
  });
  const afterCalled = closures.after(3, called);

  afterCalled();
  afterCalled();
  afterCalled();

  expect(called).toHaveBeenCalledTimes(1);
});

test("delay", () => {
  // closures.delay = jest.fn((fn, wait, ...rest) => (...args) => {
  //   fn(...rest, ...args);
  // });

  jest.useFakeTimers();

  const called = jest.fn(function (...args) {
    console.log(...args);
  });

  const delayCalled = closures.delay(called, 2000, 1, 2, 3);

  delayCalled(4, 5, 6);

  // At this point in time, the callback should not have been called yet
  expect(called).not.toBeCalled();

  // Fast-forward until all timers have been executed
  jest.runAllTimers();

  // Now our callback should have been called!
  expect(called).toHaveBeenCalledTimes(1, 2, 3, 4, 5, 6);
});

test("rollCall", () => {
  // closures.rollCall = jest.fn((names) => () => "Victoria");

  const rollCaller = closures.rollCall(["Victoria", "Juan", "Ruth"]);
  const result1 = rollCaller();
  const result2 = rollCaller();
  const result3 = rollCaller();
  const result4 = rollCaller();

  const rollCaller2 = closures.rollCall([]);
  const result5 = rollCaller2();

  expect(result1).toEqual("Victoria");
  expect(result2).toEqual("Juan");
  expect(result3).toEqual("Ruth");
  expect(result4).toEqual("Everyone accounted for");
  expect(result5).toEqual("Everyone accounted for");
});

test("8. saveOutput", () => {
  // closures.saveOutput = (fn, magicWord) => (num) => {
  //   return { 2: 4, 9: 18 };
  // };

  const multiplyBy2 = (num) => num * 2;
  const multBy2AndLog = closures.saveOutput(multiplyBy2, "boo");
  multBy2AndLog(2);
  multBy2AndLog(9);
  const total = multBy2AndLog("boo");

  expect(total).toEqual({ 2: 4, 9: 18 });
});

test("cycleIterator", () => {
  // closures.cycleIterator = jest.fn((input) => () => "Fri");

  const getDay = closures.cycleIterator(["Fri", "Sat", "Sun"]);
  const result1 = getDay();
  const result2 = getDay();
  const result3 = getDay();
  const result4 = getDay();

  expect(result1).toEqual("Fri");
  expect(result2).toEqual("Sat");
  expect(result3).toEqual("Sun");
  expect(result4).toEqual("Fri");
});
