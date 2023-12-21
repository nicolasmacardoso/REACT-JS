function convidados(...nomes) {
    console.log("Sejam bem vindos convidados");
    console.log(nomes);
}

convidados("Nícolas", "Lucas", "Marcos", "Felipe")

function sorteador(...numeros){
    console.log(numeros);

    const numeroGerado = Math.floor(Math.random() * numeros.length);
    console.log('numeroGerado: ', numeros[numeroGerado]);

}

sorteador(1,4,5,15,25,90,55,34)