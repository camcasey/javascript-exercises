const sumAll = function(x, y) {
    let sum = 0;
    let smallerNum = x;
    let largerNum = y;

    if(x < 0 || y < 0 || !Number.isInteger(x) || !Number.isInteger(y)){
        return 'ERROR';
    }

    if(x > y){
        smallerNum = y;
        largerNum = x;
    }

    for(let i = smallerNum; i <= largerNum; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
