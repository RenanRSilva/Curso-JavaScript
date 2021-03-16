//            new = função construtora
/*const tresHoras = 60 * 60 * 3 * 1000
const umDia = 60*60*24*1000
const data = new Date(0); // 01/01/1970 Timestamp Unix ou época unix
                         Ano/mes/dia/hor/min/seg/milsimo
const data = new Date(2019, 3, 20, 15, 14, 27, 999);
*/
/*
const data = new Date('2019-04-20 20:20:59')
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth() + 1); //Mes começa do 0
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('Dia Semana', data.getDay()); //0 - Domingo, 6 - Sabado
console.log(data.toString());
//console.log(Date.now());
*/
function zeroAEsquerda(num) {
    return num >=10 ? num : `0${num}`;
}

function  formatData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth()) +1;
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}/${min}/${seg}`
}

const data = new Date();
const dataBraisl = formatData(data);
console.log(dataBraisl);

