//               0         1         2
const alunos = ['Luiz', 'João', 'Maria']
alunos [0] = 'Eduardo';
alunos [3] = 'Luiza'; //Cria um novo indice
console.log(alunos)
console.log(alunos.length); //Numero de elementos
alunos[alunos.length] = 'Fabio'
alunos[alunos.length] = 'Urso'
console.log(alunos)
alunos.push('Renan') //Adiciona novos elementos na array
alunos.push('Ursoo')
console.log(alunos)
alunos.pop //Deixa de existir o ultimo elemento
console.log(alunos.slice(0, 2)) //Pega apenas a  parte de elementos selecionada

console.log(typeof alunos);
console.log(alunos instanceof Array);

alunos.unshift(Junior) //Adiciona elemento no começo

//delete alunos[1]