const functional = require("./functional");

test("functionValidator", () => {
  const addFive = (num) => num + 5;
  const multiplyByTwo = (num) => num * 2;
  const subtractOne = (num) => num - 1;
  const fnArr = [addFive, multiplyByTwo, subtractOne];
  expect(functional.functionValidator(fnArr, 5, 10)).toEqual([
    addFive,
    multiplyByTwo,
  ]);
});

test("allClear", () => {
  const isOdd = (num) => num % 2 === 1;
  const isPositive = (num) => num > 0;
  const multipleOfFive = (num) => num % 5 === 0;
  const numFnArr = [isOdd, isPositive, multipleOfFive];

  expect(functional.allClear(numFnArr, 25)).toBe(true); // should log true
  expect(functional.allClear(numFnArr, -25)).toBe(false); // should log false
});

test("numSelectString", () => {
  const nums = [17, 34, 3, 12];
  expect(functional.numSelectString(nums)).toEqual("3, 17"); // should log "3, 17"
});

test("movieSelector", () => {
  const movies = [
    { id: 1, title: "Pan's Labyrinth", score: 9 },
    { id: 37, title: "Manos: The Hands of Fate", score: 2 },
    { title: "Air Bud", score: 5 },
    { title: "Hackers", score: 7 },
  ];
  expect(functional.movieSelector(movies)).toEqual([
    "PAN'S LABYRINTH",
    "HACKERS",
  ]);
});

test("curriedAddThreeNums", () => {
  expect(functional.curriedAddThreeNums(3)(-1)(1)).toEqual(3);
});

test("curriedAddTwoNumsToFive", () => {
  expect(functional.curriedAddTwoNumsToFive(6)(7)).toEqual(18);
  functional._curry((a, b) => a);
});
