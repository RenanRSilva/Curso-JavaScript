/*
JavaScript é baseada em protótipos para passar propriedades e métodos
de um obejto para outro

Definição de protótipo
Protótipo é o termo usado para se referir ao que foi criado pela
primeira vez, servindo de modelo ou molde para futuras produções

Todos os objetos tem um referencia interna para um protótipo (_proto_)
quem vem da propriedade prototype da função construtora que foi usada para
cria-lo. Quando tentamos acessar um membro de um objeto no próprio objeto e depois a cadeia de protótipos
é usada até o topo (null) até encontrar (ou não) tal membro.
*/
//Construtora -> molde (classe)
function Pessoa(nome, sobrenome) {
    this.nome = nome
    this.sobrenome =sobrenome
    this.nomeCompleto = () => this.nome + ' ' + this.sobrenome
}

// Pessoa.prototype === pessoa1.___proto___

Pessoa.prototype.nomeCompleto = function (params) {
  return this.nome + ' ' + this.sobrenome  
}

//Instância
const pessoa1 = new Pessoa('Luiz', 'O'); // <- Pessoa = Função construtora
const pessoa2 = new Pessoa('Maria', 'A'); // <- Pessoa = Função construtora

