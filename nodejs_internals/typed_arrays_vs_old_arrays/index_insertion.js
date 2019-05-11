const LIMIT = 10000000;
const arr = new Int32Array(LIMIT * 4);

const hetArr = new Array(LIMIT);
console.time("Heterogenous array insertion time");
for (let i = 0; i < LIMIT; i++) {
    if (i === 100) {
        hetArr.push({a: 22});
    }
    hetArr[i] = i;
}
console.timeEnd("Heterogenous array insertion time");


const conArr = new Array(LIMIT);
console.time("Homogenous array with continous mem allocation insertion time");
for (let i = 0; i < LIMIT; i++) {
    conArr[i] = i;
}
console.timeEnd("Homogenous array with continous mem allocation insertion time");
