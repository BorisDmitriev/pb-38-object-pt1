/**
 * Implement your solutions here
 */

// 1. Get Properties
const getProperties = (obj) => Object.keys(obj);

console.log( getProperties({ name: 'Mike', class: '4A', course: 'English' })); //-> [ 'name', 'class', 'course' ]

// 2. Get Values
const getValues = obj => Object.values(obj);

console.log( getValues({ choice1: 'tea', choice2: 'coffee', choice3: 'milk' }) ); // [ 'tea', 'coffee', 'milk' ]

// 3. Convert Keys and Values into arrays
const getKeyValuePairs = obj => {
    return Object.entries(obj);
}

console.log( getKeyValuePairs({ cats: 1, dogs: 2, turtles: 4 }) ); //-> [ [ 'cats', 1 ], [ 'dogs', 2 ], [ 'turtles', 4 ] ]

// 4. Convert keys and values into objects
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
    printDetails: function(){
        return  this.firstName + this.lastName + ' is a citizen of ' + this.citizenship + 
                                '. They are ' + this.gender + ', ' + this.height + 'cm tall and have ' + this["eye colour"] + ' eyes.';
    },
  };
  

  function getKeyValueObjects(person){
    const personArr = Object.entries(person)
    let index = 0;
    for (const [key,value] of personArr) {
        personArr[index] = { [key]: value };
        index++;
    }
    return personArr;
  }

  console.log( getKeyValueObjects(person) ); //->
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

// 5. Add A Method
console.log( person.printDetails() );

// 6. Merge
const mergeObjects = (obj1, obj2) => {
    const objArray = [obj1, obj2];
    const newObj = {}
    for (const obj of objArray) {
        for (const [key, value] of Object.entries(obj)) {
            newObj[key] = value;
        }
    }
   return newObj;

   //alternative
//    let newObj = { ...obj1, ...obj2 }
//    return newObj;
};

const testObj1 = { a: 'a', b: 'b', c: 'c' };
const testObj2 = { d: 'd', e: 'e', f: 'f' };
console.log( mergeObjects(testObj1, testObj2 ) ); //-> {firstName: "John", lastName: "Smith"}

/**
 * Bonus Questions
 */

// 7. What happens if you merge two objects with the same property values?
// Do you expect to change either or both of the original objects by combining these two objects?
// Why or why not? Comment your answers.
// Nein. Weil das neue Object ein eigenständiges Object auf dem Heap ist und die ursprünglichen Objekte unberührt bleiben.

// 8. Switch Keys and Values
const switchedCopy =(obj) => {
    const newObj = {};
    for (const [key, value] of Object.entries(obj)) {
            newObj[value] = key;
    }
   return newObj;
};

console.log( switchedCopy( { location: "berlin", status: "occupied", }) ); //-> { berlin: 'location', occupied: 'status' }

// 9 Return Keys and Values
const getKeysAndValues = obj => {
    const keys = Object.keys(obj);
    const values = Object.values(obj);
    return [ keys, values ];
}


console.log( getKeysAndValues({ a: 1, b: 2, c: 3 })); //-> [["a", "b", "c"], [1, 2, 3]]
console.log( getKeysAndValues({ key: true })); //-> [["key"], [true]]
