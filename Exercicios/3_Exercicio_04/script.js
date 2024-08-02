/*
escreva uma função que retorne um número aleatorio
o numero maximo retornado deve ser passado via parametro
dica utilize Math.random();
*/


function numeroAleatorio(num){
    return Math.floor(Math.random() * num) + 1;
}
console.log(numeroAleatorio(100));
