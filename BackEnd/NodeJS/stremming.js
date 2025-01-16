const fs = require("fs");
const http = require("http");

const server = http.createServer();

// server.on("request",(req,res)=>{
//     // var fs = require('fs');
//     // fs.readFile('input.txt', (err,data)=>{
//     //     if (err) return console.error(err);
//     //     console.log(data.toString());

//     // 2nd Way
//     const rstream = fs.createReadStream("input.txt");
//     rstream.on('data',(chunkdata)=>{
//         res.write(chunkdata);
//     });
//     rstream.on('end',()=>{
//         res.end();
//     })

// });

///3rd way
const rstream = fs.createReadStream("input.txt");
server.on("request", (req, res) => {
  rstream.pipe(res);
});
server.listen(8000, "127.0.0.1");
