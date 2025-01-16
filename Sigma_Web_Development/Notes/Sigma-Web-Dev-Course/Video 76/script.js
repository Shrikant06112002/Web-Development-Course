// async function getData() {
//     // Simulate getting data from a server
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455)
//         }, 3500);
//     })
// }
console.log("hii")
// settle means resolve or reject
// resolve means promise has settled successfully
// reject means promise has not settled successfully

async function getData(){
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data = await x.json(); // await wait karenga data laane takk
    console.log(data); //  json formate me data aaya hoga


}
let d = getData();
console.log(d);

//for the post request
// async function getData() {
//     // Simulate getting data from a server
//     // let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     // 
//     let x = await fetch('https://jsonplaceholder.typicode.com/posts', {
//                 method: 'POST',
//                 body: JSON.stringify({
//                     title: 'foo',
//                     body: 'bar',
//                     userId: 1,
//                 }),
//                 headers: {
//                     'Content-type': 'application/json; charset=UTF-8',
//                 },
//             })
//     let data = await x.json() 
//     return data
// }

// async function main(){
//     console.log("Loading modules")

//     console.log("Do something else")

//     console.log("Load data")
//                               // await are only use in the async function
//     let data = await getData() // wait until the function get totally execute

//     console.log(data)

//     console.log("process data")

//     console.log("task 2")

// }

// main()

 

// data.then((v) => { 
//     console.log(data)

//     console.log("process data")

//     console.log("task 2")
 
// })