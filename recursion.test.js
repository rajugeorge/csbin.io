const recursion = require('./recursion');

test('countdown', () => {
  recursion.countdown(5);
  recursion.countdown(10);
});

test('sum array', () => {
  //   recursion.sum = (Array) => 3;

  const result1 = recursion.sum([1, 1, 1]);
  const result2 = recursion.sum([1, 2, 3, 4, 5, 6]);

  expect(result1).toEqual(3);
  expect(result2).toEqual(21);
});

test('palindrome', () => {
  // recursion.palindrome = (string) => true;
  expect(
    recursion.palindrome('Anne, I vote more cars race Rome-to-Vienna'),
  ).toBe(true); //-> true
  expect(recursion.palindrome('llama mall')).toBe(true); //-> true
  expect(recursion.palindrome('jmoney')).toBe(false); //-> false
});

test('isPrime', () => {
  // recursion.isPrime = (num) => true;
  expect(recursion.isPrime(1)).toBe(false); //-> false
  expect(recursion.isPrime(2)).toBe(true); //-> true
  expect(recursion.isPrime(3)).toBe(true); //-> true
  expect(recursion.isPrime(4)).toBe(false); //-> false
});

test('pathFinder', () => {
  // recursion.pathFinder = (obj, arr) => "finish";
  const obj1 = { first: 'start' };
  const obj2 = { first: 2 };
  const obj3 = { first: true };
  const obj4 = {
    first: { second: { third: 'finish' } },
    second: { third: 'wrong' },
  };

  const arr1 = ['first'];
  const arr2 = ['first', 'second', 'third'];
  const arr3 = ['second', 'third'];

  expect(recursion.pathFinder(obj1, arr1)).toEqual('start'); //->
  expect(recursion.pathFinder(obj2, arr1)).toEqual(2); //->
  expect(recursion.pathFinder(obj3, arr1)).toEqual(true); //->
  expect(recursion.pathFinder(obj4, arr1)).toEqual(undefined); //->
  expect(recursion.pathFinder(obj4, arr2)).toEqual('finish'); //->
  expect(recursion.pathFinder(obj4, arr3)).toEqual('wrong'); //->
});

test('flattenRecursively', () => {
  // recursion.flattenRecursively = (Array) => [1, 2, 3, 4];
  expect(recursion.flattenRecursively([[1, 3]])).toEqual([1, 3]);
  expect(recursion.flattenRecursively([1, [2, 3, [4]]])).toEqual([1, 2, 3, 4]); //->
  expect(recursion.flattenRecursively([1, {}, [3, [[4]]]])).toEqual([
    1,
    {},
    3,
    4,
  ]); //->
});

//Challenge 7
test('findInOrderedSet', () => {
  // recursion.findInOrderedSet = (i, j) => true;
  const nums1 = [];
  const nums2 = [2];
  const nums3 = [2, 3, 8];
  const nums4 = [2, 3, 8, 9];
  const nums5 = [1, 4, 6, 7, 9, 17, 45];

  expect(recursion.findInOrderedSet(nums1, 1)).toBe(false);
  expect(recursion.findInOrderedSet(nums2, 1)).toBe(false);
  expect(recursion.findInOrderedSet(nums2, 2)).toBe(true);
  expect(recursion.findInOrderedSet(nums3, 3)).toBe(true);
  expect(recursion.findInOrderedSet(nums3, 2)).toBe(true);
  expect(recursion.findInOrderedSet(nums3, 1)).toBe(false);
  expect(recursion.findInOrderedSet(nums3, 8)).toBe(true);
  expect(recursion.findInOrderedSet(nums3, 9)).toBe(false);
  expect(recursion.findInOrderedSet(nums4, 9)).toBe(true);
  expect(recursion.findInOrderedSet(nums5, 4)).toBe(true);
  expect(recursion.findInOrderedSet(nums5, 2)).toBe(false);
});

test('countWaysToReachNthStair', () => {
  // recursion.countWaysToReachNthStair = (num) => 1;
  expect(recursion.countWaysToReachNthStair(1)).toEqual(1); //-> 1 (only one way to climb 1 stair)
  expect(recursion.countWaysToReachNthStair(2)).toEqual(2); //-> 2 ((1, 1), (2))
  expect(recursion.countWaysToReachNthStair(4)).toEqual(5); //-> 5 ((1, 1, 1, 1), (1, 1, 2), (2, 1, 1), (2, 2))
});

// test("getPermutations", () => {
//   // recursion.getPermutations = (array) => [1, 2];
//   expect(recursion.getPermutations([1, 2])).toEqual([
//     [1, 2],
//     [2, 1],
//   ]); //->
//   expect(recursion.getPermutations([1, 2, 3])).toEqual([
//     [1, 2, 3],
//     [1, 3, 2],
//     [2, 1, 3],
//     [2, 3, 1],
//     [3, 1, 2],
//     [3, 2, 1],
//   ]); //->
// });

test('getRangeBetween', () => {
  // recursion.getRangeBetween = (start, end) => [1, 2, 3];

  expect(recursion.getRangeBetween(2, 9)).toEqual([3, 4, 5, 6, 7, 8]);
  expect(recursion.getRangeBetween(-5, 5)).toEqual([
    -4, -3, -2, -1, 0, 1, 2, 3, 4,
  ]);
});
