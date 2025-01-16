const fs = require("fs");
let text = fs.readFileSync("info.txt","utf-8");
text.replace("lorem","abc");

console.log(text);

fs.writeFileSync("shrikant.txt",text);

