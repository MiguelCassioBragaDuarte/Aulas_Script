let numeros = [22,23,56,87,54,12,17];

for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}
console.log("--------------------------");

//listar os dados do array invertidos
for (let i = numeros.length -1; i>=0 ; i--) {
    console.log(numeros[i]);
}
console.log("--------------------------");

//listar os dados do array pulando alguns dados

for (let i = 0; i < numeros.length; i+=2) {
    console.log(numeros[i]);
    
}