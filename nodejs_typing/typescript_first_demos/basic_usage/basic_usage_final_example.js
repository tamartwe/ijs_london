const foo = {
    1: 'a',
    2: 'b',
    3: 'c'
}

const sumOfKeys = Object.keys(foo).
reduce((prev, curr) => {
    return prev + curr;
}, 0);

console.log(sumOfKeys); //What is the result ?