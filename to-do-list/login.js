document.getElementById("loginForm").addEventListener("submit", (event) =>{
  event.preventDefault();
  const username = document.getElementById("username");
  const password = document.getElementById("password");

  const loginButton = document.querySelector("#login-button");
  const storedUsername = localStorage.getItem("username");
  const storedPassword = localStorage.getItem("password");
  console.log("login");

  loginButton.onclick = () => {
      if (username.value === storedUsername && password.value === storedPassword){
          console.log("logged in")
          alert(`Welcome back ${username.value}`);
          window.location.href = "home.html";
      }
      else {
          alert("wrong password or username");
      }

  }
})

