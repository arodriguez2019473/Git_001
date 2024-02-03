function agregarContacto() {
    alert('Vamos a nuevo contacto');
    window.location.href = '../Paginas/nuevo_Contactos.html';
}
function Favoritos() {
    window.location.href = '../Paginas/Favorito.html';
  }

  function Usuario() {
   window.location.href = '../Paginas/Favorito.html';
 }


function mostrarInformacion(infoId) {
   var infoDetallada = document.getElementById(infoId);

    if (infoDetallada.style.display === "none") {
         infoDetallada.style.display = "block";
     } else {
        infoDetallada.style.display = "none";
   }
}