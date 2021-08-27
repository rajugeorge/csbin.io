const csbin = require('./callbacks');

describe('array functions', () => {
  test('Array forEach', () => {
    let result = '';
    csbin.forEach(['a', 'b', 'c'], (input) => {
      result += input;
    });

    let expected = 'abc';

    expect(result).toBe(expected);
  });

  test('Array Every', () => {
    let result = '';
    csbin.every(['a', 'b', 'c'], (input) => {
      result += input;
      if (input === 'b') {
        return false;
      }
      return true;
    });

    let expected = 'ab';

    expect(result).toBe(expected);
  });

  test('Array Map', () => {
    const callback = jest.fn((input) => input + 2);
    let result = csbin.map([1, 2, 3], callback);
    let expected = [3, 4, 5];

    expect(result).toEqual(expected);
    expect(callback.mock.calls).toEqual([[1], [2], [3]]);
  });

  test('Array Includes', () => {
    const result = csbin.includes([5, 10, 15, 20], 10);
    const expected = true;

    expect(result).toEqual(expected);
  });

  test('Array filter', () => {
    const result = csbin.filter([5, 10, 15, 20], (item) => item > 10);
    const expected = [15, 20];

    expect(result).toEqual(expected);
  });
  test('Array Reducer', () => {
    let result = csbin.reduce(
      [1, 2, 3, 4, 5, 6],
      (accumulator, input) => {
        return input % 2 == 0 ? accumulator + input : accumulator;
      },
      0,
    );

    let expected = 12;

    expect(result).toBe(expected);
  });

  test('Object forEach', () => {
    let result = '';
    const callback = (value, key) => (result += key + value);
    csbin.forEachObject({ a: 'one', b: 2, c: true }, callback);
    let expected = 'aoneb2ctrue';

    expect(result).toEqual(expected);
  });
});

test('Add two numbers', () => {
  const result = csbin.addTwo(3);
  const expected = 5;

  const result2 = csbin.addTwo(10);
  const expected2 = 12;

  expect(result).toBe(expected);
  expect(result2).toBe(expected2);
});

test('Intersection', () => {
  const result = csbin.intersection(
    [5, 10, 15, 5, 20, 1, 1, 1, 1, 1],
    [15, 88, 1, 5, 7],
    [1, 10, 15, 5, 1, 20],
  );
  const expected = [5, 15, 1];

  expect(result).toEqual(expected);
});

test('Union', () => {
  const result = csbin.union(
    [5, 10, 15],
    [15, 88, 1, 5, 7],
    [100, 15, 10, 1, 5],
  );
  const expected = [5, 10, 15, 88, 1, 7, 100];

  expect(result).toEqual(expected);
});

test('objOfMatches', () => {
  // csbin.objOfMatches = jest.fn((input) => {
  //   return { hi: "HI", bye: "BYE", later: "LATER" };
  // });
  let result = csbin.objOfMatches(
    ['hi', 'howdy', 'bye', 'later', 'hello'],
    ['HI', 'Howdy', 'BYE', 'LATER', 'hello'],
    function (str) {
      return str.toUpperCase();
    },
  );
  let expected = { hi: 'HI', bye: 'BYE', later: 'LATER' };

  expect(result).toEqual(expected);
});

test('multiMap', () => {
  // csbin.multiMap = jest.fn((input) => {
  //   return {
  //     catfood: ["CATFOOD", "Catfood", "catfoodcatfood"],
  //     glue: ["GLUE", "Glue", "glueglue"],
  //     beer: ["BEER", "Beer", "beerbeer"],
  //   };
  // });
  let result = csbin.multiMap(
    ['catfood', 'glue', 'beer'],
    [
      function (str) {
        return str.toUpperCase();
      },
      function (str) {
        return str[0].toUpperCase() + str.slice(1).toLowerCase();
      },
      function (str) {
        return str + str;
      },
    ],
  );
  let expected = {
    catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'],
    glue: ['GLUE', 'Glue', 'glueglue'],
    beer: ['BEER', 'Beer', 'beerbeer'],
  };

  expect(result).toEqual(expected);
});

test('objectFilter', () => {
  let callback = jest.fn((city) => city.toUpperCase());
  let result = csbin.objectFilter(
    {
      London: 'LONDON',
      LA: 'Los Angeles',
      Paris: 'PARIS',
    },
    callback,
  );
  let expected = { London: 'LONDON', Paris: 'PARIS' };

  expect(result).toEqual(expected);
  expect(callback.mock.calls).toEqual([['London'], ['LA'], ['Paris']]);
});

test('majority', () => {
  // csbin.majority = jest.fn((input) => true);
  const callback = jest.fn((num) => {
    return num % 2 === 1;
  });

  let result1 = csbin.majority([1, 2, 3, 4, 5], callback);
  let result2 = csbin.majority([1, 2, 3, 4], callback);

  expect(result1).toEqual(true);
  expect(result2).toEqual(false);
});

test('prioritize', () => {
  // csbin.prioritize = jest.fn((i) => [
  //   "seinfeld",
  //   "sunny",
  //   "curb",
  //   "rickandmorty",
  //   "friends",
  // ]);
  const callback = jest.fn((str) => str[0] === 's' || str[0] === 'S');
  let result = csbin.prioritize(
    ['curb', 'rickandmorty', 'seinfeld', 'sunny', 'friends'],
    callback,
  );
  let expected = ['seinfeld', 'sunny', 'curb', 'rickandmorty', 'friends'];

  expect(result).toEqual(expected);
});

