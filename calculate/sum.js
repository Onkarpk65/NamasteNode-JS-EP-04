let x = 'exports in React exports in Node';

z = "Non strict mode demo";

function calculateSum(a, b) {
    let sum = a + b;
    console.log('result of calculate sum: ', sum);
}

console.log(module.exports);

// Exports Syntax of CommonJS module

//Syntax 1
// module.exports = {
//     x: x,
//     calculateSum: calculateSum,
// }

//Syntax 2
// module.exports.x = x;
// module.exports.calculateSum = calculateSum;


//Syntax 3
module.exports = {
    x,
    calculateSum,
}

// import syntax of ES modules
/**
 * export function calculateSum(a, b) {
    let sum = a + b;
    console.log('result of calculate sum: ', sum);
};
 * export let x = 'exports in React exports in Node';
 */