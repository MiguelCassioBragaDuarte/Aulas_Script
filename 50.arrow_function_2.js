const ler = require('readline-sync');

let result = (valor,desconto) => valor - (valor*(desconto/100));

let valor = ler.questionFloat("Informe o valor total da Compra: ")
let desconto = ler.questionFloat("Informe o desconto em %: ")


console.log(`O valor final da compra : R$ ${result(valor,desconto).toFixed(2)}`);