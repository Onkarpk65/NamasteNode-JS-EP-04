let x = 'exports in React exports in Node';

function calculateSum(a, b) {
    let sum = a + b;
    console.log('result of calculate sum: ', sum);
}

module.exports = {
    x: x,
    calculateSum: calculateSum,
}