const prompt = require('prompt-sync')({sigint:true})
console.log("select option")
console.log(84%15)
console.log("1.add","2.sub","3.mul","4.div")
let value = prompt("entet the number:")
if(value==1)
{
    let a = prompt("no");
let b = prompt("no");
let add = parseInt(a)+parseInt(b)
console.log(add)
}
else if(value==2)
{

 let a = prompt("no");
let b = prompt("no");
let sub = parseInt(a)-parseInt(b)
console.log(sub)
}
else if (value==3) {
    let a = prompt("no");
    let b = prompt("no");
    let mul = parseInt(a)*parseInt(b)
    console.log(mul)   
    
}
else if ((value==4)) {
    let a = prompt("no");
    let b = prompt("no");
    let div = parseInt(a)/parseInt(b)
    console.log(div)  
}
    
else
{
    console.log("please enter the valid number")
}