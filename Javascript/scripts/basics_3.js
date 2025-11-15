// CLASS
class UserClass{

    // name = 'john';
    // age = 25
    #name; // private property
    constructor(name, age){
        this.#name = name;
        this.age = age;
    }

    display(){
        console.log('Name: ', this.#name);
        console.log('Age: ', this.age);
    }

    // Getter method to get the private property
    get name(){ 
        return "Name is: "+this.#name;
    }

    // Setter method to set the value for the private property
    set name(name){
        this.#name = name;
    }
}

// let john1 = new UserClass();
let john1 = new UserClass('john', 25);
console.log(john1); // displays only age beacuse name is private property and it can only be accessed by the methos inside the class
console.log(john1.name);
john1.name = 'John Wick';
john1.display();


// INHERITANCE
// Parent Class
class Animal{ 
    legs;
    tail;

    constructor(legs, tail){
        this.legs = legs;
        this.tail = tail;
    }

    display(){
        console.log(this.legs);
        console.log(this.tail);
    }
}

//Child Class
class Human extends Animal{
    nationality;
    
    constructor(legs, tail, nationality){
        super(legs, tail);
        this.nationality = nationality 
    }

    // Method Overriding
    display(){
        console.log(this.legs);
        console.log(this.tail);
        console.log(this.nationality);
    }
}

let ani = new Animal(4, true);
ani.display();

let hum = new Human(2, false, 'indian');
console.log(hum);
hum.display();

// ERROR HANDLING
let a = undefined;
try{
    console.log(a.name);
}
catch(error){
    // console.log(error);
    console.log("Error has occured");
    // throw new Error('New Error');
}

// PROMISE
isHalwaAvailable = true;

function waitInQueue(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(isHalwaAvailable){
                resolve("Buy 1/2 kg halwa");
            }
            else{
                reject("Halwa not available");
            }
        }, 1000)
    });
}

function buyHalwa(){
    waitInQueue().then((message) => {
        console.log(message);
    })
    .catch((error) =>{
        console.log(error);
    })
    .finally(() => {
        console.log("Go Home");
    })
}
buyHalwa();
console.log('HALWA PROCESS')
/*
Arrow function syntax:
() => {
    }
Either takes parameters are not
(arg1, arg2) => {
    }

setTimeout(function, time){
} -> takes two parameter - function, 2. time to wait

.then() -> executes incase of resolve i.e positive response from promise
.catch() -> executes incase of reject response from promise
.finally() -> runs always / this block will execute whatever the response either positve or negative from promise
*/

// ASYNC/AWAIT 
isHalwaAvailable2 = false;

function waitInQueue2(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(isHalwaAvailable2){
                resolve("Buy 1/2 kg halwa");
            }
            else{
                reject("Halwa not available");
            }
        }, 1000)
    });
}

async function buyHalwa2(){
    try{
        let result = await waitInQueue2();
        console.log(result);
    }
    catch(error){
        console.log("Halwa Over");
    }
}
buyHalwa2();
/*
await - it specifies to wait for the promise, till the timeout is over
async - if await is used, then the function should be async function
*/