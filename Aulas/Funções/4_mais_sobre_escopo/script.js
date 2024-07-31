let x = 10; //Valor Global
if (x > 5){
    let x = 20; //O Bloco Forma Um Escopo
    x++;
    console.log(x);
}
console.log(x);