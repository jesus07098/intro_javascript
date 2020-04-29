const diasSemana = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
];
let nombreFamilia = ["Elba", "Raymundo", "Rayel", "Daniel"];

let datosPersonales = {
    nombreCompleto: "Jesus Daniel Cirineo Jáquez",
    fechaNacimiento: "07/12/1998",
    LugarNacimiento: "Santiago",
    edad: 21,
    comidasFavoritas: [
        "Pizza",
        "Lazana",
        "Pastelon",
        "Arroz meloso de rape y mero",
        "Teriyaki",
    ],
    paisesVisitar: [
        "Rusia",
        "Japon",
        "Canada",
        "Colombia",
        "Mexico",
        "Alemania",
        "Egipto",
        "Francia",
    ],
    licenciaConducir: false,
    universidad: true,
};

let artistaFavorito = {
    nombreCompleto: "Aubrey Drake Graham",
    fechaNacimiento: "24/10/1986",
    LugarNacimiento: "Canada",
    edad: 33,
    ocupacion: ["Rapero", "Compositor", "Productor discografico", "Cantante"],
};
//MI NOMBRE COMPLETO
console.log("Mi nombre completo: " + datosPersonales.nombreCompleto);

//MI FECHA DE NACIMIENTO
console.log("Mi fecha de nacimiento: " + datosPersonales.fechaNacimiento);

//PRIMER PAIS QUE ME GUSTARIA VISITAR
console.log("Primer pais que visitaria: " + datosPersonales.paisesVisitar[0]);

//4 DATOS DE MI SUPUESTO ARTISTA FAVORITO
console.log(
    "Nombre completo del artista: " +
    artistaFavorito.nombreCompleto +
    ", fecha de nacimiento: " +
    artistaFavorito.fechaNacimiento +
    ", Lugar de nacimiento: " +
    artistaFavorito.LugarNacimiento +
    ", Ocupación principal: " +
    artistaFavorito.ocupacion[3]
);

//DIA DE LA SEMANA EN EL QUE NACI
console.log("Dia en el que nací: " + diasSemana[1]);
