let animais = ["gato","galo","peixe","leão","macaco"];

let numeros = [22,23,56,87,54,12,17];

console.log("---- Exibindo os itens iniciais da array ----");
console.log(animais);
console.log(numeros);

//adicionando um valor no final do array

animais.push("coelho");
numeros.push(61);

console.log("---- Exibindo os itens novos dados no fim da array ----");
console.log(animais);
console.log(numeros);

//adicionando dados no inicio da array
animais.pop();
numeros.pop();

console.log("---- Exibindo os array sem os ultimos dados ----");
console.log(animais);
console.log(numeros);

//adicionando dados no inicio da array
animais.unshift("cachorro");
numeros.unshift(20);

console.log("---- Exibindo itens novos dados no inicio da array ----");
console.log(animais);
console.log(numeros);

//excluindo dados no inicio da array
animais.shift();
numeros.shift();

console.log("---- Exibindo os array sem os primeiros dados ----");
console.log(animais);
console.log(numeros);

//Organizando os dados em ordem alfabetica
animais.sort();
numeros.sort();

console.log("---- Exibindo os array ordenados alfabeticamente ----");
console.log(animais);
console.log(numeros);

//Organizando os dados em ordem decrecende
animais.reverse();
numeros.reverse();

console.log("---- Exibindo os array ordenados decrecentes ----");
console.log(animais);
console.log(numeros);