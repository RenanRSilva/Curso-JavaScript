/*O termo "Herança" é muito usado para descrever que as características de um objeto são passadas para outro objeto. 
Assim como uma filha ou filho pode herdar características da sua mãe ou pai (geneticamente).*/

//Produto - > Aumento, Desconto
//Camistea = Cor, Caneca = Material,
function Produto(nome, preco) {
    this.nome = nome,
    this.preco = preco;
}
Produto.prototype.aumento = function (quantia) {
    this.preco += quantia;
};
Produto.prototype.aumento = function (quantia) {
    this.preco -= quantia;
};

function Camiseta(nome, preco, cor){
    Produto.call(this, nome, preco)
    this.cor = cor
}

Camiseta.prototype = Object.create(Produto.prototype) //Camiseta herda oq produto tem mas tambem tem suas propriedades especificas
Camiseta.prototype.constructor = Camiseta;

function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco);
    this.material = material;
    this.estoque = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function(){
            return estoque;
        },
        set: function(valor){
            if (typeof valor !== 'number') {
                return
            }
            estoque = valor
        }
    })
}
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;


const produto = new Produto('Gen', 111);
const camiseta = new Camiseta ('Regata', 7.5, 'Preta');
const caneca = new Caneca('Caneca', 13, 'Plástico', 5);
caneca.estoque = 100;

console.log(caneca.estoque);
console.log(camiseta);
console.log(produto);

