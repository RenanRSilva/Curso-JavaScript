/*let i = 0;   Função que soma +1 de 0 até chegar no 10
while (i <= 10) {
    console.log(i);
    i++;
}*/



//Cria um numero aleatorio até esse numero ser 10, quando achar 10 rompe o laço.
function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return  Math.floor(r);
}
const min = 1
const max = 50
let rand = random(min, max);

while (rand !== 10) { //Checa a condição e depois executa o laço
    rand = random(min, max);
    console.log(rand)
}

do{
    rand = random(min, max);
    console.log(rand)
}while (rand !== 10) {
    
}