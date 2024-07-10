const ler = require('readline-sync');
function criarEvento(nome,local,data,hora,participantes,custoPorPar) {
    let custototal = calcularTotal(participantes,custoPorPar)
    return{
        Nome:nome,
        Local:local,
        Data:data,
        Hora:hora,
        Participantes: participantes,
        'Custo por Participante':custoPorPar,
        'Custo Total':custototal

    };
}

function cadastrar() {
    
let nome = ler.question("Informe o nome do evento: ");
let local = ler.question("Informe o local do evento: ");
let data = ler.question("Informe a data do evento: ");
let hora = ler.question("Informe o horario do evento: ");
let part = ler.questionInt("Informe a quantidade de participantes: ");
let custoPP = ler.questionFloat("Informe o valor que cada um ira gastar : ");

let ETV = criarEvento(nome,local,data,hora,part,custoPP);
exibirevento(ETV);

}

function exibirevento(evento) {
    console.log("----------------- Infrmações do evento -----------------");
    for (let [chave,valor] of Object.entries(evento)) {
        console.log(`=> ${chave}: ${valor}`);
    }
    console.log("--------------------------------------------------------");
    
}

function calcularTotal(part,custoPP) {
    return new Intl.NumberFormat('pt-BR',{
        style:"currency",currency:'BRL'}).format(part*custoPP)
    
}

cadastrar();
