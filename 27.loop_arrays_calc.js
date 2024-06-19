let numeros = [22,23,56,87,54,12,17];
let soma = 0;

for (let i = 0; i < numeros.length; i++) {
    console.log(`Valor ${i}: ${numeros[i]}`);
    soma += numeros[i];
}

console.log(`Total: ${soma}`)