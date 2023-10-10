const rewire = require('rewire');

describe('1. Get Properties', () => {
  test('`getProperties` function should return an array of keys when passed a JavaScript object', () => {
    const testObj = { a: 'a', b: 'b', c: 'c' };
    const getProperties = rewire('../solution.js').__get__('getProperties');
    expect(getProperties(testObj)).toEqual(Object.keys(testObj));
  });
});

describe('2. Get Values', () => {
  test('`getValues` function should return an array of values when passed a JavaScript object', () => {
    const testObj = { a: 'a', b: 'b', c: 'c' };
    const getValues = rewire('../solution.js').__get__('getValues');
    expect(getValues(testObj)).toEqual(Object.values(testObj));
  });
});

describe('3. Key-Value Pairs', () => {
  test('`getKeyValuePairs` function should return an array of key-value pairs, each pair should be an array itself', () => {
    const testObj = { a: 'a', b: 'b', c: 'c' };
    const getKeyValuePairs = rewire('../solution.js').__get__('getKeyValuePairs');
    expect(getKeyValuePairs(testObj)).toEqual(Object.entries(testObj));
  });
});

describe('4. Get Keys', () => {
  test('`getKeyValueObjects` function should return an array of key-value **objects**', () => {
    const testPerson = {
      firstName: 'Michael',
      citizenship: 'Germany',
      city: 'Berlin',
      job: 'driver',
      height: 178,
      'eye colour': 'brown',
    };
    const getKeyValueObjects = rewire('../solution.js').__get__('getKeyValueObjects');
    const result = getKeyValueObjects(testPerson);
    result.forEach((item) => {
      const entries = Object.entries(item);
      expect(entries[0][1]).toEqual(testPerson[entries[0][0]]);
    });
  });
});

describe('5. `printDetails` method', () => {
  test('`person.printDetails` method should return the values of the object as a single string', () => {
    const person = rewire('../solution.js').__get__('person');
    expect(person.printDetails()).toContain(person.firstName, person.lastName, person.citizenship);
  });
});

describe('6. Merge objects', () => {
  test('`mergeObjects` function should combine two objects and return a new merged object', () => {
    const testObj1 = { a: 'a', b: 'b', c: 'c' };
    const testObj2 = { d: 'd', e: 'e', f: 'f' };
    const mergeObjects = rewire('../solution.js').__get__('mergeObjects');
    expect(mergeObjects(testObj1, testObj2)).toEqual({
      ...testObj1,
      ...testObj2,
    });
  });
});