/*
Escreva uma função que recebe uma string;
se o texto conter mais de 10 caracteres imprima "Texto muito longo";
se conter menos, imprima "Texto dentro do limite";
*/

function verificarTamanho(texto) {
    if (texto.length > 10) {
        console.log("Texto muito longo");
    } else {
        console.log("Texto dentro do limite");
    }
}

verificarTamanho("Olá, mundo!");
verificarTamanho("Isso é um texto bem longo.");
