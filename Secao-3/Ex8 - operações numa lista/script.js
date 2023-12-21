let lista = ["Nícolas", "José", "Douglas", "Kamilli"];

lista.map((item, index) => {
    console.log(`Passando: ${item} em ${index + 1}º lugar`);
})

let numeros = [5, 3, 2, 5];

let total = numeros.reduce((acumulador, numero, indice, original) =>{
    console.log(`${acumulador} - total até o momento`);
    console.log(`${numero} - valor atual`);
    console.log(`${indice} - indice atual`);
    console.log(`${original} - array original`);
    console.log(`______________________________________________________________________`)

    return acumulador += numero;
})

console.log("Total do reduce: " + total);