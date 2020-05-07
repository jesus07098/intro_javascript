//Pido los numeros al usuario 
const num1= document.getElementById('num1');
const num2=  document.getElementById('num2');
const btnCalc= document.getElementById('btnCalc');
//Almaceno el resultado de la suma en una variable

//Muestro en pantalla el resultado de la suma
btnCalc.addEventListener('click', ()=>{
    let valor1= Number(num1.value);
    let valor2= Number(num2.value);
    const add = valor1+valor2;
    alert(`${valor1} + ${valor2} = ${add}`);
});