test('countBy', () => {
  // csbin.countBy = jest.fn((i) => {
  //   return { odd: 3, even: 2 };
  // });
  const callback = jest.fn((num) => {
    if (num % 2 === 0) return 'even';
    else return 'odd';
  });
  let result = csbin.countBy([1, 2, 3, 4, 5], callback);
  let expected = { odd: 3, even: 2 };

  expect(result).toEqual(expected);
});

test('groupBy', () => {
  // csbin.groupBy = jest.fn((i) => {
  //   return { 1: [1.3], 2: [2.1, 2.4] };
  // });
  const callback = jest.fn((num) => Math.floor(num));
  let result = csbin.groupBy([1.3, 2.1, 2.4, 3.5], callback);
  let expected = { 1: [1.3], 2: [2.1, 2.4], 3: [3.5] };

  expect(result).toEqual(expected);
});

test('goodKeys', () => {
  // csbin.goodKeys = jest.fn((i) => ["charlie", "dee"]);
  const callback = (str) => str.slice(0, 4).toLowerCase() === 'bird';
  let result = csbin.goodKeys(
    {
      mac: 'priest',
      dennis: 'calculating',
      charlie: 'birdlaw',
      dee: 'bird',
      frank: 'warthog',
    },
    callback,
  );
  let expected = ['charlie', 'dee'];
  expect(result).toEqual(expected);
});

test('commutative', () => {
  // csbin.commutative = jest.fn((i) => true);

  const cb1 = (n) => n * 3;
  const cb2 = (n) => n / 4;
  const cb3 = (n) => n - 5;

  let result1 = csbin.commutative(cb1, cb2, 11);
  let result2 = csbin.commutative(cb1, cb3, 10);
  let result3 = csbin.commutative(cb2, cb3, 48);

  expect(result1).toEqual(true);
  expect(result2).toEqual(false);
  expect(result3).toEqual(false);
});

test('objFilter', () => {
  // csbin.objFilter = jest.fn((i) => {
  //   return { 2: 1, 6: 3 };
  // });
  const callback = (n) => n / 2;
  let result = csbin.objFilter({ 6: 3, 2: 1, 12: 4 }, callback);
  let expected = { 2: 1, 6: 3 };

  expect(result).toEqual(expected);
});

test('rating', () => {
  // csbin.rating = jest.fn((i) => i);
  const cb1 = (n) => n % 2 === 0;
  const cb2 = (n) => n > 4;
  const cb3 = (n) => Math.sqrt(n) % 1 === 0;
  const cb4 = (n) => n.toString().includes('6');

  let result1 = csbin.rating([cb1, cb2, cb3, cb4], 64);
  let result2 = csbin.rating([cb1, cb2, cb3, cb4], 66);

  expect(result1).toEqual(100);
  expect(result2).toEqual(75);
});

test('pipe', () => {
  // csbin.pipe = jest.fn((i) => "CATcatCATcat");

  const cb1 = (str) => str.toUpperCase();
  const cb2 = (str) => str + str.toLowerCase();
  const cb3 = (str) => str + str;

  let result1 = csbin.pipe([cb1, cb2, cb3], 'cat');

  expect(result1).toEqual('CATcatCATcat');
});

test('highestFunc', () => {
  // csbin.highestFunc = jest.fn((i) => "addTen");

  const cb1 = (n) => n * 2;
  const cb2 = (n) => n + 10;
  const cb3 = (n) => n * -1;

  let result1 = csbin.highestFunc(
    { double: cb1, addTen: cb2, inverse: cb3 },
    5,
  );
  let result2 = csbin.highestFunc(
    { double: cb1, addTen: cb2, inverse: cb3 },
    11,
  );
  let result3 = csbin.highestFunc(
    { double: cb1, addTen: cb2, inverse: cb3 },
    -20,
  );

  expect(result1).toEqual('addTen');
  expect(result2).toEqual('double');
  expect(result3).toEqual('inverse');
});

test('combineOperations', () => {
  const cb1 = (n) => n + 100;
  const cb2 = (n) => n / 5;
  const cb3 = (n) => n * 3;

  let result1 = csbin.combineOperations(0, [cb1, cb2, cb3]);
  let result2 = csbin.combineOperations(0, [cb2, cb1]);

  expect(result1).toEqual(60);
  expect(result2).toEqual(100);
});

test('myFunc', () => {
  // csbin.myFunc = jest.fn((i) => i);
  const callback = (n) => n % 2 !== 0;

  let result1 = csbin.myFunc([2, 3, 6, 64, 10, 8, 3, 12], callback);
  let result2 = csbin.myFunc([2, 4, 6, 8, 10, 12, 64], callback);

  expect(result1).toEqual(1);
  expect(result2).toEqual(-1);
});

test('myForEach', () => {
  // csbin.myForEach = jest.fn((i) => i);
  let sum = 0;
  const callback = (n) => (sum += n);

  csbin.myForEach([1, 2, 3], callback);

  expect(sum).toEqual(6);
});
