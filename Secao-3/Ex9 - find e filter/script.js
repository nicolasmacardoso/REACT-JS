let listagem = [5, 3, "Jose", 2, "Nícolas"]

let busca = listagem.find((item) =>{
    return item === "Jose";
})

console.log(busca);

let palavras = ["Nícolas", "Lucas", "Caio", "Kamilli", "Tenis"];

let resultado = palavras.filter((item) => {
    return item.length >= 4;
})

console.log(resultado);