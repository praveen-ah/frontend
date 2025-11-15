// Functions
let a = 10, b = 5;
function sum(var1, var2) {
    console.log(var1 + var2);
}
sum(a, b);

// Function assignment
let sumFunc = sum;
sumFunc(5, 5);

let subFunc = function (var1, var2) {
    return var1 - var2;
}
console.log(subFunc(10, 5));

// Arrow function or Nameless function
let mulFunc = (var1, var2) => var1 * var2;
console.log(mulFunc(10, 5));

let oddOrEven = (a) => (a % 2 == 0) ? "Even" : "Odd";
console.log(oddOrEven(3));
// syntax
(parameters) => {

}

// Callback Function
function operation(op, a, b) {
    return op(a, b);
}
let add = (a, b) => a + b;
let sub = (a, b) => a - b;
console.log(operation(add, 4, 4));

// Object
let x = {}; // Object declaration
console.log(typeof x);

let engineOptions = "petrol, diesel"
let car = {
    name: 'Nexon',
    brand: 'Tata',
    mode: engineOptions + ', ev',
    price: 15,
    "test key": "Hello",
    onRoadPrice() {
        return this.price + 2;
    }
};
console.log(car);

console.log(car.mode);
console.log(car.onRoadPrice());
console.log(car["test key"]);
delete car["test key"]; //deleteing key
car['ModelYear'] = 2025; //adding key
car['price'] = 18; //modifing key
car.price = 20;
console.log(car);

// In Operator
console.log('name' in car);
console.log('color' in car);

for (key in car) {
    console.log(key + '-' + car[key]);
}

// Constructor
// Constructor is also a function - name starts with cap letter
function User(a) {
    this.name = a;
    this.age = function () {
        return 25;
    }
}
let john = new User('John');
let eagly = new User('Eagly');
console.log(john, eagly);
console.log(john.age(), eagly.age());

function Add3Nums(a, b) {
    this.a = a;
    this.b = b;
    this.result = function (c) {
        return a + b + c;
    }
}

let res = new Add3Nums(5, 5);
console.log(res.result(5));

// Arrays - kind of python List
let arr = new Array(); //intializing new array or let arr = []
arr = ["zero", "one", "two"];
console.log(arr)
let arr2 = ["four", "five", 25, true, { name: 'john', age: 25 }, function add(a, b) { return a + b }];
console.log(arr2[4].name);
console.log(arr2[5](2, 2));

arr[3] = "three"; // inserting into array
arr.push('five'); // add the value at last of array
arr.unshift("minus_one"); // add the value at start of array
x = arr.pop(); // remove the last element of array & returns the popped value
arr.shift(); // remove the fisrt element of the array

//of operator acces the value of array
for (a of arr) {
    console.log(a);
}
// in operator access the index
for (a in arr) {
    console.log(arr[a]);
}
console.log(arr.length); // len of array
// another way of creating array
let arr3 = new Array('hi', 'hello', 'welcome');

// 2-D Array
let mat = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
console.log(mat);
console.log(mat[0][2]);

for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat.length; j++) {
        console.log(mat[i][j]);
    }
}

// Map & Set datatype or data structure

// Map is like object but here key can be of any type whereas  in object key can only be string
let map = new Map();
map.set(1, 'code io'); // setting value to map
map.set(2, 'logic io')
    .set(3, 'sample io')
    .set('ch3', 'test io')
    .set('ch4', 'hello io');
console.log(map);
console.log(map.get('ch3')); // get value from key
console.log(map.has(2)); // checks if there is enrt for the key in map
console.log(map.size);
map.delete('ch3'); // delete the key from map
console.log(map);
// map.clear(); // delete all the entires from map
for (key of map.keys()) {
    console.log(key);
}
for (value of map.values()) {
    console.log(value);
}
for (key of map) {
    console.log(key);
}

// Set - unique chars like in python
let set = new Set();
// adding value to set
set.add('code io')
    .add('logic io')
    .add(1)
    .add(2)
    .add('code io'); // does not allow the duplicate value
console.log(set);
set.delete(2); // delete the value
console.log(set.has(1)); // checks the value is in set or not
console.log(set.size);
// set.clear(); // clears entire set
for (s of set) {
    console.log(s);
}

// JSON - JavaScript Object Notation
let user = {
    name: 'john',
    age: 21,
    salary: 10000
};
console.log(JSON.stringify(user)); // converts the object into JSON string

let user2 = '{"name": "Wick", "age":23}';
console.log(JSON.parse(user2)); // converts the string in json format to object

// Date and Time
let today = new Date(); // return currect date
console.log(today);

let bday = new Date('1997-01-01');
console.log(bday);
// console.log(bday.getDate());
// console.log(bday.getFullYear());

//Recursive Function
/* Things to be in recursive function
 - base case
 - update statement
 -recursive call
*/
function factorial(n) {
    if (n == 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
console.log(factorial(5));

