let inputNumero1= document.getElementById("numero1");
let inputNumero2= document.getElementById("numero2");
let btnCalcular = document.getElementById("btnCalcular");

btnCalcular.addEventListener('click', function(){
    let valor1= Number(inputNumero1.value);
    let valor2= Number(inputNumero2.value);
    alert(`La suma es ${valor1+valor2}`);
});
