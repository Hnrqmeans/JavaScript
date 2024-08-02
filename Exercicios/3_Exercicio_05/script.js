/*
Escreva uma função que recebe a idade de uma pessoa
se ela tem mais de 18 anos pode entrar na auto escola, imprima uma mensagem informando isso;
se ela tem menos, ela não pode imprima outra mensagem com este aviso;
execute a função nos dois casos;
*/

function idade (x){
    if (x >= 18){
        console.log(`Você tem ${x} anos e pode entrar na auto escola`);
    }else{
        console.log(`Você tem ${x} anos e não pode entrar na auto escola`);
    }
}
idade(10);
idade(18);
idade(2);
idade(9);