//verifique se o numero é primo!
//um numero primo é um numero natural, maior que 1 e apenas divisivel por si proprio e por 1
//console.log(`O número: ${primo} é primo!`);
let numero = 2;
let divisoes = 0;

for (let i = 1; i <= numero; i++){
    if (numero % i == 0){
        divisoes++;
    }
}
if (divisoes == 2){
    console.log(`O número: ${numero} é primo!`);
} else{
    console.log(`O número: ${numero} não é primo!`);
}