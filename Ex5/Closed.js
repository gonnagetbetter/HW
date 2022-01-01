'use strict';

let array = [];    

const seq = (current) => {
    if (typeof current === 'number') {
        for ( let fn of array){
            current = fn(current);
        }
        array.length = 0;
        return current;
    } else {
        array.unshift(current);
        return seq;
    }
}

let a = seq(x => x + 7)(x => x * 2)(5);
console.log(a);

let b = seq(x => x * 2)(x => x + 7)(5);
console.log(b);

let c = seq(x => x + 1)(x => x * 2)(x => x / 3)(x => x - 4)(7);
console.log(c);

