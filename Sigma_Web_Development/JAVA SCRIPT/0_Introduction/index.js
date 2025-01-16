// 1.ways to print in java script
// console.log("hello world");
// alert("me");
// document.write("thia is document write");
// console.log("hello world");

//    // 2.javascript console API
// console.error("this is an error");
// console.log("hello world",4+6,"Another log");
// console.log("hello world");

// 3.javascript variables
// what are variables?
// :conatiner to store data value
// var number1 =34;
// var number2 =56;
// console.log(number1+number2);

//4.Data types in javascript
// //number
// var num1 =455;   //blue means number
// var num2 =56.76;
// var num3 = "this is string 23";
// // //string
// var str1 = "this is a string";          //black means string
// var str2='this is also string' //semicolon not compulsory
// console.log(str1,num3)
//objects
// var marks ={
//     ravi : 34,
//     shumbham:78,
//     harry: 99.977
// }
// console.log(marks)

// Boollens
// var a = true;
// var b = false;
// console.log(a,b);

//undefined
// var und = undefined;
// var und;
// console.log(und);

//null
// var n= null;
// console.log(n);
/*
at a very high level ,there are two tpes of data types in javascript
1.primitive data type : undefined,null,number,string,boolen,Symbol
2.Reference data type : Arrays and objects
*/
//array
// let arr =[1,2,"shrikant",4,5]  //numbering start from zero
// console.log(arr)

//array map method --> return a new array
// let arr2 =[12,74,85]
// let a = arr2.map((value)=>{
//   console.log(value)
//   return value+1;
// })
// console.log(a)

// //array filter method
// let arr3 = [43,45,65,0,98]
// let a2 = arr3.filter((a)=>{
//   return a<10
// })
// console.log(a2)

//array reduce method
let arr4 = [1,2,3,4,5]
let a3 = arr4  .reduce((a1,a2)=>{
  return a1+a2;
})
console.log(a3)
//opertors in javascript

// //1.unary operator
// var c=74;
// c=-c;
// console.log(c)

// //2.binary operator
//  c=c+6;
//  console.log(c);

//3.arthemitecial operator
// var a = 34;
// var b= 56;
// console.log(" the value of a + b is ",a+b);
// console.log(" the value of a - b is ",a-b);
// console.log(" the value of a * b is ",a*b);
// console.log(" the value of a / b is ",a/b);

//Assignment Opertors
// var c=b;
// c+=2;
// c-=2;
// c*=2;
// c/=2;
// console.log(c);

//comparision operator
// var x = 34;  //34 & 56 opertends    +,-,*,/ opertors
// var y = 56;
// console.log(x == y);
// console.log(x<y);

// //logical operators
// //1.logical and
// console.log(true && false)
// console.log(true && true)
// console.log(false && false)

// // //2.logical or
// console.log(true || false)
// console.log(true || true)
// console.log(false || false)

// // //3.logical not
// console.log(!true)
// console.log(!false)

// //function in javascript
// //DRY = do not repeat yourself
// function avg(a,b){
//   return (a+b)/2;
// }
// c1 = avg(4,6);
// c2 = avg(14,16);
// console.log(c1,c2)

// //conditionals in javaScript
// //1.if else
// var age =5;
// if ( age>8){
//   console.log(' you are not a kid')
// }
// else{
//   console.log('you are kid')
// }

// //2.if else lader
// var age =15;
// if ( age>8){
//   console.log(' you are not a kid')
// }
// else if (age>80){
//   console.log('you are old')
// }
// else{
// //   console.log('you are kid')
// // // }
// console.log('end of ladder')

// var arr = [1,2,3,4,5,6,7];
// console.log(arr);
// for(var i = 0;i<arr.length;i++){
//   if(i==2){
//     continue;
//   }
//   console.log(arr[i]);
// }

// arr.forEach(function(element){
//   console.log(element)
// })
// let j=0;
// const ac= 2;
// ac++;
// while(j<arr.length){
//   console.log(arr[j]);
//   j++;
// }

// do {
//   console.log(arr[j]);
//   j++;
// } while(j<arr.length)

