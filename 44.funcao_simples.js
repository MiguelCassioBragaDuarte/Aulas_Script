function hello() {
    console.log("Hello, world!");
}

function exibirData() {
    console.log(`hoje é: ${new Date().toDateString()}`);
    
}

function contador() {
    for (let i = 0; i < 10; i++) {
        console.log(`=> ${i}`);
        
    }
    
}

hello();
exibirData();
contador();

