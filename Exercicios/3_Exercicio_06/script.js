/*
Escreva uma função que detecta o tipo de dado passado;
verifique se é um: number, boolean ou string
e retorne uma mensagem para cada tipo;
execute uma função para cada caso
*/

function dado (x){
    if (typeof x === "string"){
        console.log(`Você digitou um dado tipo string ${x}`);
    }else if (typeof x === "number"){
        console.log(`Você digitou um dado tipo number ${x}`);
    }else if (typeof x === "boolean"){
        console.log(`Você digitou um dado tipo boolean ${x}`);
    }
}
dado(1);
dado("Hello World!");
dado(true);