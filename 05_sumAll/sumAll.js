const sumAll = function (num1, num2) {
    if (typeof (arguments[1]) === "number") {
        if (num1 >= 1 && num2 >= 1) {
            if (num2 > num1) {
                const intNum = num2 - num1 + 1;
                const sum = (intNum * (num2 + 1) / 2)
                return sum;
            }
            else {
                const intNum = num1 - num2 + 1;
                const sum = (intNum * (num1 + 1) / 2)
                return sum;
            }
        } else {
            return "ERROR";
        }
    } else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = sumAll;
