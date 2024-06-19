const ler = require('readline-sync');
let frutas = [];
let check = true;

while (check) {

    let fruta=ler.question("Informe um nome de uma fruta ou digite 'sair' para finalizar: ").toLowerCase();

    if (fruta === 'sair') {
        check = false;
    } else {
        frutas.push(fruta)
    }
    
}

console.log("------ As frutas Cadastradas foram ------");

for (let i = 0; i < frutas.length; i++) {
    console.log(`=> ${frutas[i]}`); 
}
