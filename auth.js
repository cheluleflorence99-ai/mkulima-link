// Login

const loginForm = document.getElementById("loginForm");

if(loginForm){

loginForm.addEventListener("submit", function(e){

e.preventDefault();

alert("Login Successful");

window.location.href = "farmer-dashboard.html";

});

}

// Register

const registerForm = document.getElementById("registerForm");

if(registerForm){

registerForm.addEventListener("submit", function(e){

e.preventDefault();

alert("Registration Successful");

window.location.href = "login.html";

});

}