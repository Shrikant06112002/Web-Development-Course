const express = require("express");
const app = express();
let port = 5000;

const sendMail = require("./sendMail");
app.get("/", (req, res) => {
  res.send("i am server");
});
app.get("/sendemail", sendMail);

app.listen(port, () => {
  console.log("I am live in port no. 5000");
});
