const closures = require("./closures");

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
