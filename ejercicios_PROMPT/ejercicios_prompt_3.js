//Pido datos al usuario como el nombre, edad y la cantidad en pesos a convertir
let nombre = prompt("Como te llamas");
let edad = parseInt(prompt("Que edad tienes"));
let monto = parseInt(prompt("Que cantidad tienes en pesos?"));

//monto = Number.parseInt(monto);
//console.log(typeof monto);
//edad = parseInt(edad);

//variable con la tasa de compra del dolar
let tasaDolar = 54.3;

//Variable que almacena el resultado de conversion a pesos dominicanos
let conversionDolar = monto / tasaDolar;

//Monstrando el resultado de la conversion y los datos del usuario...
alert(`Usted ${nombre}, de edad: ${edad}, haz digitado  $RD ${monto} pesos dominicanos , su monto convertido a dolar es: ${conversionDolar.toFixed(2)}`);
