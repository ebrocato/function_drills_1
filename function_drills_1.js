'use strict';








function createGreeting(name, age) {
  
    const yearOfBirth = getYearOfBirth(age);
    return 'hi my name is ' + name + ' and I am ' + age + ' years old.' + 'I was born in ' + yearOfBirth + '.';
}



function getYearOfBirth(age) {
    if (age < 0) {
        throw new Error("Age cannot be negative");
    }
    else {
        return 2019 - age;
    }
}




try {
    const greeting1 = createGreeting("Emily", -27);
}   catch (e) {
    console.log(e);
    }



