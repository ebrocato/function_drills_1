'use strict';




function getYearOfBirth(age) {
    return 2019 - age;
}


function createGreeting(name, age) {
const yearOfBirth = getYearOfBirth(age);
 return 'hi my name is ' + name + ' and I am ' + age + ' years old.' + 'I was born in ' + yearOfBirth + '.';
}


const greeting1 = createGreeting("Emily", 27);
console.log(greeting1);