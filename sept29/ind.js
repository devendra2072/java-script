// let city = "bhopal";
// let name = "jhonny depp";

// let data =
//   "hello world" + city + "\n" + "is the capital of mp" + name + "is our fev";

//   alert(data);


// // Template literals , template string , backtics

// data = ` my name is dev`
// data =  "studing";
// alert(data);


// let price =10;
// let VAT = 0.25;

// let total = `Total: ${(price * (1+VAT)).toFixed(20)}`;

// alert(total);


// addEventListener
// click
// let button = document.getElementById("btn");
// button.addEventListener("click", function() {
//     alert("event successfully")
//     document.getElementById("demo").innerHTML = "hello"
// });


let button = document.getElementById("btn");
button.addEventListener("mouseleave", display1); 
// button.removeEventListener("mouseleave", display1);

function display1() {
    document.getElementById("demo").innerHTML = `hello from js`;
};





