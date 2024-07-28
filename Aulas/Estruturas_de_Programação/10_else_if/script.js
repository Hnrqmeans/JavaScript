let nome = "Henrique";
let idade = 18;

if (nome == undefined) {
    console.log("O nome não foi definido corretamente");
} else if (nome == "Henrique" && nome.length > 5 && idade >= 18) {
    console.log(`O nome é ${nome}`);
} else {
    console.log("O nome não é Henrique");
}
