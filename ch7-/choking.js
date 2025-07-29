const crypto = require("node:crypto")
console.log("Hello world"); 

let a = 2;
let b = 3;

//This will choke the main thread
console.log("===hello world===");
crypto.pbkdf2Sync("password","salt",500000,50,"sha512")
console.log("first key is generated");

setTimeout(() => {
    console.log("call me right now"); 
}, 0);  //as soon as main thread is available


// setTimeout(() => {
//     console.log("call me after 3 seconds");
// }, 3000);

function multiplyFn(x,y){
    const result = x*y;
    return result ;
}

let c = multiplyFn(a,b);
console.log("Multiplication Result is: ",c);