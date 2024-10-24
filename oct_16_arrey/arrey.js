// Array
const weekdays = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];

const d = new Date();
const day = d.getDay();
document.getElementById("demo").innerHTML = weekdays[day];

// forloop

// for (let i = 0; i <10; i++) {
//     console.log(i);
// }

// arrey print  in for loop se

// const number = [1,2,3,4,5,6,7,8,9];
// let len = number.length;
// // console.log(len);
// for (let i = 0; i <len; i++) {
//     console.log(number[i]);
// }

// wap to print 1 to 10 number innerhtml main
// const number = [1,2,3,4,5,6,7,8,9];
// let len = number.length;
// let text = "";
// // console.log(len);
// for (let i = 0; i <len; i++) {
//     text += number[i]+"<br>";
// }
// document.getElementById("demo").innerHTML = text;

// const weekdays = [
//   "sunday",
//   "monday",
//   "tuesday",
//   "wednesday",
//   "thursday",
//   "friday",
//   "saturday",
// ];

// let len = weekdays.length;
// let text1 = "";
// // console.log(len);
// for (let i = 0; i <weekdays; i++) {
//     text += weekdays[i]+"  ";
// }
// document.getElementById("demo").innerHTML = weekdays;

// for in loop

// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     age:34,
//     city: "London",
// };
// let text2 = "";

// for (let key in person) {
//     text2 += person[key]+" ";
// }
// document.getElementById("demo").innerHTML = text2;

// const person = [45,4,9,16,25];
// let text2 = "";

// for (let x in person) {
//     text2 += person[x]+" ";
// }
// document.getElementById("demo").innerHTML = text2;

// for (let r = 1; r <= 10; r++) {
//   document.write("*");
// }

// for (let r = 1; r <=5; r++) {
//   for (let c = 1; c <= r; c++) {
//     document.write("*");
//   }
//   document.write("<br>");
// }


