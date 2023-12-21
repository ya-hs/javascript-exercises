const removeFromArray = function (array, ...num) {
    return array.filter(val => !num.includes(val));
};

// Do not edit below this line
module.exports = removeFromArray;
