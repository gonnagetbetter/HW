'use strict';

const random = (max, min = 0) => {
    if ( min > max ){
        let a = min;
        min = max;
        max = a; 
    }
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; 
}

console.log('Random number 12 to 72: ' + random(72, 12));

console.log('Random number 0 to 25: ' + random(25));

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

const generateKey =  ( length, characters) => {
    const res = [];
    for (let i = 0; i < length; i++) {
        let num = random(characters.length);
        res.push(characters[num]);
    }
    let key = res.join('');
    return key; 
};

console.log('Key: ' + generateKey(16, characters));

