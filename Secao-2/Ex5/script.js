var peso;
var altura;
var resultado;
var imc;

function calcular(event){
    event.preventDefault();

    peso = document.getElementById('peso').value;
    altura = document.getElementById('altura').value;
    console.log(peso, altura);
    imc = peso / (altura * altura);

    resultado = document.getElementById('resultado');

    if (imc < 17) {
        resultado.innerHTML = '<br/> Seu IMC é de: ' + imc.toFixed(2) + ' <br/> Cuidado! Você está muito abaixo do peso';
    } 
    
    else if (imc > 17 && imc <= 18.49) {
        resultado.innerHTML = '<br/> Seu IMC é de:'+ imc.toFixed(2) +'<br/> Você está abaixo do peso';
    } 

    else if (imc > 18.50 && imc <= 24.99) {
        resultado.innerHTML = '<br/> Seu IMC é de:'+ imc.toFixed(2) +'<br/> Você está no peso ideal';
    } 

    else if (imc > 25 && imc <= 29.99) {
        resultado.innerHTML = '<br/> Seu IMC é de:'+ imc.toFixed(2) +'<br/> Você está com sobrepeso';
    } 

    else if (imc > 30 && imc <= 34.99) {
        resultado.innerHTML = '<br/> Seu IMC é de:'+ imc.toFixed(2) +'<br/> Você está com obesidade grau I';
    } 

    else if (imc > 35 && imc <= 39.99) {
        resultado.innerHTML = '<br/> Seu IMC é de:'+ imc.toFixed(2) +'<br/> Você está com obesidade grau II';
    } 

    else if (imc > 40 && imc <= 44.99) {
        resultado.innerHTML = '<br/> Seu IMC é de:'+ imc.toFixed(2) +'<br/> Você está com obesidade grau III';
    } 

    else if (imc > 45 && imc <= 49.99) {
        resultado.innerHTML = '<br/> Seu IMC é de:'+ imc.toFixed(2) +'<br/> Você está com obesidade grau IV';
    } 

    else if (imc > 50) {
        resultado.innerHTML = '<br/> Seu IMC é de:'+ imc.toFixed(2) +'<br/> Você está com obesidade grau V';
    }

    document.getElementById('peso').value = '';
    document.getElementById('altura').value = '';
}