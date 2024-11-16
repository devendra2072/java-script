// var data = "hello \nworld";
// alert(data);


// template litteral
// let name = "john";
// var data = `hello how are you? ${name}
//  how 'z you`;
// alert(data);

// document object model (dom)  tree format main hota hai

// let heading1 = document.getElementById("demo");

// const change = () => {
//     heading1.innerText = "hello everyone";
//     heading1.style.color = "red";
//     heading1.style.backgroundColor = "black";
// }

// set time out ak bar run karta hai

// const display = () => {
//     alert("set time out runmning");
// }

// const change = () => {
//     setTimeout(display, 1000);
// }


// set interval function ko baar baar call karta jata hai

// const setData = () => {
//     document.getElementById("demo").innerHTML += "bhopal";
// }

// const change = () => {
//     setInterval(setData,500);
// };


// time Date

const setDate = () => {
    var myDate = new Date();
    var myTime = myDate.toLocaleTimeString();
    document.getElementById("demo").innerHTML = `current time ${myTime}`;
};

const change = () => {
    setInterval(setDate, 1000);
};