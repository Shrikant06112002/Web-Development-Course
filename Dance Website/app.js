const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const port=80;//localhost:80/localhost


// Express Stuff
app.use(`/static`,express.static(`static`)) //for serving static file acess
app.use(express.urlencoded())

//PUG Stuff
app.set('view engine', 'pug') //set the templete engine as a pug
app.set('views',path.join(__dirname,'views')) //set the views directory

//Endpoints
app.get('/',(req,res)=>{
    const params ={}
    res.status(200).render('index.pug',params)
})
app.get("/contact", (req, res)=>{ 
    res.status(200).send(‘contact.pug’, params);
});

//start server
app.listen(port,()=>{
    console.log(`the app is startes succrssfully on port ${port}`)
})