//primitive datatypes

// 7 types: string, Number, Boolean, null, undefined, symbole, BigInt


const string ="shivam";
const number = 123;
const boolean = true;
const nullValue = null;
let undefinedValue;

const symbole = Symbol('shivam');
const anothersymbole = Symbol('shivam');

const bigInt = 1234567890123456789012345678901234567890n



//refrence (non-primitive datatypes)
//object, array, function, etc.

const array =['shivam', 'vansh', 'ujjwal'];


const object ={
    name: 'shivam',
    age: 21,
}

const myFunction = function() {
    console.log('hello world');
}


console.log(typeof myFunction);

// https://262.ecma-international.org/5.1/#sec-11.4.3


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack(primitive )  and heap(non-primitive)

// stack
let myNameIs="shivamkumar"
let yourNameIs=myNameIs
yourNameIs="mishra"

console.log(myNameIs);
console.log(yourNameIs);



// Heap
let userOne={
    name:"shivam",
    email:"shivammishra"
}

let userTwo=userOne

userTwo.email="supershivam"

console.log(userOne.email);
console.log(userTwo.email);

