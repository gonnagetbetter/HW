'use strict';

const array = [];
const arrayOdd = [];
const min = 15;
const max = 30;

const range = (min, max) => {
  console.log('Range:');
  if (min > max) {
    return console.log('Incorrect iterval');
  };
  while (max >= min) {
    array.push(min);
    min = min + 1;
  };
  return array.forEach( (number) => console.log(number));
};

const rangeOdd = (min, max) =>{
  console.log('RangeOdd:');
  if (min > max) {
    return console.log('Incorrect iterval');
  };
  while ( max >= min) {
    arrayOdd.push(min);
    min = min + 2;
  };
  return arrayOdd.forEach( (number) => console.log(number));
};

range(min, max);
rangeOdd(min, max);
