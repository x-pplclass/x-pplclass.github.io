function checkPassword() {
    // CODE BY NAFIL
    var password = "X_PPL_CLASS";
    var passwordInput = document.getElementById("passwordInput").value;
  
    if (passwordInput === password) {
      document.getElementById("login-page").style.display = "none";
      document.getElementById("next-page").style.display = "block";
    } else {
      alert("Password salah! Silakan coba lagi.");
    }
  }
  