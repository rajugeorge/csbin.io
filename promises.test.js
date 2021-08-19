// uncomment below line if you are returning the promise commented for second challenge in promises.js
//jest.useFakeTimers();
const promises = require("./promises");

afterEach(() => {
  jest.useRealTimers();
});

test("sayHello", () => {
  //   promises.sayHello = () => "Hello!";

  jest.useFakeTimers();
  promises.sayHello();
  jest.runAllTimers();
});

test("promise", async () => {
  // promises.promise = Promise.resolve("Resolved!!");
  jest.useFakeTimers();
  const spy = jest.fn((data) => {
    expect(data).toEqual("Resolved!!!");
  });
  promises.promise().then(spy);
  jest.runAllTimers();
  await Promise.resolve(); // execute the promises in the Promises Job Queue
  expect(spy).toHaveBeenCalled();
});

test("promise2", async () => {
  jest.useFakeTimers();
  const spy = jest.fn((data) => {
    expect(data).toEqual("Rejected!!!");
  });
  promises.promise2().catch(spy);
  jest.runAllTimers();
  await Promise.resolve(); // execute the promises in the Promises Job Queue
  expect(spy).toHaveBeenCalled();
});

// TBD
test("delay", async () => {
  // promises.delay = () => Promise.resolve();
  jest.useFakeTimers();
  const sayHello = jest.fn(promises.sayHello);
  promises.delay().then(sayHello);
  jest.runAllTimers();
  await Promise.resolve();
  expect(sayHello).toHaveBeenCalled();
});

test("promiseChain", async () => {
  // promises.secondPromise = Promise.resolve("Second!!!");
  // promises.firstPromise = Promise.resolve(promises.secondPromise);

  const secondPromise = promises.secondPromise();
  const firstPromise = promises.firstPromise(secondPromise);

  firstPromise.then().then((data) => {
    expect(data).toEqual("Second!!!");
  });

  await Promise.resolve();
});

test("promiseAll", async () => {
  promises.getAllData().then((values) => {
    expect(values).toEqual([
      { currentTemp: 98.6, hasPets: false, name: "Rudolph" },
      { currentTemp: 22.6, hasPets: true, name: "Zebulon" },
      { currentTemp: 98.3, hasPets: true, name: "Harold" },
    ]);
  });
});
