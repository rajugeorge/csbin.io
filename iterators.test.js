const iterators = require('./iterators');

afterEach(() => {
  jest.useRealTimers();
});

test('sumFunc', () => {
  //   iterators.sumFunc = (array) => 15;

  const result = iterators.sumFunc([1, 2, 3, 4, 5, 6]);

  expect(result).toEqual(21);
});

test('returnIterator', () => {
  //   iterators.returnIterator = (array) => () => array[0];

  const array2 = ['a', 'b', 'c', 'd'];
  const myIterator = iterators.returnIterator(array2);

  expect(myIterator()).toEqual('a'); // -> should log 'a'
  expect(myIterator()).toEqual('b'); // -> should log 'b'
  expect(myIterator()).toEqual('c'); // -> should log 'c'
  expect(myIterator()).toEqual('d'); // -> should log 'd'
});

test('nextIterator', () => {
  //   iterators.nextIterator = (array) => {
  //     return {
  //       next() {
  //         return array[0];
  //       },
  //     };
  //   };

  const array3 = [1, 2, 3];
  const iteratorWithNext = iterators.nextIterator(array3);
  expect(iteratorWithNext.next()).toEqual(1); // -> should log 1
  expect(iteratorWithNext.next()).toEqual(2); // -> should log 2
  expect(iteratorWithNext.next()).toEqual(3); // -> should log 3
});

test('sumArray', () => {
  // iterators.sumArray = (array) => 10;

  const array4 = [1, 2, 3, 4];
  const result = iterators.sumArray(array4);

  expect(result).toEqual(10); // -> should log 10
});

test('setIterator', () => {
  // iterators.setIterator = (set) => {
  //   return {
  //     next() {
  //       return "h";
  //     },
  //   };
  // };

  const mySet = new Set('hey');
  const iterateSet = iterators.setIterator(mySet);
  expect(iterateSet.next()).toEqual('h'); // -> should log 'h'
  expect(iterateSet.next()).toEqual('e'); // -> should log 'e'
  expect(iterateSet.next()).toEqual('y'); // -> should log 'y'
});

test('indexIterator', () => {
  // iterators.indexIterator = (array) => {
  //   return {
  //     next: function () {
  //       return [0, "a"];
  //     },
  //   };
  // };

  const array5 = ['a', 'b', 'c', 'd'];
  const iteratorWithIndex = iterators.indexIterator(array5);
  expect(iteratorWithIndex.next()).toEqual([0, 'a']); // -> should log [0, 'a']
  expect(iteratorWithIndex.next()).toEqual([1, 'b']); // -> should log [1, 'b']
  expect(iteratorWithIndex.next()).toEqual([2, 'c']); // -> should log [2, 'c']
  expect(iteratorWithIndex.next()).toEqual([3, 'd']); // -> should log [2, 'c']
  expect(iteratorWithIndex.next()).toEqual(undefined); // -> should log [2, 'c']
});

test('Words', () => {
  // iterators.Words = function (string) {
  //   this.str = string;
  // };

  const helloWorld = new iterators.Words('Hello World');
  let result = [];
  for (word of helloWorld) {
    result.push(word);
  }
  expect(result).toEqual(['Hello', 'World']);
});

test('valueAndPrevIndex', () => {
  // iterators.valueAndPrevIndex = (array) => {
  //   return {
  //     sentence: function () {
  //       return "4 is the first";
  //     },
  //   };
  // };

  const returnedSentence = iterators.valueAndPrevIndex([4, 5, 6]);
  expect(returnedSentence.sentence()).toEqual('4 is the first');
  expect(returnedSentence.sentence()).toEqual('5 was found after index 0');
  expect(returnedSentence.sentence()).toEqual('6 was found after index 1');
  expect(returnedSentence.sentence()).toEqual(undefined);
});

test('createConversation', () => {
  // iterators.createConversation = (string) => {
  //   return {
  //     next() {
  //       return "hello there";
  //     },
  //   };
  // };

  const iterator = iterators.createConversation('english');
  jest.useFakeTimers();
  const interval = iterator.next();
  jest.runAllTimers();
});

test('f', async () => {
  // iterators.f = async (noun) => noun + " sitting";
  iterators.waitForVerb = jest.fn((noun) => noun + ' ' + 'sitting');
  const result = await iterators.f('Human');
  expect(result).toEqual('Human sitting');
});
