const ler = require('readline-sync')
let num = ler.questionInt("Infome um numero:" )
while (num > 0) {
    console.log(num);
    num--
}