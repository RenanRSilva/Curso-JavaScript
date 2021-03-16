//Valor por referência
// Shift remove do começo, unshift adiciona no começo
//                 0          1       2
/*const nomes = ['Eduardo', 'Maria', 'Joana']
nomes[2] = 'João'
delete nomes [2]; //Deleta um elemento sem alterar os outros índices
const novo = [...nomes]; //Cópia do nomes pra dentro do novo
const removido = nomes.shift
nomes.push('Joaquim') //Adiciona novo elemnto no final do array
nomes.unshift('Jubiscleiton')//Adiciona novo elemento no índice 0
console.log(novo)
console.log(nomes.length)
*/

const nomes2= ['Jubileu', 'Jonatan', 'Jeverson']
const novo = nomes2.slice(1, 3)
console.log(novo)

const nome = 'Renan Mateus Rambul da Silva'
const nomes = nome.split(' ') //Através da String cria um array
console.log(nomes)