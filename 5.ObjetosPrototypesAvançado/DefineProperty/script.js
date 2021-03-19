//defineProperty - defineProperties ->
function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;

//This está indicando o objeto quen esta sendo criado
    Object.defineProperty(this, 'estoque',{
        enumerable: true, //Mostra a Chave
        value: estoque, //Valor (pode ser qualquer coisa como um função por exemplo)
        writable: true, //Controla se o valor pode ou não ser alterado
        configurable: true //configuravel ou não posterioremente
    });

    Object.defineProperties (this, { //Definindo as propriedades dos obejtos de maneira especifica
        nome: {
            enumerable: true,
            value: nome,
            writable: true,
            configurable: true
        },
        preco: {
            enumerable: true,
            value: preco,
            writable: true,
            configurable: true
        }
    })
}


const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);

for(let chave in p1){
    console.log(chave);
}