'use strict';

const Array = [];
let sqr;
let cub;
let avg;

const average = (a, b) => {
  avg = ( a + b) / 2;
  return avg;
};

const square = (a) => {
  sqr = a * a;
  return sqr;
};

const cube = (a) =>{
  cub = a * a * a;
  return cub;
};

const calculate = (Array) => {
  Array.forEach( (number) => console.log(number));
};

for (let i = 0; i < 9; i++) {
  average(square(i), cube(i));
  Array.push(avg);
};

calculate(Array);
