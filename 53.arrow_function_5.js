let usuarios = [
    {nome: "Maria", idade: 20},
    {nome: "João", idade: 25},
    {nome: "Ana", idade: 17},
    {nome: "Pedro", idade: 22},
    {nome: "Carla", idade: 28},
    {nome: "Mariana", idade: 26},
    {nome: "Paulo", idade: 23},
    {nome: "Juliana", idade: 17},
    {nome: "Lucas", idade: 24},
    {nome: "Gabriel", idade: 16},
    {nome: "Camila", idade: 15}
];

let verificarUsuario = usuario => {
    console.log(`O ${usuario.nome} tem ${usuario.idade} anos e é ${usuario.idade >= 18 ? "Maior":"Menor"} de idade `);
}

for (let i = 0; i < usuarios.length; i++) {
    verificarUsuario(usuarios[i])
    
}

console.log("----------------------------");

usuarios.forEach(verificarUsuario)