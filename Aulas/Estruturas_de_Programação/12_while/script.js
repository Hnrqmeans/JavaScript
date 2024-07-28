//Seja consistente e priorize a clareza em seu código.
let x = 10;

// Usando concatenation com operador +
while (x > 0) {
    console.log("X é " + x);
    x = x - 1;  // Decremento padrão
}

console.log("Reiniciando"); 

// Reinicia x para 10
x = 10;

// Usando template literals
while (x > 0) {
    console.log(`X é ${x}`);
    x--;  // Decremento usando operador de decremento
}

//Operador de Incremento (x++ e ++x)
//x++: Incrementa o valor de x em 1, mas retorna o valor antes do incremento.
//++x: Incrementa o valor de x em 1 e retorna o valor após o incremento.

//Operador de Decremento (x-- e --x)
//x--: Decrementa o valor de x em 1, mas retorna o valor antes do decremento.
//--x: Decrementa o valor de x em 1 e retorna o valor após o decremento.

//Operador de Atribuição com Incremento (x += valor)
//x += valor: Incrementa o valor de x pela quantidade especificada em valor.

//Operador de Atribuição com Decremento (x -= valor)
//x -= valor: Decrementa o valor de x pela quantidade especificada em valor.


//A melhor prática é escolher o operador que torna seu código mais legível e claro para outros desenvolvedores.
//Use x++ e x-- para incrementos e decrementos simples, e x += valor 
//ou x -= valor para incrementos e decrementos maiores ou mais explícitos. 