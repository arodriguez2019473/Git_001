document.getElementById("signup").addEventListener("click", function() {
  var messageElement = document.querySelector(".message");
  messageElement.style.transform = "translateX(100%)";

  if (messageElement.classList.contains("login")) {
    messageElement.classList.remove("login");
  }

  messageElement.classList.add("signup");
});

document.getElementById("login").addEventListener("click", function() {
  var messageElement = document.querySelector(".message");
  messageElement.style.transform = "translateX(0)";

  if (messageElement.classList.contains("signup")) {
    messageElement.classList.remove("signup");
  }

  messageElement.classList.add("login");
});

function validarFormulario() {
  var Nombre = document.getElementById("Nombre").value;
  var Email = document.getElementById("Email").value;
  var Contraseña = document.getElementById("Contraseña").value;

  if (Nombre === "" || Email === "" || Contraseña === "") {
      alert("Por favor, complete todos los campos del formulario.");
      return false;
  }

  alert("Formulario enviado correctamente. Redireccionando...");

  window.location.href = 'otra_pagina.html';

  return true;
}