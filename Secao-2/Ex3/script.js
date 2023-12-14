var txtEscolha = document.getElementById('escolha');
var custo = 0;
function pedir(){
    var valor = prompt("Digite um valor de 1 a 4");

    switch(Number(valor)) {
        case 1:
            var quantidade = prompt("Quantos sucos você deseja?");
            custo += quantidade * 4;
            txtEscolha.innerHTML = "Você escolheu 1 = Suco, conta: R$" + custo + ",00";
            break;
        case 2:
            var quantidade = prompt("Quantas águas você deseja?");
            custo += quantidade * 2;
            txtEscolha.innerHTML = "Você escolheu 2 = Água Gelada, conta: R$" + custo + ",00";
            break;
        case 3:
            var quantidade = prompt("Quantos sorvetes você deseja?");
            custo += quantidade * 6;
            txtEscolha.innerHTML = "Você escolheu 3 = Sorvete, conta: R$" + custo + ",00";
            break;
        case 4:
            txtEscolha.innerHTML = "Você chamou o garçom!";
            break;
        default:
            alert("Escolha uma opção entre 1 a 4");
            break;
    }
}