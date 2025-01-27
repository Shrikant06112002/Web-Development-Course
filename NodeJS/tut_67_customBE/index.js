const http = require('http');
const fs = require('fs');

const hostname ='127.0.0.1';
const port = 3000;

const home = fs.readFileSync('tut_67_customBE/index.html');
const about = fs.readFileSync('tut_67_customBE/about.html');
const contact = fs.readFileSync('tut_67_customBE/contact.html');
const more = fs.readFileSync('tut_67_customBE/more.html');
const login = fs.readFileSync('tut_67_customBE/login.html');


const server = http.createServer((req,res)=>{
    console.log(req.url);
    url=req.url;
    res.statusCode=200;
    res.setHeader('Content-Type','text/html');

    if (url == '/') {
        res.end(home);
    } else if(url == '/about'){
        res.end(about);
    }else if(url == '/more'){
        res.end(more);
    }else if(url == '/contact'){
        res.end(contact);
    }else if(url == '/login'){
        res.end(login);
    }else{
        res.statusCode=404;
        res.end("<h1>404 not found</h1>");
    }
    
});

server.listen(port,hostname,()=>{
    console.log(`server running at http://${hostname}:${port}/`);
})