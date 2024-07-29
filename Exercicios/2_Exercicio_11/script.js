/*
Faça uma estrutura if/else para verificar se um usuário pode dirigir;
armazene em variáveis algumas informações sobre o usuário: idade, se tem CNH
se a idade for maior que 18 e não possuir CNH, exiba uma mensagem;
se a idade for maior que 18 e tem cnh, exiba uma mensagem
se não tiver 18 nem cnh, exiba outra
*/

let idade = 10;
let CNH = true;
 
if(idade >=18 && CNH == false){
    console.log(`Você tem: ${idade} anos e não possui CNH`);
} else if(idade >=18 && CNH == true){
    console.log(`Você tem: ${idade} anos e possui CNH`);
} else{
    console.log(`Você tem: ${idade} anos e não possui CNH`);
}