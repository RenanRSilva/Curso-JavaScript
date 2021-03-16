const pessoa ={
    nome: 'luiz', //Chave dentro do obejto com o valor luiz
    sobrenome: 'Otávio'
};

const chave = 'nome';
console.log(pessoa['nome']);
console.log(pessoa.sobrenome);

const pessoa1 = new Object();
pessoa1.nome = 'Luiz';
pessoa1.sobrenome = 'Otavio';
pessoa.idade = 30;
pessoa1.falarNome = function() { //Function dentro de objeto = metodo
    return (`${this.nome} está falando seu nome`)
};
pessoa1.getDataNascimento = function(){
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
};

for (let chave in pessoa1){
console.log(pessoa1[chave]);
}

//////Moldes para criar objetos:
// Constructor Function
function criaPessoa(nome, sobrenome){ //Recebe os parametros para suprir as chaves do objeto
    return{
        nome, 
        sobrenome,
        get nomeCompleto(){ //Propriedade nova 
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}
const p1 = criaPessoa('Luiz', 'Otávio');
console.log(p1.nomeCompleto());
///////////////////////////////////////////
//Factory Function
function Pessoa3(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;   

    Object.freeze(this); //Não deixa alterar o objeto
}
// {} <- this -> this
// pi = (ENDEREÇO DE MEMORIA) - > 'valor' ...  Variavel aponta pro endereço, endereço aponmta pro valor
// pi.ENDEREÇO DE MEMORIA = {nome: 'Outra coisa'}
const p1 = new Pessoa3 ('Luiz, Miranda'); //A palavra new cria um nobo objeto e atrela a palvra this a esse objeto
Object.freeze(p1);
p1.nome = 'Outra Coisa';
p1.sobrenome = 'QLQ';
const p2 = new Pessoa3 ('Maria, Miranda'); //A palavra new cria um nobo objeto e atrela a palvra this a esse objeto
console.log(p1);

const p2 = {};
p2.nome = 'Luiz';