'use strict';

const Ip = '10.0.0.1';

const strToArr = (str) => {
  let Arr = str.split('.');
  Arr = Arr.map(Number);
  return Arr;
};

const shift = (Arr) =>{
  const lenth = Arr.length - 1;
  for (let i = 0; i < lenth; i++) {
    for (let n = lenth - 1; n >= 0; n--) {
      Arr[n] = Arr[n] << 8;
    }
  }
  return Arr;
};

const add = (Arr) => {
  let sum = 0;
  Arr.forEach( (element) => {
    sum += element;
  });
  return sum;
};

const betterAdder = (previousValue, currentValue) => {
  previousValue + currentValue;
};

console.log((shift(strToArr(Ip)).reduce(betterAdder)));

console.log(add(shift(strToArr(Ip))));
