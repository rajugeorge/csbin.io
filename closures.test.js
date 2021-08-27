const closures = require('./closures');

afterEach(() => {
  jest.useRealTimers();
});

test('createFunction', () => {
  let wrapper = closures.createFunction;

  let closure = jest.fn(wrapper());

  expect(typeof closure).toBe('function');
});

test('createFunctionPrinter', () => {
  //   closures.createFunctionPrinter = jest.fn((sample) => () => sample);

  const wrapper = jest.fn(closures.createFunctionPrinter);

  const closure1 = jest.fn(wrapper('sample'));
  const closure2 = jest.fn(wrapper('hello'));

  expect(typeof closure1).toBe('function');
  expect(typeof closure2).toBe('function');
  expect(wrapper.mock.calls).toEqual([['sample'], ['hello']]);
});

test('outer', () => {
  // closures.outer = jest.fn(() => () => {
  //   console.log("done");
  // });

  const wrapper = closures.outer;
  const closure1 = wrapper();

  // closure1();
  // closure1();
  // closure1();
  // closure2();
  // closure1();

  expect(typeof closure1).toBe('function');
});

test('addByX', () => {
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

test('once', () => {
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

test('after', () => {
  // closures.after = jest.fn(
  //   (count, fn) =>
  //     (...args) =>
  //       fn(...args)
  // );

  const called = jest.fn(function () {
    console.log('hello');
  });
  const afterCalled = closures.after(3, called);

  afterCalled();
  afterCalled();
  afterCalled();

  expect(called).toHaveBeenCalledTimes(1);
});

test('delay', () => {
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

test('rollCall', () => {
  // closures.rollCall = jest.fn((names) => () => "Victoria");

  const rollCaller = closures.rollCall(['Victoria', 'Juan', 'Ruth']);
  const result1 = rollCaller();
  const result2 = rollCaller();
  const result3 = rollCaller();
  const result4 = rollCaller();

  const rollCaller2 = closures.rollCall([]);
  const result5 = rollCaller2();

  expect(result1).toEqual('Victoria');
  expect(result2).toEqual('Juan');
  expect(result3).toEqual('Ruth');
  expect(result4).toEqual('Everyone accounted for');
  expect(result5).toEqual('Everyone accounted for');
});

test('8. saveOutput', () => {
  // closures.saveOutput = (fn, magicWord) => (num) => {
  //   return { 2: 4, 9: 18 };
  // };

  const multiplyBy2 = (num) => num * 2;
  const multBy2AndLog = closures.saveOutput(multiplyBy2, 'boo');
  multBy2AndLog(2);
  multBy2AndLog(9);
  const total = multBy2AndLog('boo');

  expect(total).toEqual({ 2: 4, 9: 18 });
});

test('cycleIterator', () => {
  // closures.cycleIterator = jest.fn((input) => () => "Fri");

  const getDay = closures.cycleIterator(['Fri', 'Sat', 'Sun']);
  const result1 = getDay();
  const result2 = getDay();
  const result3 = getDay();
  const result4 = getDay();

  expect(result1).toEqual('Fri');
  expect(result2).toEqual('Sat');
  expect(result3).toEqual('Sun');
  expect(result4).toEqual('Fri');
});

test('defineFirstArg', () => {
  // closures.defineFirstArg = jest.fn(
  //   (func, arg) =>
  //     (...args) =>
  //       func(arg, ...args)
  // );

  const subtract = (big, small) => big - small;

  const subFrom20 = closures.defineFirstArg(subtract, 20);

  const result = subFrom20(5);

  expect(result).toEqual(15);
});

test('dateStamp', () => {
  // closures.dateStamp =
  //   (func) =>
  //   (...args) => {
  //     return { date: Date.now(), output: func(...args) };
  //   };
  const dateNow = Date.now;
  Date.now = () => 123456789;
  const stampedMultBy2 = closures.dateStamp((n) => n * 2);

  const result1 = stampedMultBy2(4);
  const result2 = stampedMultBy2(6);

  expect(result1).toEqual({ date: 123456789, output: 8 });
  expect(result2).toEqual({ date: 123456789, output: 12 });

  Date.now = dateNow;
});

test('censor', () => {
  // closures.censor = jest.fn(
  //   () =>
  //     (...args) =>
  //       "The slow, brown fox jumps over the lazy cats."
  // );

  const changeScene = closures.censor();
  changeScene('dogs', 'cats');
  changeScene('quick', 'slow');
  let result = changeScene('The quick, brown fox jumps over the lazy dogs.');

  const changeScene2 = closures.censor();
  let result2 = changeScene2('The quick, brown fox jumps over the lazy dogs.');

  expect(result).toEqual('The slow, brown fox jumps over the lazy cats.');
  expect(result2).toEqual('The quick, brown fox jumps over the lazy dogs.');
});

test('createSecretHolder', () => {
  // closures.createSecretHolder = (input) => {
  //   let value = input;
  //   return {
  //     getSecret: function () {
  //       return value;
  //     },
  //     setSecret: function (input) {
  //       value = input;
  //     },
  //   };
  // };

  const obj = closures.createSecretHolder(5);
  let result = obj.getSecret(); // => returns 5
  console.log(result);
  expect(result).toEqual(5);
  obj.setSecret(12);
  obj.getSecret(); // => returns 2
  result = obj.getSecret();
  expect(result).toEqual(12);
});

test('callTimes', () => {
  // closures.callTimes = () => {
  //   let i = 0;
  //   return () => ++i;
  // };

  let myNewFunc1 = closures.callTimes();
  let myNewFunc2 = closures.callTimes();
  expect(myNewFunc1()).toEqual(1);
  expect(myNewFunc1()).toEqual(2);
  expect(myNewFunc1()).toEqual(3);
  expect(myNewFunc2()).toEqual(1);
  expect(myNewFunc2()).toEqual(2);
});

test('russianRoulette', () => {
  // closures.russianRoulette = (limit) => {
  //   let i = 0;
  //   return function () {
  //     i++;
  //     if (i > limit) {
  //       return "reload to play again";
  //     } else if (i === limit) {
  //       return "bang";
  //     } else if (i < limit) {
  //       return "click";
  //     }
  //   };
  // };

  const play = closures.russianRoulette(3);
  expect(play()).toEqual('click'); // => should log 'click'
  expect(play()).toEqual('click'); // => should log 'click'
  expect(play()).toEqual('bang'); // => should log 'bang'
  expect(play()).toEqual('reload to play again'); // => should log 'reload to play again'
  expect(play()).toEqual('reload to play again'); // => should log 'reload to play again'
});

test('average', () => {
  // closures.average = () => (input) => input;

  const avgSoFar = closures.average();

  expect(avgSoFar()).toEqual(0); // => should log 0
  expect(avgSoFar(4)).toEqual(4); // => should log 4
  expect(avgSoFar(8)).toEqual(6); // => should log 6
  expect(avgSoFar()).toEqual(6); // => should log 6
  expect(avgSoFar(12)).toEqual(8); // => should log 8
  expect(avgSoFar()).toEqual(8); // => should log 8
});

test('makeFuncTester', () => {
  // closures.makeFuncTester = (inputs) => (cb) => true;

  const capLastTestCases = [];
  capLastTestCases.push(['hello', 'hellO']);
  capLastTestCases.push(['goodbye', 'goodbyE']);
  capLastTestCases.push(['howdy', 'howdY']);
  const shouldCapitalizeLast = closures.makeFuncTester(capLastTestCases);
  const capLastAttempt1 = (str) => str.toUpperCase();
  const capLastAttempt2 = (str) =>
    str.slice(0, -1) + str.slice(-1).toUpperCase();
  expect(shouldCapitalizeLast(capLastAttempt1)).toEqual(false); // => should log false
  expect(shouldCapitalizeLast(capLastAttempt2)).toEqual(true); // => should log true
});

test('makeHistory', () => {
  // closures.makeHistory = (input) => (str) => str;

  const myActions = closures.makeHistory(2);
  expect(myActions('jump')).toEqual('jump done'); // => should log 'jump done'
  expect(myActions('undo')).toEqual('jump undone'); // => should log 'jump undone'
  expect(myActions('walk')).toEqual('walk done'); // => should log 'walk done'
  expect(myActions('code')).toEqual('code done'); // => should log 'code done'
  expect(myActions('pose')).toEqual('pose done'); // => should log 'pose done'
  expect(myActions('undo')).toEqual('pose undone'); // => should log 'pose undone'
  expect(myActions('undo')).toEqual('code undone'); // => should log 'code undone'
  expect(myActions('undo')).toEqual('nothing to undo'); // => should log 'nothing to undo'
});

test('blackjack', () => {
  // closures.blackjack = (inputArr) => (num1, num2) => () => num1 + num2;

  /*** DEALER ***/
  const deal = closures.blackjack([
    2, 6, 1, 7, 11, 4, 6, 3, 9, 8, 9, 3, 10, 4, 5, 3, 7, 4, 9, 6, 10, 11,
  ]);

  /*** PLAYER 1 ***/
  const i_like_to_live_dangerously = deal(4, 5);
  expect(i_like_to_live_dangerously()).toEqual(9); // => should log 9
  expect(i_like_to_live_dangerously()).toEqual(11); // => should log 11
  expect(i_like_to_live_dangerously()).toEqual(17); // => should log 17
  expect(i_like_to_live_dangerously()).toEqual(18); // => should log 18
  expect(i_like_to_live_dangerously()).toEqual('bust'); // => should log 'bust'
  expect(i_like_to_live_dangerously()).toEqual('you are done!'); // => should log 'you are done!'
  expect(i_like_to_live_dangerously()).toEqual('you are done!'); // => should log 'you are done!'

  /*** BELOW LINES ARE FOR THE BONUS ***/

  /*** PLAYER 2 ***/
  const i_TOO_like_to_live_dangerously = deal(2, 2);
  expect(i_TOO_like_to_live_dangerously()).toEqual(4); // => should log 4
  expect(i_TOO_like_to_live_dangerously()).toEqual(15); // => should log 15
  expect(i_TOO_like_to_live_dangerously()).toEqual(19); // => should log 19
  expect(i_TOO_like_to_live_dangerously()).toEqual('bust'); // => should log 'bust'
  expect(i_TOO_like_to_live_dangerously()).toEqual('you are done!'); // => should log 'you are done!
  expect(i_TOO_like_to_live_dangerously()).toEqual('you are done!'); // => should log 'you are done!

  /*** PLAYER 3 ***/
  const i_ALSO_like_to_live_dangerously = deal(3, 7);
  expect(i_ALSO_like_to_live_dangerously()).toEqual(10); // => should log 10
  expect(i_ALSO_like_to_live_dangerously()).toEqual(13); // => should log 13
  expect(i_ALSO_like_to_live_dangerously()).toEqual('bust'); // => should log 'bust'
  expect(i_ALSO_like_to_live_dangerously()).toEqual('you are done!'); // => should log 'you are done!
  expect(i_ALSO_like_to_live_dangerously()).toEqual('you are done!'); // => should log 'you are done!
});
