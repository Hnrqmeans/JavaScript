/*
Escreva uma função que recebe um número, e o decrementa de 1 em 1 com um loop;
além disso imprima somente os números pares no console;
*/

function numero (x){
    while (x > 0) {
        if (x % 2 == 0){
            console.log(`X é ${x}`);
        }
        x--;  
    }
}

console.log(numero(100));