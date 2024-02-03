function agregarTarea() {
    var nuevaTarea = document.getElementById('nuevaTarea').value;

    if (nuevaTarea.trim() !== "") {
        var listaTareas = document.getElementById('listaTareas');

        // Crear un nuevo elemento li para la tarea.
        var tareaElemento = document.createElement('li');

        // Agregar la tarea a la lista con un botón de eliminación.
        tareaElemento.innerHTML = `${nuevaTarea} <button onclick="eliminarTarea(this)">Eliminar</button>`;
        
        // Agregar la tarea a la lista.
        listaTareas.appendChild(tareaElemento);

        // Limpiar el campo de entrada.
        document.getElementById('nuevaTarea').value = '';
    }
}

function eliminarTarea(elemento) {
    var listaTareas = document.getElementById('listaTareas');
    var tareaElemento = elemento.parentNode;
    listaTareas.removeChild(tareaElemento);
}