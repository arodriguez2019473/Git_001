function agregarContacto() {
    window.location.href = '../Paginas/nuevo_Contactos.html';
}

function Favoritos() {
  window.location.href = '../Paginas/Favorito.html';
}

function Usuario(){
  window.location.href = '../Paginas/Usuario.html'
}

function Cerrar(){

    window.location.href = '../../Index.html'
}

function mostrarInformacion(infoId) {
   var infoDetallada = document.getElementById(infoId);

    if (infoDetallada.style.display === "none") {
         infoDetallada.style.display = "block";
     } else {
        infoDetallada.style.display = "none";
   }
}