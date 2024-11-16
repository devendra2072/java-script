document.getElementById("login").addEventListener("click", login);

function login(e) {
    e.preventDefault();  // Prevent default behaviour of form submit
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if(username == ""||password ==""){
        alert("All fields are required");
        return;
    }

    let storedusername = localStorage.getItem("username");
    let storedpassword = localStorage.getItem("password");

    if(storedusername == username && storedpassword == password){
        alert(`Login Successfull,Welcome ${username}`);
        window.location.href = "welcome.html";
    }
    else{
        alert("Invalid credentials");
    }
}