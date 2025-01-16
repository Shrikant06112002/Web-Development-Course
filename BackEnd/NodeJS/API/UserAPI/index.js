// fetch('https://dummyjson.com/users')
// .then(res => res.json())
// .then(console.log);
const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>
{
    if(req.url=="/"){
        res.end("hello from home side");
    }else if(req.url=="/about"){
        res.end("hello from about side");
    }else if(req.url=="/userapi"){
        fs.readFile(`${__dirname}/userApi.json`,"utf-8",(err,data)=>{
            // console.log(data);
            // res.end(data);//for total data
            const objData = JSON.parse(data);

            res.end(data);
        });
        // res.end("hello from api  side");

    }else{
        res.end("error 404");
    }
});

server.listen(8000,"127.0.0.1",()=>{
    console.log("listenting from port 8000");
});
