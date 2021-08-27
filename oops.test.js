const oops = require('./oops');
test('makePerson', () => {
  //   oops.makePerson = (name, age) => {
  //     return { name: name, age: age };
  //   };

  const result = oops.makePerson('Tim', 22);
  const expected = { name: 'Tim', age: 22 };

  expect(result).toEqual(expected);
});

test('personStore', () => {
  //   oops.personStore = {
  //     greet: () => {
  //       console.log("hello");
  //     },
  //   };
  expect(oops.personStore.greet()).toEqual('hello');
});

test('personFromPersonStore', () => {
  // oops.personFromPersonStore = (name, age) => {
  //   return {
  //     name: name,
  //     age: age,
  //     greet: () => {
  //       return "hello";
  //     },
  //   };
  // };
  const result = oops.personFromPersonStore('Tim', 22);

  expect(result.name).toEqual('Tim'); // -> Logs 'Sandra'
  expect(result.age).toEqual(22); //-> Logs 26
  expect(result.greet()).toEqual('hello');
});

test('personFromPersonStoreintroduce', () => {
  const result = oops.personStore.introduce('Sandra');
  expect(result).toEqual('Hi, my name is Sandra');
});

test('PersonConstructor', () => {
  const simon = new oops.PersonConstructor();
  const result = simon.greet();

  expect(result).toEqual('hello');
});

test('personFromConstructor', () => {
  const mike = oops.personFromConstructor('Mike', 30);

  expect(mike.name).toEqual('Mike'); // -> Logs 'Mike'
  expect(mike.age).toEqual(30); //-> Logs 30
  expect(mike.greet()).toEqual('hello'); //-> Logs 'hello'
});

test('personFromConstructorintroduce', () => {
  const mike = oops.personFromConstructor('Mike', 30);
  expect(mike.introduce()).toEqual('Hi, my name is Mike');
});

test('PersonClass', () => {
  // oops.PersonClass = class PersonClass {
  //   greet() {
  //     return "hello";
  //   }
  // };

  const george = new oops.PersonClass();
  expect(george.greet()).toEqual('hello');
});

test('DeveloperClass', () => {
  // oops.DeveloperClass = class DeveloperClass {};
  const thai = new oops.DeveloperClass('Thai', 32);
  expect(thai.name).toEqual('Thai'); // -> Logs 'Thai'
  expect(thai.introduce()).toEqual('Hello World, my name is Thai');
});
test('adminFunctionStore', () => {
  const admin = oops.adminFunctionStore;
  admin.type = 'Humanoid';
  const result = admin.sayType();

  expect(result).toEqual('I am a Humanoid');
});

test('adminFactory', () => {
  const adminFactory = oops.adminFactory('Eva', 5);

  expect(adminFactory.sayType()).toEqual('I am a Admin');
});

test('adminFromFactory', () => {
  const adminFromFactory = oops.adminFactory('Eva', 5);

  expect(adminFromFactory.sayType()).toEqual('I am a Admin');
  expect(adminFromFactory.sharedPublicMessage('Welcome users!')).toEqual(
    'Welcome users!',
  );
});

test('Mixins', () => {
  const Dog = oops.Dog;
  const robotMixin = oops.robotMixin;

  let robotFido = new oops.Dog();

  Object.assign(robotFido, robotMixin);
  const result = robotFido.speak();
  expect(result).toEqual('I have 4 legs and am made of metal');
});
