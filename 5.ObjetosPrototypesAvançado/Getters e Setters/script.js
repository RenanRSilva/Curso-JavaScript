//defineProperty - defineProperties ->
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    //This está indicando o objeto quen esta sendo criado
    Object.defineProperty(this, 'estoque', {
        enumerable: true, //Mostra a Chave
        configurable: true, //configuravel ou não posterioremente
        get: function(){
            return estoque; //estoque é um metodo que vai me retornar um valor
        },
        set: function (valor) { //Valida o valor
            
        }
    });
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);

console.log(p1.estoque);