document.addEventListener('DOMContentLoaded', function () {
    const miDiv = document.querySelector('div');

    function saludarDiv() {
        alert('Hola! Soy el div');
    }

    miDiv.addEventListener('click', saludarDiv);
});