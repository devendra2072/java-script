// const cars = ["BMW","mercedes","fortuner","thar"];
// let data = "";
// // in for in x denotes the index of an array
// // x denotes the items of an array not index
// for (let x of cars) {
//     data += x + " ";
// }
// document.getElementById("demo").innerHTML = data;

// const language = "javascript";
// let data = " ";
// for (let x of language){
//     data += x + "  ";
// }
// document.getElementById("demo").innerHTML = data;

// while loop

// let text = " ";
// let i = 1;
// while (i<11) {
//     text += `The number is ${i} <br>`;
//     i++;
// }
// document.getElementById("demo").innerHTML = text;

// do while loop

// let text = " ";
// let i = 1;
// do {
//   text += `The number is ${i} <br>`;
//   i++;
// } while (i <= 10);
// document.getElementById("demo").innerHTML = text;

// Q  calculate the number
// let sum = 0;
// const number = [10,20,30,40,50,60,70,80,90,100];
// function display (x) {
//     sum += x;
// }
// number.forEach(display);
// document.getElementById("demo").innerHTML = sum;

function show() {
  let myData = document.getElementById("mydemo");
  myData.style.backgroundColor = "rgba(255 red , 255 red , 255 red)";
  myData.style.fontFamily = "times new roman camel new roman serif ";
  myData.style.fontSize = "24px";
  myData.innerHTML = `
    <center><table border="5" bgcolor="lightblue" height="300px" width="500px" >
    <tr bgcolor="red" height="60px">
    <th>Name</th>
    <th>Age</th>
    <th>Course</th>
    </tr>
    <tr>
    <td>Deadpool</td>
    <td>33</td>
    <td>M.tech</td>
    </tr>
    <tr>
    <td>Doctor Strange</td>
    <td>33</td>
    <td>scintist</td>
    </tr>
    <tr>
    <td>berlin</td>
    <td>38</td>
    <td>hecker</td>
    </tr>
    <tr>
    <td>Professor</td>
    <td>42</td>
    <td>teacher</td>
    </tr>
    <tr>
    <td>Wolverine</td>
    <td>42</td>
    <td>martial Arts</td>
    </tr>
    </table></center>
    `;
}
