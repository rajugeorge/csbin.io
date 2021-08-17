const oops = require("./oops");
test("makePerson", () => {
  //   oops.makePerson = (name, age) => {
  //     return { name: name, age: age };
  //   };

  const result = oops.makePerson("Tim", 22);
  const expected = { name: "Tim", age: 22 };

  expect(result).toEqual(expected);
});
test("personStore", () => {
  //   oops.personStore = {
  //     greet: () => {
  //       console.log("hello");
  //     },
  //   };
  oops.personStore.greet();
});
test("personFromPersonStore", () => {
  // oops.personFromPersonStore = (name, age) => {
  //   return {
  //     name: name,
  //     age: age,
  //     greet: () => {
  //       console.log("hello");
  //     },
  //   };
  // };
  // const result = oops.personFromPersonStore("Tim", 22);
  // const expected = {
  //   name: "Tim",
  //   age: 22,
  //   greet: () => {
  //     console.log("hello");
  //   },
  // };
  // console.log(result);
  // expect(result).toEqual(expected);
});
test.todo("personFromPersonStoreintroduce");
test.todo("PersonConstructor");
test.todo("personFromConstructor");
test.todo("personFromConstructorintroduce");
test.todo("PersonClass");
test.todo("DeveloperClass");
test.todo("adminFunctionStore");
test.todo("adminFactory");
test.todo("adminFactory2");
test.todo("adminFactory3");
test.todo("adminFromFactory");
test.todo("Mixins");
