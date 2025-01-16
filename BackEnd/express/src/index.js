const path = require("path");
const express = require("express");
const hbs = require('hbs')
const app = express();
const port = 8000;


// relative parth src/img/...
//abosulte path __dirname
// console.log(__dirname);

// console.log(path.join(__dirname,"../public"));
const staticPath =path.join(__dirname,"../public")
const templetePath =path.join(__dirname,"../templates")
const partialPath =path.join(__dirname,"../templates/partials")



// //builtin middleware



//to set the view engine

app.set('view engine', 'hbs');
app.set('views',templetePath);
hbs.registerPartials(partialPath);
app.use(express.static(staticPath));
// console.log(path.join(__dirname,"../templates/views"));

app.get("/",(req,res)=>{
    res.render("../templates/views/index.hbs");
});
app.get("/weather",(req,res)=>{
    res.render("../templates/views/weather");//without path bhi cal jata

});
app.get('/weather/*',(req,res)=>{
    res.render("../templates/views/404.hbs",{
        errorcomment:"404 Error Ocuured at about us"
    });
})
app.get('*',(req,res)=>{
    res.render("../templates/views/404.hbs");
})
// app.get("/",(req,res)=>{
//     res.send("Hello world");
// });

// app.get("/about",(req,res)=>{
//     res.send("Hello world it is about page");
// });

app.listen(port, () => {
    console.log(`server running at ${port} port`);
  });
  