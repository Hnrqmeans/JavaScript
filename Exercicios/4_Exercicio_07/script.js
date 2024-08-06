/*
Crie um arr com 5 elementos;
faça uma iteração entre todos eles e imprima no console o valor;
*/

let nomes = ["Henrique", "Minillo", "Moreira", "Bruna", "Ferreira"];

nomes.forEach(function(nome) { //usando foreach
    console.log(nome);
});

console.log("");

for(let i=0 ; i <nomes.length; i++){ //usando for
    console.log(nomes[i]);
}

console.log(""); 

let x = 0;
while (x < nomes.length){ //usando while
    console.log(nomes[x]);
    x+=1;
}