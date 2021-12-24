'use strict';

const Max = (Array) => {
    let maxV = Array[0][0];
    for(let i = 0; i < Array.length; i++){
        for(let j = 0; j < Array[i].length; j++){
            let value = Array[i][j];
            if(maxV < value) maxV = value;
        };
    };
    return maxV;
};
  
console.log(Max([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
