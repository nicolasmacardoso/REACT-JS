var area = document.getElementById('area');

function entrar(){
    var nome = prompt("Digite seu nome: ");

    if (nome === null || nome === '') {
        area.innerHTML = "Clique no botão para acessar... ";
        alert("Preencha o campo corretamente!");
    } else {
        area.innerHTML = "Bem-vindo " + nome + "   ";

        let botaoSair = document.createElement("button");
        botaoSair.innerText = "Sair da conta";
        botaoSair.onclick = sair;

        area.appendChild(botaoSair);
    }
}

function sair(){
    area.innerHTML = "Você saiu!";

    alert("Até mais!");
}

function mediaAluno(nota1, nota2) {
    var media = (nota1 + nota2) / 2;

    if (media >= 7 && media <= 10) {
        console.log("Aluno aprovado com a média: " + media);
    } else if (media < 7 && media >= 5) {
        console.log("Aluno em recuperação com a média: " + media)
    } else if (media < 5 && media >= 0) {
        console.log("Aluno reprovado com a média: " + media)
    } else {
        console.log("Notas inválidas! A média não pode ser menor que 0 ou maior que 10.")
    }
}

function Aluno(nome, curso){
    var mensagem = "Seja bem vindo" + nome + " ao curso de " + curso;
    console.log(mensagem);
}