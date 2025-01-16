// synchrounus or blocking:-line by line excuation
// Asynchrounus or Nonblocking:-line by line excuation not guaranted callbacks will fire

//asychrounus-call block na ho is liye use karte he
const fs = require("fs");
fs.readFile("info.txt","utf-8",(err,data)=>{
    console.log(err,data);
});       //(etc/pass,"utf-8",callback)
console.log("this is data");
