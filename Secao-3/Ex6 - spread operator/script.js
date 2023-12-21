/* let primeiros = [1, 2, 3];

let numeros = [...primeiros, 4, 5, 10];

console.log(numeros);
 */


/* let pessoa = {
    nome: "Nícolas",
    idade: 18,
    cargo: "Estagiário"
}

let novaPessoa = {
    ...pessoa,
    status: "ATIVO",
    cidade: "Campo Grande / MS"
}; 

console.log(novaPessoa); */

function novoUsuario(info) {
    let data = {
        ...info,
        status: "ATIVO",
        inicio: "15/01/2024",
        codigo: "123123"
    };

    console.log(data);
}

novoUsuario({ 
    nome: "Nícolas", 
    sobrenome: "Machado", 
    cargo: "Estagiário" 
})