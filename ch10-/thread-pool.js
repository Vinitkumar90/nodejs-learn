const fs = require("node:fs");
const crypto = require("crypto");

// process.env.UV_THREADPOOL_SIZE = 2;

//1 thread assigned to this
crypto.pbkdf2("password","salt",5000,50,"sha512",(err,key) => {
    console.log("1 - cryptoPBKDF2 done");
})

//2 thread assigned to this
crypto.pbkdf2("password","salt",5000,50,"sha512",(err,key) => {
    console.log("2 - cryptoPBKDF2 done");
})

//3
crypto.pbkdf2("password","salt",5000,50,"sha512",(err,key) => {
    console.log("3 - cryptoPBKDF2 done");
})

//4
crypto.pbkdf2("password","salt",5000,50,"sha512",(err,key) => {
    console.log("4 - cryptoPBKDF2 done");
})

//5 -> this one will wait until any of the thread from the pool is free
crypto.pbkdf2("password","salt",5000,50,"sha512",(err,key) => {
    console.log("5 - cryptoPBKDF2 done");
})

//always 5 is last...rest 1 2 3 4 will be changing  [if thread pool size is not increased]