/*
Object.values
Object.entries


Object.assign(des, any)
const produto = {nome: 'Caneca', preco: 1.8};
const caneca = Object.assign({}, produto, {material: 'porcelana'}) //Copia tudo quie estra dentro de produto para esse objeto


Object.getOwnPropertyDescriptor(o, 'prop)


....spread
/*const caneca = {
    ...produto,
    material: 'porcelana'
}; //Espalhando o objeto original
*/


//Já Vimos
//Objejct.keys (retorna as chaves)
//console.log(Object.keys(produto))


//Object.freeze  = Congela o objeto
//Object.freeze(produto) //Não permite alterar nada

//Object.defineProperties = Define várias propriedades
//Object. defineProperty (Define uma propriedade)

const produto = { nome: 'Caneca', preco: 1.8 };
const caneca = {nome: produto.nome, preco: produto.preco}
console.log(Object.keys(produto))
Object.defineProperty(produto, 'nome', {
    writable: false,
    enumerable: true
})
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'))
console.log(Object.values) //Ler os valores
console.log(Object.keys) //Ler as Chaves
console.log(Object.entries)


produto.nome = 'Luiz Otávio'
produto.preco = 2.5;
console.log(produto);
console.log(produto);