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