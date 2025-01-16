const express = require('express');
const app = express();
require("./db/conn");
const Student = require("./models/student")
const port = process.env.PORT || 3000;

app.use(express.json());//jo bhi data body me aa raha he use json me convert me karne ke liye
//for create new student
app.post("/student",(req,res)=>{
    console.log(req.body);
    const user = new Student(req.body);
    user.save().then(()=>{
        res.status(201).send(user);
    }).catch((e)=>{
        res.status(400).send(e);
    })

});








app.listen(port,()=>{
    console.log(`connection is setup at ${port}`);
});