//uma funcionalidade que permite uma função se chamar novamente;
//isso pode ser um problema caso a função se chame muitas vezes;

function recursao(n){
    if (n - 1 < 2){
        console.log("Recursão parou");
    }else if(n % 2 !=0){
        console.log("Numero impar: " + n);
        recursao(n - 1)
    }else{
        console.log("Numero par: " + n);
        recursao(n - 2);
    }

}

recursao(39);
recursao(10);
recursao(55);