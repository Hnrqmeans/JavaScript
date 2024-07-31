// uma função que se lembra do ambiente em que ela foi criada;

function lembrarSoma (x){
    return function(y){
        return x + y;
    }
}

// let soma1 = lembrarSoma(2);
// console.log(soma1(5));

// let soma2 = lembrarSoma(5);
// console.log(soma2(5));


function contador (i){
    let cont = i;
    let somarContador = function(){
        console.log(cont);
        cont++;
    }
    return somarContador;
}
let meuContador = contador(5);
meuContador();
meuContador();
meuContador();
meuContador();