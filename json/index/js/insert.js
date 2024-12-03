document.getElementById("btn1").addEventListener("click", add);      // 19/11/2024

async function add(e) {
  e.preventDefault();     // to prevent default behavior of form submission
  let myEmpno = document.getElementById("eno").value;
  let myName = document.getElementById("nm").value;
  let myCity = document.getElementById("city").value;
  let mySalary = document.getElementById("salary").value;
  let url = "http://localhost:3000/employees";
}

// post request 

try {
  let response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify({
      employeeno: myEmpno,
      name: myName,
      city: myCity,
      salary: mySalary,
    }),
    
  });
  console.log(response);

  let value = await response.json();
  console.log(value);
  alert("Data saved successfully");
} catch (error) {
  console.log(error);
  alert("Error occurred while sending data");
}

// document.getElementById("btn1").addEventListener("click", myInsert);
// function myInsert() {
//   let myEmpno = document.getElementById("eno").value;
//   let myName = document.getElementById("nm").value;  
//   let myCity = document.getElementById("city").value;
//   let mySalary = document.getElementById("salary").value;

//   let url = "http://localhost:3000/employees";
    
//   fetch(url, {
//     // Adding method type
//     method: "POST",
    
//     // Adding body or contents to send
//     body: JSON.stringify({
//       employeeno: myEmpno,
//       name: myName,
//       city: myCity,
//       salary: mySalary,
//     }),

//     // Adding headers to the request
//     headers: {
//       "Content-type": "application/json; charset=UTF-8",
//     },
//   })
//     // Converting to JSON
//     .then((val) => {
//       console.log(val);
//       return val.json();
//     })
//     // Displaying results to console
//     .then((json) => {
//       console.log(json);
//       alert("Data saved successfully");
//     });
// }

