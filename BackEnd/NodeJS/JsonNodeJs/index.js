const fs = require('fs');
const bioData ={
    name:"shrikant",
    age:21,
    year:"second",
};
// console.log(bioData); //{ name: 'shrikant', age: 21, year: 'second' }

const jsonData = JSON.stringify(bioData);  //object -->json data {"name":"shrikant","age":21,"year":"second"}
// console.log(jsonData);

// const objData = JSON.parse(jsonData);  //json-->object { name: 'shrikant', age: 21, year: 'second' }
// console.log(objData)
fs.writeFile("Json.json",jsonData,(err)=>{
    console.log("done")
});

// fs.readFile("Json.json","utf-8",(err,data)=>{
//     console.log(data);
// })

fs.readFile("Json.json","utf-8",(err,data)=>{
    const orgData = JSON.parse(data);
    console.log(orgData);
        console.log(data);
    })