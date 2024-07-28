// for (let i = 5; i < 20; i += 1){
//     if (i % 10 == 0){
//         console.log("saiu do loop");
//         break
//     }
//     console.log("Prosseguindo o loop");
// }

for (let i = 0; i < 10; i += 1){

    if (i == 3){
        nome = "Joao";
    }
    if (i == 5 && nome == "Joao"){
        console.log("O nome é Joao, pode parar");
        break;
    }
    console.log(i);
}