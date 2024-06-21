const ler = require('readline-sync');

let cliente =[{}];

let check = true;

while(check){
    let nome = ler.question("digite seu nome: ");
    let idade = ler.questionInt("digite sua idade: ");
    let email = ler.question("digite seu email: ");
    let carteira = ler.questionFloat("Quanto ele tem de dinheiro: ")

    cliente.push({nome:nome,idade:idade,email:email,carteira:carteira});

    let x = ler.question("Dados cadastrados! 'enter' cadastrar outro cliente ou 'sair' para finalizar" ).toLowerCase();

    if (x ==="sair") {
        check= false;
        console.log("Finalizado");
        
    } 
}