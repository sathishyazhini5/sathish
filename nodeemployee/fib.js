const prompt = require('prompt-sync')({sigint:true})
const fibonaci = parseInt(prompt('Enter the number:'));
console.log("fibonaci series is")
let fib1=0
let fib2=1
let i =1
for (i; i<=fibonaci; i++)
{
console.log(fib1)
answer =fib1+fib2
fib1=fib2
fib2=answer
}