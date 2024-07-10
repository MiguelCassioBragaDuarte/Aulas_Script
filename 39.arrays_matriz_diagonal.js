let numeros = [
    [20,3,1,87,21],
    [33,2,14,58,20],
    [10,23,54,70,39],
    [8,69,42,22,3],
    [6,25,73,46,52]
];

//diagonal somente os valores da esquerda da matriz

for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i][i]);
}

//diagonal somente os valores da direita da matriz
console.log("--------------------------");

let n = numeros.length;

for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[1][n -i-1]);
    
}
