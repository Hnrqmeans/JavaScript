/*
se só tem um parametro podemos remover os parenteses do argumento e o return
se a expressão for pequena, pode até ser feita em uma linha sem prejudicar a leitura do código
*/

const multiplicarPorDois = (x) =>{
    return x * 2;
}
console.log(multiplicarPorDois(2));
const multiplicarPorDois2 = x => x * 2;
console.log(multiplicarPorDois(4));