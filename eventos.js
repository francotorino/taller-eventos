document.addEventListener('DOMContentLoaded', function () {
    const miDiv = document.getElementById('verde');
    const boton = document.getElementById('boton')

    function saludarDiv() {
        alert('Hola! Soy el div');
    }

    function saludarBoton(){
        alert('Hola!');
        event.stopPropagation();
    }

    miDiv.addEventListener('click', saludarDiv);
    boton.addEventListener('click', saludarBoton);
});