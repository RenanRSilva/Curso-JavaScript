function ValidaCpf(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
    enumerable: true,
        get: function(){ 
        return cpfEnviado.replace(/\D+/g, '');
    }
    });
}

ValidaCpf.prototype.valida = function() {
    if (typeof this.cpfLimpo === 'undefined') return false;
    if(this.cpfLimpo.lenght !== 11) return false;

    const cpfParcial = this.cpfLimpo.slice(0, -2);
    const digito1 = this.criaDigito(cpfParcial)


    return true;
};

ValidaCpf.prototype.criaDigito = function(cpfParcial){
    const cpfArray = Array.from(cpfParcial)
    
    const regressivo = cpfArray.lenght
};

const cpf = new ValidaCpf('705.484.450-52')
cpf.valida()