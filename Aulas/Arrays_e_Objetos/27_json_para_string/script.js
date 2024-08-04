/*
JSON = JavaScript Object Notation;
Utilizado para comunicação entre serviços, ex: back end <-> front end;
Basicamente um tipo de dado padronizado, que lembra muito os objetos do JavaScript
*/

let pessoa ={
    "nome": "Henrique",
    "idade": 23,
    "position": "Developer",
    "languages":["PHP","JavaScript","Python"]
}

let pessoaTexto = JSON.stringify(pessoa);
console.log(pessoaTexto);
//console.log(pessoaJSON.languages[2]); não é possivel

let pessoaJSON = JSON.parse(pessoaTexto);
console.log(pessoaJSON);
console.log(pessoaJSON.languages[2]);

/*
Rigoroso na estrutura, ou seja, você deve seguir o padrão imposto por este formato;
apenas aspas duplas;
não aceita comentário;
*/