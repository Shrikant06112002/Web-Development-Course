const express = require("express");
const app = express();
const port = 8000;

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/about", (req, res) => {
  res.send("Hello world it is about page");
});
app.get("/contact", (req, res) => {
  res.status(200).send("Hello world it is contact page");
});
// app.get("/temp",(req,res)=>{
//     res.send("Hello world it is temp page");
// });

//html data serve
app.get("/temp", (req, res) => {
  res.send("<h1>Hello world it is temp page</h1>");
});

//json data serve
app.get("/jsonn", (req, res) => {
  res.json(
    {
      id: 1,
      name: "shrikant",
    },
    {
      id: 2,
      name: "shrikant",
    },
    {
      id: 3,
      name: "shrikant",
    }
  );
});

app.listen(port, () => {
  console.log(`server running at ${port} port`);
});
