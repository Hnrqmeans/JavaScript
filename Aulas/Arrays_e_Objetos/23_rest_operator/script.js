let num = 1;
let num1 = 2;
let num2 = 3;
let num3 = 4;

function imprimirNumeros(...args){
    for(let i = 0; i < args.length; i++){
        console.log(args[i]);
    }
}
imprimirNumeros(num,num1,num2);
console.log("Pausa");
imprimirNumeros(num2,num3);
console.log("Pausa");
imprimirNumeros(2,6,7,8,5,4,3,6,5,1,4,6,3);
