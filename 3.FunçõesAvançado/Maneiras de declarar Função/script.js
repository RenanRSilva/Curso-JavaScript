//First class object
//Declaração de função (Function hoisting: Leva a função pro topo) 
function falaoi() {
    console.log('oi')
}

//Function expression ( Constante recebe função como dado)
const souUmDado = function name(params) {
    console.log('Sou um dado')
}
souUmDado()

//Arrow Function
const arrowFunction = () => {
    console.log('Sou uma arrow function')
}

//Dentro de um objeto
 const obj = {
     falar: function (params) {
         console.log('estou falando')
     }
 }
