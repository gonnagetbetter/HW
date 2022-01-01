'use strict';

const array = () => {
    const data = [];
    const meth = (i) => data[i];
    meth.push = (val) => data.push(val);
    meth.pop = () => data.pop();
    return meth;
};  

const arr = array();

arr.push('first');
arr.push('second');
arr.push('third');

console.log(arr(0)); 
console.log(arr(1)); 
console.log(arr(2));

console.log(arr.pop()); 
console.log(arr.pop()); 
console.log(arr.pop()); 

console.log(arr.pop());