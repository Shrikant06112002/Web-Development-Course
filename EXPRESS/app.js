//express is web appliaction frame work of node js,free and open source platform
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
    const con = "THis is best game which is pubg";
    const params ={'tittle':'Gym web','content': con}
    res.status(200).render('index.pug',params)
})
app.post('/',(req,res)=>{
    // console.log(req.body); -->all form data are collect here
    name = req.body.name
    age = req.body.age
    gender = req.body.gender
    address = req.body.address
    more = req.body.more

    let outputToWrite =` the name of the client is ${name}, ${age} years old, ${gender},residing at ${address}, more about him/her ${more}`
    fs.writeFileSync('output.txt',outputToWrite)
    const params ={'message':'Your form has been submitted succesfully'}
    res.status(200).render('index.pug',params)
})


//start server
app.listen(port,()=>{
    console.log(`the app is startes succrssfully on port ${port}`)
})