const removeFromArray = function(array, ...toBeRemoved) {
    let newArray = [];
    array.forEach((item) => {
        if(!toBeRemoved.includes(item)){
            newArray.push(item)
        }
    });
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
