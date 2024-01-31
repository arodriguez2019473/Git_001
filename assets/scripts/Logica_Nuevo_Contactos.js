function agregarContacto() {
    var nombre = document.getElementById('nombre').value;
    var telefono = document.getElementById('telefono').value;
    var email = document.getElementById('email').value;

    // Crear un elemento de lista para mostrar el nuevo contacto.
    var contactoElement = document.createElement('p');
    contactoElement.innerHTML = "<strong>Nombre:</strong> " + nombre + ", <strong>Teléfono:</strong> " + telefono + ", <strong>Email:</strong> " + email;

    // Agregar el elemento de lista al contenedor de contactos.
    document.getElementById('contactList').appendChild(contactoElement);

    // Puedes reiniciar el formulario si es necesario.
    document.getElementById('contactForm').reset();
}
