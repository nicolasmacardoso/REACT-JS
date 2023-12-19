let pessoa = {
    nome: "Nícolas",
    cargo: "Programador fullstack",
    empresa: "Agrosys",
    sobrenome: "Machado",
};

/* 
console.log(pessoa.nome);
console.log(pessoa.cargo); 
*/

/* 
let nome = "TESTE";

const { nome:nomePessoa, cargo, empresa, sobrenome } = pessoa;

console.log("NOME DA PESSOA: " + nomePessoa);
console.log(sobrenome);
console.log(empresa);
console.log(cargo); 
*/
// _____________________________________________________________

let nomes = ["Nícolas", "Lucas", "Henrique"]
//console.log(nomes[0])

/* 
let { 0: matheus, 1: henrique } = nomes;

console.log(matheus);
console.log(henrique); 
*/

let [ primeiroNome, segundoNome ] = nomes;

console.log(primeiroNome);
console.log(segundoNome);