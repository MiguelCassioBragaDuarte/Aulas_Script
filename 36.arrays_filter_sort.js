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

let ordem_alfa = nomes.sort((a,b)=> a.localeCompare(b));
console.log(ordem_alfa);

let ordem_cres = numeros.sort((x,y)=> x-y);
console.log(ordem_cres);

let ordem_desc = numeros.sort((x,y)=> y-x);
console.log(ordem_desc);

let users_alfa = usuarios.sort((a,b)=> a.nome.localeCompare(b.nome));
console.table(users_alfa);

let users_idade_cres = usuarios.sort((x,y)=> x.idade - y.idade);
console.table(users_idade_cres);