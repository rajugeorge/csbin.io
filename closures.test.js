const closures = require("./closures");

test("createFunction", () => {
  let result = jest.fn(closures.createFunction());

  expect(typeof result).toBe("function");
});

test("createFunctionPrinter", () => {
  //   closures.createFunctionPrinter = jest.fn((sample) => () => sample);

  let resultFn = jest.fn(closures.createFunctionPrinter);

  resultFn("sample");
  resultFn("hello");

  expect(typeof resultFn).toBe("function");
  expect(resultFn.mock.calls).toEqual([["sample"], ["hello"]]);
});
