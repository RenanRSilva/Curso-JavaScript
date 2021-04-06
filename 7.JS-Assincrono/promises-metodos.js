function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min)
}


function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string'){
        reject(false); //se o parametro for diferente de um string rejeita e manda pro catch
            return;         //Return para parar a execução do código
        }

        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
}

//Promise.all Promise.race Promise.resolve Promise.reject
const promises = [
    'Primeiro Valor',
    esperaAi('Promise 1', 3000),
    esperaAi('Promise 2', 500),
    esperaAi('Promise 3', 1000),
    'Outro Valor'
];

Promise.race(promises)
    .then(function(valor){
        console.log(valor)        
    })
    .catch(function(erro){
        console.log(erro);
    });