console.log();

let idade = 29;
let nome = "Henrique";
let passaporte = true;

if (idade == 19) {
    console.log(`a idade é igual a ${idade}`);
}
if (idade > 25) {
    console.log(`a idade é maior que ${idade}`);
}
if (nome == "Henrique" && idade == 18) {
    console.log("Liberado");
}
if ((nome == "Henrique" && idade > 30) || passaporte == true) {
    console.log("Liberado 2");
}