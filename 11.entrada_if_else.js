const ler = require('readline-sync');

let nome = ler.question("Informe o nome do aluno: ");
let nota1 = ler.questionFloat("Informe a nota 1: ");
let nota2 = ler.questionFloat("Informe a nota 2: ");
let nota3 = ler.questionFloat("Informe a nota 3: ");

let media = (nota1+nota2+nota3)/3;
media = media.toFixed(2);
console.log(media)
if(media >= 70){
    console.log("Aluno "+nome+" - Aprovado!")
}else if (media >= 50 && media < 70){
    console.log("Aluno "+nome+" - Recuperação!")
}else{
    console.log(`Aluno ${nome} - Reprovado!`)
}