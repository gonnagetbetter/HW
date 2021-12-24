'use strict';

const sum1 = (...args) => {
    let sum = 0;
    for (let i = 0; i < args.length; i++) {
        sum += args[i]; 
    };
    return sum;
};

const sum2 = (...args) => {
    let sum = 0;
    for ( let number of args) {
        sum += number;
    }
    return sum;
};
 
const sum3 = (...args) => {
    let sum = 0;
    let i = 0;
    while ( i < args.length){
        sum += args[i];
        i++;
    };
    return sum;
};

const sum4 = (...args) => {
    let sum = 0;
    let i = 0;
    do  {
        sum += args[i];
        i++;
    } while ( i < args.length) ;
    return sum;
};

const sum5 = (...args) => {
    const BetterAdder = (previousValue, currentValue) => previousValue + currentValue;
    let sum = args.reduce(BetterAdder);
    return sum;
};

console.log(sum1(1, 2, 3));
console.log(sum2(0));
console.log(sum3());
console.log(sum4(1, -1, 1));
console.log(sum5(10, -1, -1, -1) )