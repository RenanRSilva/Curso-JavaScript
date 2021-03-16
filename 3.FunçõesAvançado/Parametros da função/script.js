
//arguments que sustenta todos os argumentos enviados (apenas para funções criadas com a palavra function)
function funcao() {
let total = 0
for (let argumento of arguments){
    total+= argumento;
    }
    console.log(total)
}
funcao(1, 2, 3, 4, 5) //Envia esses valores para arguments


function soma(a, b=2, c){
    console.log(a+b+c)
}
soma(1, undefined, 5)

function conta(operador, acumulador, ...numeros) { //Rest operator sempre deve ser o ultimo parametro
    for (let numero of numeros){
    if (operador === '+')    acumulador += numero;
    if (operador === '-')    acumulador -= numero;
    if (operador === '/')    acumulador /= numero;
    if (operador === '*')    acumulador *= numero;
    }
    console.log(acumulador);
}
conta('+', 0, 20, 30, 40, 50)