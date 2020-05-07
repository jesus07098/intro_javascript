//seleccionando el boton, el h1 y el div
const btnChangeState = document.querySelector("button#changeState");
const titleH1 = document.querySelector('h1#title');
const divContainer = document.querySelector('div#container');

btnChangeState.addEventListener('dblclick', function(){
    
    divContainer.classList.add('d-none'); //agregando la clase al div para ocultarlo
    titleH1.classList.add('font-italic'); //agregando la clase al h1 para ponerlo en cursiva
    titleH1.classList.add('text-danger'); //agregando la clase al h1 para ponerle el color rojo
    titleH1.innerHTML= "Haz hecho click";
});