const ler = require('readline-sync')
let num = 0,soma= 0;

do {
    soma += num;
    num = ler.questionInt("Digite um numero ou -1 para sair: ")
    
} while (num > 0);

console.log("a soma dos numeros digitados e "+soma);