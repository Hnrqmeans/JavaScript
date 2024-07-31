/*
Uma outra forma de escrever funções
Bem utilizada nos frameworks modernos
porém não deve substiruir as functions por completo.
*/

let consoleTeste = () => {
    console.log("Hello World!");
};

consoleTeste();
let soma = (a,b) => {
    return a + b;
};
console.log(soma(10,20));