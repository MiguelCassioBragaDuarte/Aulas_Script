function soma(x,y) {
    return x+y;
}

console.log("A soma dos valores é: "+soma(2,3));

function calc(x,y,op){
    if (op ==='somar') {
        return x+y;
    } else if (op ==='sub'){
        return x-y;    
    }else if (op ==='mult'){
        return x*y;    
    }else{
        return x/y;    
    }
};

console.log("o calc dos valores é: "+soma(5,3,'mult'));