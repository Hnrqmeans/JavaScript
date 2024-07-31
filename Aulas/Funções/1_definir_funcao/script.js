function imprimirNoconsole(){
    console.log("Hello World");
}

imprimirNoconsole();

function imprimirUmNumero(num){
    console.log("O numero é: " + num); //console.log(`O numero é: ${num}`);
}
imprimirUmNumero(2);
imprimirUmNumero(3);
imprimirUmNumero(4);

const numeroAleatorio = function(){
    console.log(Math.random());
}

numeroAleatorio();