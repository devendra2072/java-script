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

//map() create a new array from calling a function for every arry element 

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

// string to array 
// Array to String 
