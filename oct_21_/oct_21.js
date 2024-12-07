// function generatePass() {
//     var pass ="";
//     var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz012344567890@#$&%";
//     for (let i = 1; i <= 8; i++){
//         var char = Math.floor(Math.random() * str.length);
//     pass+= str.charAt(char);
//     }
//     return pass;
// }
// function display(){
//     document.getElementById("demo").innerHTML = generatePass();
// }  

//map() return  a new array from calling a function for every arry element 
// const numbers = [1,2,3,4,5,6,7,8];
// const newArray = numbers.map( function (num)
// {
//     return num*10;
// }
// );
// console.log(newArray);


// ---------------------
// const language = ["php","react", "javascript","html"];
// const newData = language.map(display);
// function display(key) {
//     // return "<h1>" + key + "</h1>";
//     return`<h1>" + ${key} + "</h1>";`
// }

// document.getElementById("demo").innerHTML = newData;

// fillter method 
// const age = [30,52,23,42,63,12,55];
// const newAge  = age.filter(sortAge);
// function sortAge(key) {
//     return key > 50;
// }
// console.log(newAge);

// {/* <select> tag ka use */}
// const language = ["php","react", "javascript","html"];
// let list = "<select>";
// const data = language.map(display1);
// function display1(key) {
//     return (list += `<option>${key}</option>`);
// }
// list += "</select>";
// document.getElementById("demo").innerHTML = list;

const language = ["php","react", "javascript","html"];
var list = "<select>";
const data = language.map(display1);
function display1(key) {
    list += `<option>${key}</option>`;
}
list += "</select>";
document.getElementById("demo").innerHTML = list;

// const colors =["red","green","yellow","blue"];
// let text = "<ul>";
// for (let i = 0; i < colors.length; i++) {
//      text += `<li>${colors[i]}</li>`;
// }
// document.getElementById("demo").innerHTML = text;

// const newColors = colors.map(function(key){
//     text += `<li>${key}</li>`
// })
// document.getElementById("demo").innerHTML = text;

// for each 
// const colors =["red","green","yellow","blue"];
// let text = "<ul>";
// colors.forEach(function (key) {
//     text += `<li>${key}</li>`;
// });
// text += "</ul>";
// document.getElementById("demo").innerHTML = text;


// const mixed =[
//     "hello",
//     78,
//     34,
//     "kya hua?",
//     {firstname:"John",lastname:"deo"}
// ];

// console.log(mixed[0]);
// console.log(mixed[4]);
// console.log(mixed[4].firstname);

// mixed[3] = "kuch nahi";
// console.log(mixed);

// const numbers1 = [2,4,6,8,10];
// const numbers = new  Array ([1,2,3,4,5]);
// const numbers2 =[];
// numbers2[0] = "abhishek";
// numbers2[1] = "nikhil";
// numbers2[2] = "devendra";
// console.log(numbers2);

// const numbers3 = [];
// numbers3.push("bmw");
// numbers3.push("audi");
// numbers3.push("thar");
// console.log(numbers3)

// string to array 
// Array to String 
