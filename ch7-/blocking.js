const crypto = require("node:crypto");

console.log("Hello World");

let a = 2;
let b = 3;

//sync function with no callback as it will hold on to the main thread
// not be offloaded to libuv and later the cb be passed to callstack
//it will block the thread
const dance = crypto.pbkdf2Sync("password","salt",50000,50,"sha512")
console.log(dance);
console.log("first key is generated");

//pbk Password Base Key Deravative function
//async function
//multiplication will be done first
crypto.pbkdf2("password","salt",50000,50,"sha512", (err,key)=>{
    console.log("Key is generated: ",key.toString("hex"));
    console.log(key.toString("base64"));
});

function multiplyFn(x,y){
    const result = x*y;
    return result;
}

let c = multiplyFn(a,b);

console.log("Mulitplication result is: ", c);