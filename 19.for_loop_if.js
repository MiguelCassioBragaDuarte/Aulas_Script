const ler = require('readline-sync');
let x = ler.questionInt("Infome um numero:" );
const C = 5;
let cont = C;

for (let i = 0; i <= x; i++) {
    console.log(i);
    if (i>=cont) {
        let sair = ler.question("'enter' continuar contando ou 'sair' para finalizar contagem: ").toLowerCase();
        if (sair === "sair" || i ==x) {
            console.log("Contagem Finalizada");
            break;
        }
        cont += C;
    }
    
}

