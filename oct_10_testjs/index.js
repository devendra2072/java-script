

function change(){
    let h1 = document.getElementById("demo");
    h1.innerHTML = "Hello world, My name is Aaradhya Paranjpe, I am 23 years old and am a trainee at Cybrom Technology";
    h1.style.color = "red";
    h1.style.backgroundColor = "black";
    h1.style.border = "20px double green";
    h1.style.fontFamily = "verdana";
    h1.style.fontSize = "45px";
}
document.getElementById("btn").addEventListener("click",change);