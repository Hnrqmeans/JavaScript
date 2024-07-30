//verifique se o numero é primo!
//um numero primo é um numero natural, maior que 1 e apenas divisivel por si proprio e por 1

//2,3,5,7,11,13
//console.log(`O número: ${np} é primo!`);
//console.log(`O número: ${np} não é primo!`);

let np = 3;
let divisoes = 0;

for (i = 1; i <= np; i++){
    if (np % i == 0){
        divisoes++;
    }
} if (divisoes == 2){
    console.log(`O número: ${np} é primo!`);
} else{
    console.log(`O número: ${np} não é primo!`);
}