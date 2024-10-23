// onclick
// function display(){
//     document.getElementById("demo").innerHTML = `hello world`;
// }

// addEventListener
let button = document.getElementById("btn");
let t = document.getElementById("demo");
button.addEventListener("click",function(){
t.innerHTML = `hello ok`;
t.style.color = "green";
});

// let name = `devendra`;
// let age = 20;

// let button = document.getElementById("btn2");
// button.addEventListener("click", function () {
//   document.getElementById("clickk").innerHTML = `${name} + ${age}`;
// });

//   let button = document.getElementById("btn");
//   button.addEventListener("mouseleave", display1);

//   function display1() {
//       document.getElementById("demo").innerHTML = `hello from js`;
//   };
//   // button.removeEventListener("mouseleave", display1);
