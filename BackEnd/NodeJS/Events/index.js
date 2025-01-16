const eventEmitter = require('events');
const event = new eventEmitter();//making event class

// event.on("sayMyName",()=>{
//     console.log("my name is shrikant");
// })
// event.on("sayMyName",()=>{
//     console.log("my name is kant");
// })
// event.on("sayMyName",()=>{
//     console.log("my name is shri");
// })
// event.emit('sayMyName');

event.on('checkPage',(sc,msg)=>{//fucntion define
    console.log(`status code is ${sc} and the page is ${msg}`);
})
event.emit("checkPage",200,"ok");//function call