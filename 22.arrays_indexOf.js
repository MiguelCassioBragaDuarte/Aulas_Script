const ler = require('readline-sync')

let nomes = ["marco","luis","felipe","andre"];

let nome = ler.question("Digite um nome: ").toLowerCase();

let x = nomes.indexOf(nome);

if (x>=0) {
    console.log(`O nome ${nome} está na possição ${x} no array nomes.`);
} else {
    console.log(`O nome ${nome} não existe no array nomes.`);
}