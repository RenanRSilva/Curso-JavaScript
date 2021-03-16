const verdadeira = true;


//let tem escopo de bloco {...bloco}
//A cada novo escopo let cria uma variavel diferente
//Var só tem escopo de função

let nome = 'Luiz'; //Criando
var nome2 = 'luiz2'

if (verdadeira) {  //Novo escopo
    let nome = 'otavio' //Criando
    console.log(nome, nome2);

    if (verdadeira) { //Novo escopo
        let nome = 'otavio'
        console.log(nome, nome2);
    }
}