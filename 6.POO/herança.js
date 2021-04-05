class Dispositivio{
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }
    
    ligar(){
        if (this.ligado) {
            console.log(this.nome + ' já ligado')
            return
        }
    this.ligado = true; 
    }
    
    desligar(){
        if (!this.ligado) {
            console.log(this.noem + ' Já desligado')
            return
        }
    }
}

class Tablet extends Dispositivio{
    constructor(nome, cor, modelo){
        super(nome);

        this.cor = cor;
        this.modelo = modelo;
    }
}

class Smartphone extends Dispositivio{ //Tablet e Smartphone são irmãos
    constructor(nome, temWifi){
        super(nome);
        this.temWifi
    }
    ligar(){
        console.log('Olha, você alterou o método ligar')
    }
    falaOi(){
        console.log('Oi')
    }
}
const s1 = new Smartphone ('Samsung', 'Preto', 'Galaxy S1')
console.log(s1)

const t1 = new Tablet ('iPad', 'True');
t1.ligar()
t1.ligar()