# Objects: Part 1
[![Status overview badge](../../blob/badges/.github/badges/main/badge.svg)](#-results)


In this exercise, you will work with objects; create new objects, extract keys and values, convert it into different formats, create methods on to an object to print details etc.

## Tasks

- Work in `solution.js`

**1. Get properties.**

Create a function named `getProperties` that returns an array of **keys** of a javascript object.

- Example Object

```javascript
getProperties({ name: 'Mike', class: '4A', course: 'English' }); //-> [ 'name', 'class', 'course' ]
```

**2. Get values.**

Create a function named `getValues` that returns an array of **values** of a javascript object.

- Example:

```javascript
getValues({ choice1: 'tea', choice2: 'coffee', choice3: 'milk' }); // [ 'tea', 'coffee', 'milk' ]
```

**3. Convert keys and values into arrays.**

Create a function named `getKeyValuePairs` that converts an object into an array of key-value pairs, each pair being an array itself. Return that array.

- Example:

```javascript
getKeyValuePairs({ cats: 1, dogs: 2, turtles: 4 }); //-> [ [ 'cats', 1 ], [ 'dogs', 2 ], [ 'turtles', 4 ] ]
```

**4. Convert keys and values into objects.**

Create an object named `person` with a few properties and values as shown below. Write a function called `getKeyValueObjects` that returns an array of key-value objects.

- Example:

```javascript
let person = {
  firstName: 'Michael',
  lastName: 'Smith',
  citizenship: 'Germany',
  city: 'Berlin',
  gender: 'male',
  job: 'driver',
  age: 28,
  height: 178,
  'eye colour': 'brown',
};

getKeyValueObjects(person); //->
/**
[
  { firstName: 'Michael' },
  { lastName: 'Smith' },
  { citizenship: 'Germany' },
  { city: 'Berlin' },
  { gender: 'male' },
  { job: 'driver' },
  { age: 28 },
  { height: 178 },
  { 'eye colour': 'brown' },
];
*/
```

**5. Add a method.**

Add a method named `printDetails` to the object `person` from task 4. When you call `person.printDetails()`, this method should return the values of the objects in a string, as shown below:

- Example:

```javascript
person.printDetails(); //-> "Michael Smith is a citizen of Germany. They are male, 178cm tall and have brown eyes."
```

**6. Merge objects.**

Create a function named `mergeObjects` that takes two objects as arguments, merges them into a new object, and returns it.

- Example:

```javascript
let firstObject = { firstName: 'John' };
let secondObject = { lastName: 'Smith' };
mergeObjects(firstObject, secondObject); //-> {firstName: "John", lastName: "Smith"}
```

## Bonus questions

**7. Open ended question.**

What happens if you merge two objects with the same property values? Do you expect to change either or both of the original objects by combining these two objects? Why or why not? Comment your answers.

**8. Switch Keys and Values.**

Write a function name `switchedCopy` to create a copy of an object. The copy of the object must have the keys and values switched. The function should return the new object.

- Example:

```javascript
switchedCopy({
  location: 'berlin',
  status: 'occupied',
}); //-> { berlin: 'location', occupied: 'status' }
```

**9. Return Keys and Values.**

Write a function named `getKeysAndValues` that takes an object as an argument and returns an array which contains two arrays: one for the keys of the object and the other for the values of the object.

- Examples:

```javascript
getKeysAndValues({ a: 1, b: 2, c: 3 }); //-> [["a", "b", "c"], [1, 2, 3]]
getKeysAndValues({ key: true }); //-> [["key"], [true]]
```

[//]: # (autograding info start)
# <img src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" alt="" data-canonical-src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" height="31" /> Results
> ⌛ Give it a minute. As long as you see the orange dot ![processing](https://raw.githubusercontent.com/DCI-EdTech/autograding-setup/main/assets/processing.svg) on top, CodeBuddy is still processing. Refresh this page to see it's current status.
>
> This is what CodeBuddy found when running your code. It is to show you what you have achieved and to give you hints on how to complete the exercise.


### 1. Get Properties

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status0.svg) | `getProperties` function should return an array of keys when passed a JavaScript object |

### 2. Get Values

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status1.svg) | `getValues` function should return an array of values when passed a JavaScript object |

### 3. Key-Value Pairs

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status2.svg) | `getKeyValuePairs` function should return an array of key-value pairs, each pair should be an array itself |

### 4. Get Keys

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status3.svg) | `getKeyValueObjects` function should return an array of key-value **objects** |

### 5. `printDetails` method

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status4.svg) | `person.printDetails` method should return the values of the object as a single string |

### 6. Merge objects

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status5.svg) | `mergeObjects` function should combine two objects and return a new merged object |



[🔬 Results Details](../../actions)
[🐞 Tips on Debugging](https://github.com/DCI-EdTech/autograding-setup/wiki/How-to-work-with-CodeBuddy)
[📢 Report Problem](https://docs.google.com/forms/d/e/1FAIpQLSfS8wPh6bCMTLF2wmjiE5_UhPiOEnubEwwPLN_M8zTCjx5qbg/viewform?usp=pp_url&entry.652569746=PB-objects-pt1)


[//]: # (autograding info end)