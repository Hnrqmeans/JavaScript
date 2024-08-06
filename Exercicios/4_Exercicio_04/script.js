/*
Adicione a propriedade janelas no ônibus, com o valor de 20;
delete a propriedade rodas;
imprima a propriedade janelas no console;
*/

let onibus = {
    rodas: 8,
    limite_de_passageiros: 40,
    portas: 2,
};
    delete onibus.rodas;
console.log(onibus.rodas); //não existe mais

    onibus.janelas=20;

console.log(onibus.janelas);
console.log(onibus.janelas);