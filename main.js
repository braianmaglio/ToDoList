const form = document.getElementById('form')
const listado = JSON.parse(localStorage.getItem('lista')) || [];

const render = () => {
    const todolist = document.getElementById('lista');

    const todosTemplate = listado.map(t => '<li>' + t + '</li>');
    todolist.innerHTML = todosTemplate.join('');

    const elementos = document.querySelectorAll('#lista li');
    elementos.forEach((elemento, i) => {
    elemento.addEventListener('click', () => { 
        elemento.parentNode.removeChild(elemento)
        listado.splice(i, 1)
        actualizaListado(listado)
        render()

    })
})

}

const actualizaListado = (listado) =>{
        const listadoPalabras = JSON.stringify(listado)
        localStorage.setItem('listado', listadoPalabras)
}


window.onload = () => {
        render ()
    //tomar datos desde un formulario
    form.onsubmit = (e) => {
        e.preventDefault();
        const text = document.getElementById('text');
        const textLabel = text.value;
        text.value = '';
        listado.push(textLabel);
        const listadoPalabras = JSON.stringify(listado)
        localStorage.setItem('text', listadoPalabras)
        actualizaListado(text)
        render ()
    }
    
}