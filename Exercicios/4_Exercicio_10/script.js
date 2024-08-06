/*
crie um objeto calculadora;
que tem os seguintes metodos: somar, subtrair, multiplica e dividir;
os métodos só devem aceitar dois parâmetros;
utilize cada um dos métodos e imprima os valores no console;
*/

let calculadora ={
    soma:function(a,b){
        return a+b;
    },
    subtracao:function(a,b){
        return a-b;
    },
    multiplicacao:function(a,b){
        return a*b;
    },
    divisao:function(a,b){
        return a/b
    }
}
console.log(`A soma foi de ${calculadora.soma(2,2)}`);
console.log(`A subtracao foi de ${calculadora.subtracao(2,2)}`);
console.log(`A multiplicacao foi de ${calculadora.multiplicacao(2,2)}`);
console.log(`A divisao foi de ${calculadora.divisao(2,2)}`);