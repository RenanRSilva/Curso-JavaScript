function CriaHoraSegundos(segundos) {
    const data = new Date(segundos * 1000) //Javascript recebe em milsimos de segundo
    return data.toLocaleTimeString('pt-BR',{
    hour12: false,
    timeZone: GMT
});
}
const relogio = document.querySelector('.relogio')
const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const zerar = document.querySelector('.zerar')
let segundos = 0
let timer

function inciaRelogio(){
    timer = setInterval(function() {
        segundos++;
        relogio.innerHTML = CriaHoraSegundos(segundos);
    }, 1000)
}

document.addEventListener('click', function(e){
    const el = e.target;

    if(el.classList.contains('zerar')){
        console.log('Voce clicou em zerar');
        clearInterval(timer)
        relogio.innerHTML = '00:00:00';
        segundos = 0;
        relogio.classList.remove(pausado)
    }
    if(el.classList.contains('iniciar')){
        console.log('Voce clicou em iniciar');
        inciaRelogio()
        relogio.classList.remove(pausado)
    }
    if(el.classList.contains('pausar')){
        console.log('Voce clicou em zerar');
        clearInterval(timer)
        relogio.classList.add(pausado)
    }
})