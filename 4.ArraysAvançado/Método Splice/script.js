//               0         1        2          3        4
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Julia'];

//nomes.splice(Índice, Delete, elem1, elem2, elem3);
//pop
const removidos = nomes.splice(3, 2, 'Luiz', 'Otávio'); //Cria um array com o elemento removido, adiciona novos elementos no meio do array
console.log(nomes, removidos)