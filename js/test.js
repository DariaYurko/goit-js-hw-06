// 'use strict'

// function fooGlobal() {
//    console.log(this);
// }
// fooGlobal.call(); // window


const person1 = {
   name: "Dasha",
   lastname: "Yurko",
   age: 35,
};

const person2 = {
   name: "Yura",
   lastname: "Yurko",
   age: 49,
};


function printName() {
   console.log(`${this.lastname} ${this.name}`);
}

printName.call(person1);
printName.call(person2);



