// let name = prompt("Enter your name ");
// let age = parseInt(prompt("Enter your age "));

// console.log(name);
// document.getElementById("demo").innerHTML = name + " " + age;

// function circumference(r){
//     return parseFloat(2 * r * Math.PI)
// };

// document.write(circumference(7));

// convert string to Number

// let  x ="50";
// // let  x ="john";
// console.log(x,typeof x);
// let ans = Number(x);
// console.log(ans,typeof ans);

// convert  number to string

// let  x =50;
// console.log(x,typeof x);
// let ans = String(x);
// // let ans = x.toString;
// console.log(ans,typeof ans);

// convert string to Boolean

// let  x ="false";
// console.log(x,typeof x);
// let ans = Boolean(x);
// console.log(ans,typeof ans);

// let y = "67" +3;
// // console.log(y);

// // // regular Function
// const sum = function (x, y, z) {
//   return x + y + z;
// };
// document.write(sum(10, 20, 30));

// expration function
// const add = function(i,j,k){
//     return i + j + k;
// }
// alert(add(10,20,30));

// Arrow function
// const addition = (a, b, c) => {
//   return a + b + c;
// };
// alert(addition(45, 25, 23));

// one line ke liye
// const addition = (a, b, c) => a + b + c;
// alert(addition(45, 25, 23));

// let a = prompt("enter a number");
// let b = prompt("enter b number");
// const multi = () => {
//   return a * b;
// };
// alert(multi());

const person = {
  fristName: "devendra",
  lastName: "kurwe",
};
const display = () => {
  const element = document.getElementById("demo");
  element.innerHTML = person.fristName + " " + person.lastName;
};

display();