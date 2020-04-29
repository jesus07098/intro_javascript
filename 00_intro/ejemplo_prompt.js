//PARTE 1

let estudiante = {};
estudiante.nombre = prompt("Dime tu nombre");
estudiante.edad = parseInt(prompt("Dime tu edad"));
estudiante.curso = prompt("Dime tu curso");
console.log(estudiante);






//PARTE 2
let anoActual= parseInt(prompt("Digite el ano actual"));
let anoNacimiento= parseInt(prompt("Digite ano de nacimiento"));
let edad= anoActual-anoNacimiento;

alert(`Usted tiene  ${anoActual-anoNacimiento} años de edad aproximadamente...`);




//PARTE 3
let nombre = prompt("Como te llamas");
let edad = prompt("Que edad tienes");
let monto = parseInt(prompt("Que cantidad tienes en pesos?"));

//monto = Number.parseInt(monto);
console.log(typeof monto);
edad = parseInt(edad);

let tasaDolar = 54.3;
let conversionDolar = monto / tasaDolar;
console.log(
  `Usted ${nombre}, de edad: ${edad}, haz digitado  $RD ${monto} pesos dominicanos ,su monto convertido a dolar es: ${conversionDolar.toFixed(
    2
  )}`
);

//PARTE 4

//Pido los numeros al usuario 
let num1= parseInt(prompt("Digite numero uno"));
let num2= parseInt(prompt("Digite numero dos"));

//Almaceno el resultado de la suma en una variable
let suma = num1+num2;

//Muestro en pantalla el resultado de la suma
alert(`La suma de  ${num1} y ${num2} es ${suma}`);



