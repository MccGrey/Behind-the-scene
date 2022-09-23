'use strict';

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;
//   console.log(firstName);

//   function printAge() {
//     const output = `My name is ${firstName} and I am ${age} years old, born in ${birthYear}`;

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       const firstName = 'drake';
//       const str = `oh, you are a millenial, ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//       console.log(add(2, 3));
//     }
//   }
//   printAge();
//   return age;
// }

// const firstName = 'John';
// calcAge(1991);

// var me = 'john';
// let = 'job';
// const year = 1991;

//functions
// console.log(addDec(4, 6));

// function addDec(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   //wont work before declaration because its a const variable
//   return a + b;
// };

// var addArrow = (a, b) => a + b; //wont work before declaration becuase its a var variable

//the only fuc=nction that will work before declaration is the function declaration

//ex.

// function deleteShoppingCart() {
//   console.log('all product deleted!');
// }

// var x = 1;
// var y = 2;
// const z = 3;

//THIS KEYWORD
// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// calcAge(1991);

// const calcAgeArrow = birthYear => {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// calcAgeArrow(1991);

// const jonas = {
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//   },
// };
// jonas.calcAge();

// const matilda = {
//   year: 2017,
// };
// matilda.calcAge = jonas.calcAge;
// matilda.calcAge();

const jonas = {
  firstName: 'jonas',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);

    const isMillenial = function () {
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  greet: () => console.log(`hey ${this.firstName}`),
};
jonas.greet();
jonas.calcAge();

const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);

var addArrow = (a, b) => a + b;
