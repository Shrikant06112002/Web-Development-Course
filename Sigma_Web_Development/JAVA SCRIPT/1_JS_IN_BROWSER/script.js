// console methods
console.log(console)
//   log: [Function: log],
//   warn: [Function: warn],
//   dir: [Function: dir],
//   time: [Function: time],
//   timeEnd: [Function: timeEnd],
//   timeLog: [Function: timeLog],
//   trace: [Function: trace],
//   assert: [Function: assert],
//   clear: [Function: clear],
//   count: [Function: count],
//   countReset: [Function: countReset],
//   group: [Function: group],
//   groupEnd: [Function: groupEnd],
//   table: [Function: table],
//   debug: [Function: debug],
//   info: [Function: info],
//   dirxml: [Function: dirxml],
//   error: [Function: error],
//   groupCollapsed: [Function: groupCollapsed],
//   Console: [Function: Console],
//   profile: [Function: profile],
//   profileEnd: [Function: profileEnd],
//   timeStamp: [Function: timeStamp],
//   context: [Function: context]

// console.log("hii shri")
// console.error("hey this is error")
// console.assert(5<3)
// console.log("hii")
// obj = {a:1,b:2,c:3};
// console.table(obj)
// console.warn("dont drink")
// console.info("this is info")

console.time("forloop");
for(let i=0;i<5;i++){
    console.log(1);
}
console.timeEnd("forloop");

// console.time("while");
// let i=0;
// while(i<5){
//     console.log(1);
//     i++;
// }
// console.timeEnd("while");
