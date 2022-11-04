const prompt = require('prompt-sync')({sigint:true})
const number = parseInt(prompt('Enter the number of terms: '));
let n1 = 0, n2 = 1;

console.log('Fibonacci Series:');

for (let i = 1; i <= number; i++) {
    console.log(n1);
    value = n1 + n2;
    n1 = n2;
    n2 = value;
}