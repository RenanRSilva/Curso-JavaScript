const _velocidade = Symbol('velocidade') //Gera um id Aleatório
class Carro {
    constructor(nome){
        this.nome = nome;
        this[_velocidade] = 0;
    }

    set velocidade(valor){
        console.log('SETTER')
        if(typeof valor !== 'number') return;
        if(valor >= 100 || valor <= 0) return;
        this[_velocidade] = valor;
    }
    get velocidade(){
        console.log('GETTER')
        return this[_velocidade]
    }
    
    acelerar(){
        if (this[_velocidade] >= 100) return
        this[_velocidade]++
        }
    freiar(){
        if (this[_velocidade] <= 0) return;
        this[_velocidade]--;
    }
}


/*
for (let i = 0; i <= 200; i++){
    c1.acelerar()
}*/
const c1 = new Carro('Fusca')
c1.velocidade = 99; //SETTER esta no sinal de atribuição
console.log(c1.velocidade)