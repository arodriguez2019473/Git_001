document.getElementById("signup").addEventListener("click", function() {
    var messageElement = document.querySelector(".message");
    messageElement.style.transform = "translateX(100%)";
  
    if (messageElement.classList.contains("login")) {
      messageElement.classList.remove("login");
    }
  
    messageElement.classList.add("signup");
  });
  
  document.getElementById("login").addEventListener("click", function() {
    var messageElement =
  