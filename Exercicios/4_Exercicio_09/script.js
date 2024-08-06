/*
Crie um array a a partir de uma frase;
imprima cada palavra do array no console por meio de um for
*/

const frase = "Ser programador requer muita pratica";
const nova_frase = frase.split(" ");
for(let i=0; i < nova_frase.length; i++){
    console.log(nova_frase[i]);
}