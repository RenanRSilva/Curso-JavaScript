function criaPessoa (nome, sobrenome, a, p){
    return{
        nome,
        sobrenome,
        
        //Getter
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        },
        
        // Setter
        set nomeCompleto(valor){
            valor = valor.split('');
            this.nome = valor.shift();
            this.sobrenome = valor.join('');
        },
        
        fala(assunto = 'falando sobre NADA.'){
            return `${this.nome} está ${assunto}.`;
        },
        altura: a, //Metodos
        peso: p,
        
        // Getter
        imc(){
            const indice = this.peso / (this.altura **2) //This é usado para selecionar os metodos peso e altura
            return indice.toFixed(2)
        }
    };
}
const p1 = criaPessoa('Luiz', 'Otávio', 1.8, 80);
console.log(p1.imc());
p1.nomeCompleto = 'Maria Oliveira Silva'
console.log(p1.nome)
console.log(p1.sobrenome)
console.log(p1.fala())