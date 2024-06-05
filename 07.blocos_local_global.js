let num1 = 100;//global
{
    let num2 = 30; // loca
    console.log(num1);
    console.log(num2);
    {
        console.log(num2);
    }
}

console.log(num1);
//console.log(num2);