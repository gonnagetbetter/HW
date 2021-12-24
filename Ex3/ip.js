'use strict';

const Ip = '10.0.0.1';

const StrToArr = (str) => {
    let Arr = str.split('.');
    Arr = Arr.map(Number);
    return Arr
}
    
const Shift = (Arr) =>{
    const lenth = Arr.length - 1;
    for (let i = 0; i < lenth; i++){
        for (let n = lenth - 1;  n >= 0; n--){
            Arr[n] = Arr[n] << 8; 
        }
    }
    return Arr 
}

const add = (Arr) => {
    let sum = 0;
    Arr.forEach(element => {
       sum += element;
    }); 
    return sum;
}

const BetterAdder = (previousValue, currentValue) => previousValue + currentValue;

console.log((Shift(StrToArr(Ip)).reduce(BetterAdder)));

console.log(add(Shift(StrToArr(Ip))));
