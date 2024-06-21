let animais = ["gato","galo","peixe","leão","macaco"];

let animaisrmovidos = animais.splice(1,2);

console.log(animaisrmovidos);
console.log(animais);

console.log("------------------------------------");
animais.splice(1,0,"urso","jacare","foca");
console.log(animais);
