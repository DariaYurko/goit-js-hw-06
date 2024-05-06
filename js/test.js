// 'use strict'

// function fooGlobal() {
//    console.log(this);
// }
// fooGlobal.call(); // window


// const person1 = {
//    name: "Dasha",
//    lastname: "Yurko",
//    age: 35,
// };
// const person2 = {
//    name: "Yura",
//    lastname: "Yurko",
//    age: 49,
// };
// function printName() {
//    console.log(`${this.lastname} ${this.name}`);
// }
// printName.call(person1);
// printName.call(person2);



const ancestor = {
  name: "Paul",
  age: 83,
  surname: "Dawson",
  heritage: "Irish",
};

// const parent = Object.create(ancestor);
// parent.name = "Stacey";
// parent.surname = "Moore";
// parent.age = 54;

// const child = Object.create(parent);
// child.name = "Jason";
// child.age = 27;

// console.log(child.age);
// console.log(child.heritage);

/**
 * 
 * 
 * ======================================= CLASS =====================================
 */
 
// class Human {
//   constructor(humanName, humanAge) {
//     this.name = humanName;
//     this.age = humanAge;
//   }
// }
 
// const person1 = new Human('Dasha', 35)
// const person2 = new Human('Yura', 49)

// console.log(person1);
// console.log(person2);

// console.log(person1.hasOwnProperty('name'));
// console.log(person1.hasOwnProperty('age1'));


const arr = ["Nanitoids", "Prolonger", "Antigravitator", "Droid"];

function removeItem(item) {
  if (arr.includes(item)) {
    arr.splice(arr.indexOf(item), 1)
  }
}

console.log(removeItem("Prolonger"));
console.log(arr);