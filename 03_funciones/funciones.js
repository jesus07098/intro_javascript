function cambiarEstilo(){
    document.body.style.backgroundColor= "orange";
}

function escribirMensaje(){
    document.write('Hola Mundo, esto es JS');
}
const DivClick= document.querySelector('#div');

DivClick.addEventListener('click', ()=>{
    escribirMensaje();
    cambiarEstilo();
});