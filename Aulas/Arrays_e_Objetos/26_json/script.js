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

console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa.position);
console.log(pessoa.languages);


/*
Rigoroso na estrutura, ou seja, você deve seguir o padrão imposto por este formato;
apenas aspas duplas;
não aceita comentário;
*/