//Escreva uma função que recebe 2 números e retorne o maior deles

let num1 = Math.random
let num2 = Math.random
function maior(num1, num2) {
if (num1 >= num2){
    console.log('Numero 1 é Maior')
}else{
    console.log('Numero 2 é maior')
}
return
}
const resultado = maior
console.log(maior(8, 5))
//             Resposta
function max(x, y) {
return x > y ? x : y;
}

const max2 = (x, y) =>  x > y ? x : y;

console.log(max(20, 40))