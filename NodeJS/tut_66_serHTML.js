const http = require('http')
const fs = require('fs');
const fileContent = fs.readFileSync('HTML CODE/tut6_image.html')

const server =http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/html'});
    res.end(fileContent);
})

// server.listen(80,'127.0.0.1',()=>{    //on 80 port serch on google 127.0.0.1
//     console.log("Listening on port 80")
// })

server.listen(8000,'127.0.0.1',()=>{    //on 8000 port serch on google 127.0.0.1:8000
    console.log("Listening on port 8000")
})