/*const pessoa1 = {
    nome: 'Renan',
    sobrenome: 'Urso',
    idade: 19
};

console.log(pessoa1.nome)
console.log(pessoa1.sobrenome)
console.log(pessoa1.idade)
*/

//Função Factory
function criePessoa(nome, sobrenome, idade) { //Parametros 
    return{
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    }
}
/*const pessoa1 = criePessoa ('Renan', 'Urso', '19');
console.log(pessoa1.nome);*/

const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    fala() {
       console.log(`a minha idade atual é ${this.idade}`);
    },
    incrementaIdade(){
        this.idade++;
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();