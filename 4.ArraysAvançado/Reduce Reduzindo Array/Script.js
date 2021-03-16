//Reduzir o array em um unico elemento



const numeros = [5, 50, 80, 1 , 2, 3, 5];
const total = numeros.reduce(function (acumulador, valor, indice, array) { //Precisa retornar algum valor
    acumulador += valor; //Soma te todos os elementos da array
    return acumulador;
}, 0); //Valor que inicia o acumulador
console.log(total)