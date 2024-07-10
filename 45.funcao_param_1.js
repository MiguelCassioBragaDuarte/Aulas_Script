/*function dobro(num) {
    let result = num *2;
    console.log("O dobro do numero é: "+result);
}
dobro(6);*/

function dobro(num) {
    return "O dobro do número é: "+ num*2;
}

console.log(dobro(6));

function contar_txt(txt) {
    total = txt.length;
    console.log(`O total de letras no texto contem `+total+" Caracteres");
    
}

contar_txt("Tudo numa boa");