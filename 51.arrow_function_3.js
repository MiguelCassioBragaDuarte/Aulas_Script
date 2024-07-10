let verificarValor = (idade,tipo,ingresso) => {
    if (idade >= 18 && tipo ==='normal') {
        return ingresso - (ingresso*0.25);
    } else if (idade >= 18 && tipo ==='estudante'){
        return ingresso - (ingresso*0.50);
    }else if(idade >= 18 && tipo ==='vip'){
        return ingresso + (ingresso*0.20);
    }else{
        return "Entrada não Permitida! ou Ingresso Ivalido!"
    }
}

const ler = require('readline-sync')
let idade = ler.questionInt("Informe a Idade: ");
let tipo = ler.question("Informe o tipo do ingresso: ").toLowerCase();
let ingresso = ler.questionFloat("Informe o valor do: ");

let retorno = verificarValor(idade,tipo,ingresso);

console.log("O valor do ingresso ficara: "+ retorno);


