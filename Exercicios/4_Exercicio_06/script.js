/*
Crie dois arr, um com mais de 5 elementos e outro com mnenos;
faça uma função que verifica o numero de elementos;
se possuir menos que 5, imprima"Poucos elementos" no console;
se tiver mais, imprima "Muitos elementos";
*/

let arr1 = ["a","b","c","d","e","f"];
let arr2 = ["x","y","z"];

function verifica (x) {
    if (x.length > 5){
        console.log("Muitos elementos");
    }else{
        console.log("Poucos elementos");
    }
}
verifica(arr1);
verifica(arr2);

//console.log(verifica(arr2));