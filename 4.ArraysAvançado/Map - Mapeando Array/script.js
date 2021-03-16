//Map = Alterar e utilizar elementos dentro do array
//Recebe um tamanho exatamente do original porem com os valores alterados
// Dobre os numeros

//               0   1   2   3  4...
const numeros = [5, 80, 90, 10, 4, 6, 23, 78, 2, 1];
const numerosEmDobro = numeros.map(function (valor) {
   return valor * 2;
});
console.log(numerosEmDobro);

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Leticia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];
const nomes = pessoas.map(obj => obj.nome);
console.log(nomes);

const idades = pessoas.map(obj => ({idades: obj.idade}));
console.log(idades);

const comIds = pessoas.map(function (obj, indice) {
    const newObj = { ...obg};
    newObj.id = indice;
    return obj;
});
console.log(comIds);