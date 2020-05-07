

//PUNTO 1---------------------------------------------------------------------------------------------------------------------------------------

//Array de tamaño fijo
let diasSemana = [6];

//Ciclo para pedir cada uno de los dias de la semana
for (let i = 0; i <= 6; i++) {
  diasSemana[i] = prompt(`Digite el dia de la semana no. ${i + 1}`);
}

console.log(diasSemana); //impresion de los dias de las semana digitados por el usuario

//PUNTO 2 ---------------------------------------------------------------------------------------------------------------------------------------

//Cantidad de miembros de la familia
let cantidadMiembros;

//Array para almacenar los miembros de la familia
let miembrosFamilia = [];

//Ciclo para pedir cada uno de los miembros de la familia de acuerdo a la cantidad digitada
cantidadMiembros = Number(
  prompt("Digite la cantidad de miembros de su familia incluyendolo a usted...")
);

for (let i = 0; i < cantidadMiembros; i++) {
  miembrosFamilia.push(prompt(`Digite miembro no. ${i + 1} de su familia`));
}

console.log(miembrosFamilia); //impresion de los miembros de la familia digitados por el usuario

//PUNTO 3 -------------------------------------------------------------------------------------------------------------------------------------------

//Objeto que pide datos personales al usuario

let datosPersonales = {
  nombreCompleto: prompt("Digite su nombre completo"),
  fechaNacimiento: prompt("Digite su fecha de nacimiento dia/mes/año"),
  LugarNacimiento: prompt("Digite su lugar de nacimiento"),
  edad: Number(prompt("Digite su edad")),
  comidasFavoritas: [
    prompt("Digite su comida favorita no. 1"),
    prompt("Digite su comida favorita no. 2"),
    prompt("Digite su comida favorita no. 3"),
  ],
  paisesVisita: [
    prompt("Digite el pais no. 1 que le gustaría visitar"),
    prompt("Digite el pais no. 2 que le gustaría visitar"),
    prompt("Digite el pais no. 3 que le gustaría visitar"),
    prompt("Digite el pais no. 4 que le gustaría visitar"),
    prompt("Digite el pais no. 5 que le gustaría visitar"),
  ],
  licenciaDeConducir: confirm(
    "Posee licencia de conducir? Aceptar = Si - Cancelar = No"
  ),
  esUniversitario: confirm(
    "Está en la universidad? Aceptar = Si - Cancelar = No"
  ),
};

//PUNTO 4 --------------------------------------------------------------------------------------------------------------------------------------------------------------

//Objeto con los datos personales del artista favorito del usuario

let datosArtista = {
  nombreCompleto: prompt("Digite el nombre completo de su artista favorito"),
  LugarNacimiento: prompt(
    "Digite el lugar de nacimiento de su artista favorito"
  ),
  edad: Number(prompt("Digite la edad de su artista favorito")),
  cancion: prompt("Digite una de sus canciones"),
};

//Impresion del nombre completo del usuario, su fecha de nacimiento, el primer pais que le gustaria visitar y 4 datos de su artista fav.
alert(
  `Su nombre completo es: ${datosPersonales.nombreCompleto}, 
   Su fecha de nacimiento es: ${datosPersonales.fechaNacimiento}, 
   El primer país que le gustaría visitar: ${datosPersonales.paisesVisita[0]}, 
   4 datos de su artista favorito: 
   Nombre completo: ${datosArtista.nombreCompleto}, 
   Lugar de nacimiento: ${datosArtista.LugarNacimiento}, 
   Edad: ${datosArtista.edad}, 
   Una de sus canciones es: ${datosArtista.cancion}`
);
