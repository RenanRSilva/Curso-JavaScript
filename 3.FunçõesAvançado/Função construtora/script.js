//Função construtora -> Objetos
//Função fabrica -> Objetos
//Construtora -> Pessoa (new)
function Pessoa(nome, sobrenome) {
    //Privadas
    const ID = 123456;
    const metodoInterno = function () {
        
    };
    

    //Atributos ou metodos públicos
    this.nome = nome;
    this.sobrenome -sobrenome;

    this.metodo = () => { //Método é uma função dentro do objeto
        console.log(this.nome + ': sou um método')
    };
}
const p1 = new Pessoa('luiz', 'otavio'); //Começar o nome com letra maiscuola
const p2 =  new Pessoa ('Luiz', 'Otavio'); //A palavra new cria um novo objeto vazio e faz o this ser apontado para ele, e retorna
p2.metodo();