let numeros = [
    [20,3,1,87,21],
    [33,2,14,58,20],
    [10,23,54,70,39],
    [8,69,42,22,3],
];

let sacolao = [
    ["Frutas", "Legumes"],
    ["Abacaxi","Abobrinha"],
    ["Uva","Batata"],
    ["Abacate","Cebola"],
    ["Maçã","Cenoura"],
    ["Banana","Pimentão"],

];

for (let i = 0; i < numeros.length; i++) {
    for (let j = 0; j < numeros[i].length; j++) {
        //console.log(numeros[i][j]);
        console.log(`Linha ${i} - Coluna ${j} : ${numeros[i][j]}`);
    }
    
};

for (let i = 0; i < sacolao[0].length; i++){
    console.log(`[ ${sacolao[0][i]} ]`);
    for (let j = 1; j < sacolao.length; j++) {
        console.log(sacolao[j][i]);
        
    }

}