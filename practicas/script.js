const btnChangeState = document.querySelector("button#changeState");
const titleH1 = document.querySelector('h1#title');
const divContainer = document.querySelector('div#container');

btnChangeState.addEventListener('dblclick', function(){
 divContainer.classList.add('d-none');
 titleH1.classList.add('font-italic');
 titleH1.classList.add('text-danger');
});