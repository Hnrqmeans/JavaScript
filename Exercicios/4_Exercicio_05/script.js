/*
Crie um arr com 5 nomes, incluindo o seu;
verifique se o seu nome existe no arr;
se existir imprima alguma mensagem no console;
*/

let nomes = ["Henrique","Minillo","Moreira","Bruna","Ferreira"];
for (let i=0; i < nomes.length; i++){
    if (nomes[i] === "Henrique"){
        console.log(`Seu nome é ${nomes[i]}`)
    }
}

//Metodo mais facil:
if(nomes.includes("Henrique")){
    console.log(`Seu nome foi encontrado`) //não é possivel apresentar o nome dessa forma
}else{
    console.log("Não foi encontrado")
}