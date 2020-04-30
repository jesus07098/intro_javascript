

let usuario=[
    
];

usuario.nombre= prompt("Como te llamas?");
usuario.email= prompt("Escribe tu correo:");
usuario.tieneTikTok= prompt("Tienes TikTok? Aceptar = Si / Cancelar= No");

console.log(usuario);

let confirmacion = confirm("Desea salir de este sitio web?");

console.log(confirmacion);

if(confirmacion){
    window.close();
}
