const name = "shivam mishra"
const repo=50

// console.log(name + repo + "value");

console.log(`Hello i am ${name} and my repo id is ${repo}`);

const gameName= new String('shivammishra')
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.toUpperCase()); //conveted into upper character
console.log(gameName.charAt(0));  // chartAt is take a index value 
console.log(gameName.indexOf('h'));


// const newSubString = gameName.substring(0,4);  //substring is not take a positive value
// console.log(newSubString);

// const SecSubString = gameName.slice(-8,4); // slice is take negatve value
// console.log(SecSubString);


// const newStringOne = "   shivam    "
// console.log(newStringOne);

// console.log(newStringOne.trim()); //trim is take space 


const url ="https://recruitcrm.io/apply/17194993453330028687kmf"
console.log(url.replace('apply','shivam'));// replace url string

console.log(url.includes('mishra'));

console.log(url.split('/'));//converted and separated into array  form
