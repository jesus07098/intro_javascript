
// Pido al usuario el año actual
let anoActual= parseInt(prompt("Digite el año actual"));

// Pido al usuario el año de nacimiento
let anoNacimiento= parseInt(prompt("Digite su año de nacimiento"));

//Almaceno en una variable el calculo de la edad 
let edad= anoActual-anoNacimiento;


//Muestro en pantalla la edad segun lo digitado
alert(`Usted tiene  ${anoActual-anoNacimiento} años de edad aproximadamente...`);