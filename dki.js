function showRegister() {
    document.getElementById("loginForm").classList.add("hidden");
    document.getElementById("registerForm").classList.remove("hidden");
  }
  
  function showLogin() {
    document.getElementById("registerForm").classList.add("hidden");
    document.getElementById("loginForm").classList.remove("hidden");
  }
  
  function login() {
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;
    alert("Đăng nhập với:\nTên đăng nhập: " + username + "\nMật khẩu: " + password);
  }
  
  function register() {
    const username = document.getElementById("regUsername").value;
    const email = document.getElementById("regEmail").value;
    const password = document.getElementById("regPassword").value;
    alert("Đăng ký với:\nTên đăng nhập: " + username + "\nEmail: " + email + "\nMật khẩu: " + password);
  }
  