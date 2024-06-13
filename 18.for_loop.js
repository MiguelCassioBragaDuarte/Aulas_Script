const ler = require('readline-sync')
let x = ler.questionInt("Infome um numero:" )

for (let i = 0; i < x; i++) {

    console.log(i);
}

console.log("---------------------------");

for (let i = x; i >= 0; i--) {

    console.log(i);
}