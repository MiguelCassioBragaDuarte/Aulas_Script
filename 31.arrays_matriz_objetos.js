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

console.table(usuarios);

console.log(usuarios[1].nome);
console.log(usuarios[2]);

usuarios.push({
    nome:"bianca",
    idade:25,
    email:"bianca@gmail.com",
})

console.table(usuarios);