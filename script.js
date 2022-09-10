'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;
  console.log(firstName);

  function printAge() {
    const output = `My name is ${firstName} and I am ${age} years old, born in ${birthYear}`;

    if (birthYear >= 1981 && birthYear <= 1996) {
      const firstName = 'drake';
      const str = `oh, you are a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
      console.log(add(2, 3));
    }
  }
  printAge();
  return age;
}

const firstName = 'John';
calcAge(1991);
