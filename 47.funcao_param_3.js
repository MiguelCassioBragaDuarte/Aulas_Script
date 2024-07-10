const ler = require('readline-sync');

(async () =>{
    const {default:cor} = await import('chalk');
    const DOLAR = 5.50, EURO = 6.05, LIBRA = 7.12,IENE = 0.033;

    function dolar(valor) { 
        let result = valor/ DOLAR;
        return new Intl.NumberFormat('en-US',{
            style: 'currency',currency:'USD'}).format(result)
    };
    function euro(valor) {
        let result = valor/ EURO;
        return new Intl.NumberFormat('de-DE',{
            style: 'currency',currency:'EUR'}).format(result)
    }
    function libra(valor) {
        let result = valor/ LIBRA;
        return new Intl.NumberFormat('en-GB',{
            style: 'currency',currency:'GBP'}).format(result)
    }
    function iene(valor) {
        let result = valor/ IENE;
        return new Intl.NumberFormat('ja-JP',{
            style: 'currency',currency:'JPY'}).format(result)
    }

    function converterMoeda(valor,moeda) {
        switch (moeda) {
            case 1:
                console.log(cor.green(`O valor informado converido para dólar é`));
                console.log(cor.yellow(`${dolar(valor)}`));
                break;
            case 2:
                console.log(cor.green(`O valor informado converido para euro é`));
                console.log(cor.yellow(`${euro(valor)}`));
                break;
            case 3:
                console.log(cor.green(`O valor informado converido para libra é`));
                console.log(cor.yellow(`${libra(valor)}`));
                break;
            case 4:
                console.log(cor.green(`O valor informado converido para iemne é`));
                console.log(cor.yellow(`${iene(valor)}`));
                break;
        
            default:
                console.log(cor.red(`Opção invalida!!`));
                break;
        }
    }

    function menu() {
        let valor = ler.questionFloat("Informe um valor em reais: ")
        console.log("--------- Menu de Cambio ---------");
        console.log("Selecione qual moeda deseja: -----");
        console.log("1.Dolar --------------------------");
        console.log("2.Euro ---------------------------");
        console.log("3.Libra --------------------------");
        console.log("4.Iene ---------------------------");
        console.log("----------------------------------");
        let opt = ler.questionInt("=> ")
        converterMoeda(valor,opt)
    }
    menu()

})();