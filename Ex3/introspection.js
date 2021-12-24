'use strict';

const intorspection = (iface) => {
    const names = [];
    for (const name in iface) {
        const fn = iface[name];
        if (typeof fn === 'function') {
            names.push([name, fn.length]);
        }
    }
    return names;
};

let obj = {
    m1: x => [x],
    m2: function (x, y) {
      return [x, y];
    },
    m3(x, y, z) {
      return [x, y, z];
    }
}

console.log(intorspection(obj));
