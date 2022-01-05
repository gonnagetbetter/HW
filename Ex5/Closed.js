'use strict';

const seq = (f) => (g) => (typeof g === 'number' ? f(g) : seq((x) => f(g(x))));

const a = seq( (x) => x + 7)( (x) => x * 2)(5);
console.log(a);

const b = seq( (x) => x * 2)( (x) => x + 7)(5);
console.log(b);

const c = seq( (x) => x + 1)( (x) => x * 2)( (x) => x / 3)( (x) => x - 4)(7);
console.log(c);
