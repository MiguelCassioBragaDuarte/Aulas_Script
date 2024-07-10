let produtos = [
    {nome: "Notebook Dell XPS 15", preco: 5999.99, quantidade: 5},
    {nome: "Monitor ASUS ROG Swift PG279Q", preco: 2999.00, quantidade: 2},
    {nome: "Teclado Razer BlackWidow Elite", preco: 199.90, quantidade: 8},
    {nome: "Mouse Logitech MX Master 3", preco: 299.99, quantidade: 10},
    {nome: "Headset HyperX Cloud II", preco: 499.00, quantidade: 6},
    {nome: "SSD Samsung 970 EVO Plus 1TB", preco: 899.99, quantidade: 7},
    {nome: "Placa de vídeo NVIDIA GeForce RTX 3080", preco: 6999.00, quantidade: 1}
];

//nome de produtos com valores maiores que 500 reais

produtos.forEach(produto =>{
    if (produto.preco > 500) {
        console.log(`produto: ${produto.nome} - valor : R$ ${produto.preco}`);
    }
});

console.log("-----------------------------------------------------------------------------");

// nome dos produtos com valor menor que 300 , soma de valor geral de cada um
let soma = 0, total = 0;
for (let produto in produtos) {
    if (produtos[produto].preco < 300) {
        soma =produtos[produto].preco * produtos[produto].quantidade;
        total += soma; 

        console.log(`Produto : ${produtos[produto].nome} - Total: R$ ${soma.toFixed(2)}`);
        
    }
}

console.log(`Total geral dos Produtos: ${total}`);

console.log("-----------------------------------------------------------------------------");

//let produtos com valores maiores que 8000 e com quantidades no estoque menor que 3

for (let produto of produtos) {
    if (produto.preco> 800 && produto.quantidade<3) {
        console.log(`Produto: ${produto.nome} - Quantidade: ${produto.quantidade}`);
        
    }
    
}