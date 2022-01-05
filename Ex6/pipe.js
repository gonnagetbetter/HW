'use strict';

const pipe = (...fns) => {
  for (const funct of fns) {
    if (typeof funct !== 'function') {
      throw new Error('Not function');
    }
  }
  return (x) => fns.reduce((g, f)=>f(g), x);
};

const inc = (x) => ++x;
const twice = (x) => x * 2;
const cube = (x) => x ** 3;

{
  const f = pipe(inc, twice, cube);
  console.log(f(5));
}

{
  const f = pipe(inc, inc);
  console.log(f(7));
}

{
  const f = pipe(inc, 7, cube);
  console.log('Unreachable');
}
