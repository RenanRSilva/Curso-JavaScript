//Filter. Cria um novo array e recebe os valores filtrados
//Sempre retorna um array com a mesma quantidade de elementos ou menos

//Retorne somento os números maiores que 10
const numeros = [5, 80, 90, 10, 4, 6, 23, 78, 2, 1];
//Requer o retorno boolean



const numerosFiltrados = numeros.filter((valor, indice, array) =>  valor > 10) //Função de uma linha e uma condiçãlo não precisa de chaves nem return

console.log(numerosFiltrados);

//Retorne as pessoas que tem o nome com 5 letras ou mais
//Retorne as pessoas com mais de 50 anos
//Retorne as pessoas cujo nome termina com a
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];
const pessoaComNomeGrande = pessoas.filter((obj) =>{
    return obj.nome.length >= 7;
});
console.log(pessoaComNomeGrande)