// let myArr = ["Fan","camera",34,null,true];
// //Array methods
// console.log(myArr.length);
// //myArr.pop();
// myArr.push("harry")
// myArr.shift()
// const newLen = myArr.unshift("harry");
// console.log(newLen);
// console.log(myArr);

//  strting methods in javascript
// let myLovelyString = "shrikant shrikant is good good boy";
// console.log(myLovelyString.length);
// console.log(myLovelyString.indexOf("good"));
// console.log(myLovelyString.lastIndexOf("good"));
// console.log(myLovelyString.slice(2, 8));
// d = myLovelyString.replace("shrikant", "pradyun");
// console.log(d, myLovelyString);
// console.log(myLovelyString.charAt(2))
// console.log(myLovelyString.charCodeAt(2))

// var name = "shrikant";
// var temp = `${name} is nice`;
// console.log(temp);

//  let mydate = new Date();
//  console.log(mydate);
//  console.log(mydate.getTime()); //second me
//  console.log(mydate.getFullYear())
//  console.log(mydate.getDay()) // M T W TH F S S
//  console.log(mydate.getMinutes())
//  console.log(mydate.getMonth())
//  console.log(mydate.getUTCDate())
//  console.log(mydate.getTimezoneOffset())

// document.getElementById('click').style.border = 'blue'
// document.getElementById('click').style.border = '2px solid blue'

// DOM Manipulation
// let elemclass = document.getElementById('click');
// console.log(elemclass);

// let elemclass = document.getElementsByClassName('container')
//  console.log(elemclass);
// elemclass[0].style.background = ("yellow")
// elemclass[0].classList.add("bg-primary");
// elemclass[0].classList.add("bg-primary");
// elemclass[0].classList.add("text-success")
// console.log(elem.innerHTML);
// console.log(elem.innerText);
// console.log(elemClass[0].innerHTML);
// console.log(elemClass[0].innerText);
// tn = document.getElementsByTagName('div')
// console.log(tn)
// createElement = document.createElement('p');
// createElement.innerText = "This is created para";
// tn[0].appendChild(createElement);
// createElement2 = document.createElement('b');
// createElement2.innerText = "This is created bold";
// tn[0].appendChild(createElement2);
//removeChild(element);---> removes an element

// Selecting using Query
// sel = document.querySelector('.container')
// console.log(sel)
// sel = document.querySelectorAll('.container')
// console.log(sel)

// function clicked(){
//   console.log('the button was clicked')
// }
// window.onload = function(){
//   console.log('the document was load')
// }
// //Events in JS
// firstContainer.addEventListener('click' , function(){
// console.log("click hua");
// document.querySelectorAll('.container')[1].innerHTML="<b> we have clicked</b>"
// console.log("Clicked on container")
// })

// firstContainer.addEventListener('mouseover' , function(){
//   console.log("mouse on container");
//   })
//   firstContainer.addEventListener('mouseout' , function(){
//     console.log("mouse out of container");
//     })

// let prevHTML = document.querySelectorAll('.container')[1].innerHTML;
//     firstContainer.addEventListener('mouseup' , function(){
//       document.querySelectorAll('.container')[1].innerHTML = prevHTML;
//       console.log("mouse up when clicked on  container");
//       })

//       firstContainer.addEventListener('mousedown' , function(){
//         console.log("mouse down container")
//         })

//Arrow functiom
//  function sum(a,b){
//    return a+b;
//  }
//  sum = (a,b)=>{
//    return a+b;
//  }

//set timeout

// logkaro = () => {
//   document.querySelectorAll(".container")[1].innerHTML =
//     "<b> we set interval fired</b>";
//   console.log("i am your log");
// };
//  setTimeout(logkaro,2000);
//  setInterval(logkaro,2000)
//  clr = setInterval(logkaro,2000);
// Use clearInterval(clr) /clear timeout to cancel setinterval /settimeout

//  javascript local storage
// localStorage.setItem('name','shrikant')
// //localStorage
// localStorage.getItem('name')

//json
// obj = {name:"harry",length:1, a :({this : 'that'})}  //doble colomn he aayega
// jso = JSON.stringify(obj);
// console.log(typeof jso)
// console.log(jso)
// parsed = JSON.parse('{"name":"shrikant","length":1,"a":{"this:"that"}}')
// console.log(parsed);
