console.log("This is new file running from cmd")

// -> single line comment -> ctrl + /
//console.log("This line is comment")

/*
This is multi-line comment
shtcut -> shit+alt+a
*/

// variable declaration
let bookName

//variable Initialization
bookName = "Harry Potter";

let bookAuthor = "J.K. Rowling",
    bookOwner = "Rohit",
    bookPart = "One";

console.log(bookName, bookPart, "\n", bookAuthor);

//Constant
const MYNAME = "Rohit"
console.log(MYNAME);

//dataTypes

//1. Number datatype
let pi = 3.14;
let prime = 7;
console.log(pi, prime);
console.log(typeof pi, typeof prime);

//1.1 special numeric value
let infi = Infinity;
let negInfi = -Infinity;
let nan = NaN //Not a Number
console.log(infi, negInfi);
console.log(typeof infi, typeof negInfi, typeof nan);

//2. BigInt
//2^53 - 1 = 9007199254740991
let temp = 9007199254740991;
/* console.log(temp + 1); //9007199254740992 -> correct for even number result
console.log(temp + 2); //9007199254740992 -> Wrong for odd number result
console.log(temp + 3); //9007199254740994 -> Correct */

let limit = 9007199254740991n; //using big Int by giving as n at the end
console.log(limit + 1n);
console.log(limit + 2n);
console.log(limit + 3n);
console.log(typeof limit);

//3. String Datatype
let intro = "Hello, Welcome to VS Code";
console.log(intro, typeof intro);
// `` -> Back tick
let para = `Helle "hi", 'Hru'`
console.log(para);
//embeded
let embed = `${intro}: 1+2 = ${1 + 2}`;
console.log(embed);

//4. Boolean Datatype -- true, false
let cond = 5 > 2;
console.log(cond, typeof cond);

// Null Value
let age = null;
console.log(age, typeof age);

// Undefined value
let DOB;
console.log(DOB, typeof DOB);

// Type Conversion
let myAge = 25;
console.log(typeof myAge);
a = String(myAge);
console.log(typeof a);
b = Number(myAge);
console.log(b + 3, typeof b);
let x = 1;
x = Boolean(x);
console.log(x);

// Operators:
//Unary operator: x =  1, x = -x
//Binary operator: +, -, *, /, %, **(power of)
let a1 = '10';
let b1 = '15';
let sum = +a1 + +b1; //unary plus(+) converts string to number
console.log(sum);

// Increment operator -> Pre & Post --> ++x, x++
// Decrement operator -> Pre & Post --> --x, x--

// Comparisons -> <, >, <=, >=, ==, !=

console.log('0' == 0); // true -> comparison operator type converts string to number
console.log('0' === 0); // false -> Strict Equality - compare without type conversation
console.log(null == undefined); // true but when === is used then false

console.log(null > 0); //false
console.log(null <= 0); //true
console.log(null < 0); // false
console.log(null == 0); //false

console.log(undefined > 0); //false
console.log(undefined <= 0); //false
console.log(undefined == 0); //false

// Conditional Statement
let person;
let age_1 = 14;
if (age_1 > 18) {
    person = 'Adult';
}
else if (age_1 > 12) {
    person = 'Teen';
}
else {
    person = 'Child';
}
console.log(person);

// Conditional Operator -> ?
let person1;
let age1 = 13;
person1 = (age1 > 18) ? 'Adult' : (age1 > 12) ? 'Teen' : 'Child';
console.log(person1)

// Logical Operator -> OR(||), AND(&&), NOT(!), NULL Coalescing(??)
let y; //no valuees assigned i.e NUll
let new_y = y ?? 10; //if value is null then assign 10
console.log(new_y);

//Loops - while, do-while, for
// --Intilialisation, Validation, Updataion

// While - Entry controlled loop
let num = 1;
while (num <= 5) {
    console.log(num);
    num++;
}
console.log("\n");

// Do-while - Exit controlled loop
let num1 = 11;
do {
    console.log(num1);
    num1++;
} while (num1 <= 10);

// For 
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// Jump statements - continue, break

// Switch
let n = 3
switch (n) {
    case 1:
        console.log("ONE");
        break;
    case 2:
        console.log("TWO");
        break;
    case 3:
        console.log("THREE");
        break;
    default:
        console.log("Number greater than 3");
}












