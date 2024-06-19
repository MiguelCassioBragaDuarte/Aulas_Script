let cliente = {
    nome:"fulano",
    idade: 34
}

console.log(`Nome: ${cliente.nome} - Idade: ${cliente.idade}`);

cliente.telefone = "(31) 9 9958-8975";

console.log(`Nome: ${cliente.nome} - Idade: ${cliente.idade} - Tel ${cliente.telefone}`);

delete cliente.idade;

console.log(`Nome: ${cliente.nome} - Idade: ${cliente.idade} - Tel ${cliente.telefone}`);
