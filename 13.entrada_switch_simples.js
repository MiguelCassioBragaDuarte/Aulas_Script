const ler = require('readline-sync');

console.log("---------------- MENU -----------------");
console.log("*** Informe o valor do enpréstimo: ***")
let valor = ler.questionFloat("=> ");

console.clear();

console.log("--------- MENU OPÇÕES DE PAGAMETOS ----------");
console.log("1. PIX \n 2. DÉBITO \n 3. CRÉDITO \n 4. DINHEIRO");
console.log("---------------------------------------------");
let opt = ler.questionInt("=> ");
let result = 0;
switch (opt) {
    case 1:
        result = valor += valor*0.15;
        console.log("Pix acrescimo de 10%");
        console.log(`Realizando pagamento via PIX o valor ficará em ${result}`);
        break;
    case 2:
        result = valor += valor*0.20;
        console.log("Débito acrescimo de 20%");
        console.log(`Realizando pagamento no Débito o valor ficará em ${result}`);
        break;
    case 3:
        result = valor += valor*0.30;
        console.log("Crédito acrescimo de 30%");
        console.log(`Realizando pagamento no Crédito o valor ficará em ${result}`);
        break;
    case 4:
        result = valor += valor*0.10;
        console.log("Dinheiro acrecimo de 10%");
        console.log(`Realizando pagamento no Dinheiro o valor ficará em ${result}`);
        break;

    default:
        console.log("Opção invalida!!!")
        break;
}