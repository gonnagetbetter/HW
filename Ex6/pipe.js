const compose = (...fns) => {
    for(const func of fns){
        if(typeof func !== 'function'){
            throw new Error('Not function');
        }
    }
    return x => fns.reduce((g,f) => f(g),x);
}

const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;

{

const f = compose(inc, twice, cube);
console.log(f(5));

}

{

const f = compose(inc, inc);
console.log(f(7));

}

{

const f = compose(inc, 7, cube);
console.log(f);

}