const inputColor = document.querySelector('#color');
const btnCambiarColor = document.querySelector('#cambiar_color');

btnCambiarColor.addEventListener('click', () => {
    let color = inputColor.value;
   
    cambiarColorFondo(color);

});
function cambiarColorFondo(color){

document.body.style.backgroundColor= color;
}