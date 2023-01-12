const body = document.querySelector('body');

const color = document.getElementById('color')
const random = document.getElementById('random')

const lista = ["green", "red", "blue", "yellow", "skyblue", "purple", "orange", "grey", "pink"]

random.addEventListener('click', () => {
    const numero_random = Math.floor(Math.random()* lista.length);
    const color_elegido = lista[numero_random];

    color.textContent = color_elegido;
    body.style.backgroundColor = color_elegido
});