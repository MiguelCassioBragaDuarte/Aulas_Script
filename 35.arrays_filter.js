let nomes = ["marco","luis","felipe","andre"];

let numeros = [3,6,11,5,78,3,4,1];

let usuarios =[
    {
        nome: "marta",
        idade:23,
        email:"marta@gmail.com"
    },
    {
        nome: "lucas",
        idade:28,
        email:"lucas@gmail.com"
    },
    {
        nome: "bruno",
        idade:15,
        email:"bruno@gmail.com"
    },
    {
        nome: "daniel",
        idade:31,
        email:"daniel@gmail.com"
    }
];

let filtrar_nome = nomes.filter(nome => nome.toLowerCase().includes('e'));
console.log(filtrar_nome);

let filtrar_num = numeros.filter(num => num>15);
console.log(filtrar_num);

let filtrar_idade = usuarios.filter(user => user.idade >18);
console.table(filtrar_idade);