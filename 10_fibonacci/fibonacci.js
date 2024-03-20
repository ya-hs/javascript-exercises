const fibonacci = function (num) {
    let oldVal = 0;
    let curVal = 1;
    let newVal
    const seqNum = Number(num)
    if (seqNum === 0) {
        return oldVal;
    } else if (seqNum < 0) {
        return 'OOPS'
    } else if (seqNum === 1) {
        return curVal;
    }

    for (let i = 2; i <= seqNum; i++) {
        newVal = oldVal + curVal;
        oldVal = curVal;
        curVal = newVal;
    }
    return newVal;
};

// Do not edit below this line
module.exports = fibonacci;
