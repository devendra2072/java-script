// set item 
// saving the data to the local storage 
localStorage.setItem("Name","devendra kurwe");
localStorage.setItem("Email","devendra6@gmail.com");
localStorage.setItem("Password","12233");


// getting the data  from to the local storage 

let name = localStorage.getItem("Name")
let email = localStorage.getItem("Email")
let password = localStorage.getItem("Password")

alert("Name: "+ name + "Email" + email + "Password" + password);

// remove key from local storage
localStorage.removeItem("Name")

localStorage.clear