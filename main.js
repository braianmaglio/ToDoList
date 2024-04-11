const boton = document.getElementById('boton')
boton.addEventListener("click", PreguntarNombre )

const respuesta = document.getElementById("P")
const saludos = document.getElementById("pregunta")

function PreguntarNombre () {
    const nombre = prompt("Introduce tu nombre");
    mostrarNombre(nombre);
}

function mostrarNombre(nombre) {
    respuesta.textContent = nombre ;
    saludos.textContent = "Hola "
}