console.log("Hello world"); 

let a = 2;
let b = 3;

setTimeout(() => {
    console.log("call me right now");  //STILL LAST
}, 0); // trust issues , tc: only runs after 0 seconds if call stack is empty😭

//libuv gets this offloaded and then sees it has 0 seconds so will the callback be offloaded to the callstack immediately ?
//libuv would get this method to call at the callstack , once the call stack is empty 

// setTimeout(() => {
//     console.log("call me after 3 seconds");
// }, 3000);

function multiplyFn(x,y){
    const result = x*y;
    return result ;
}

let c = multiplyFn(a,b);
console.log("Multiplication Result is: ",c);