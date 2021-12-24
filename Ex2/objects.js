'use strict';

const person1 = {};
let  person2 = {};

person1.name = 'Jeremy'; 
person2.name = 'Marcus';

console.dir({person1, person2});

person1.name = 'Brut'; 
person2.name = 'Mao';

console.dir({person1, person2});

const person3 = {
    name : 'Ceasar'
},
person4 = {
    name : 'William'
};

person2 = person4;

console.dir({person2});

const createUser = (name, city) => { 
    const obj = {};
    obj.name = name;
    obj.city = city;
    return obj;
};

console.log(createUser('Marcus Aurelius', 'Roma'));                 