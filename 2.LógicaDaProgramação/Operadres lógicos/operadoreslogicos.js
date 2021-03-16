/*
OPERADORES LÓGICOS
&& -> AND -> E ----> Todas as expressões precisam ser verdadeiras para retornar true
|| -> OR ->  Ou --> Ao menos uma precisa ser verdadeira
! -> not -> não

FALSY
false
0
'' "" ``
null
undefined
Nan

*/

const expressaoAnd = true && true && true && true;
const expressaoOr = true || false;
console.log(expressaoOr)

console.log("luiz" && "Maria") //Retorna ou ultimo valor

console.log(0 || false || null || "luiz otavio" || true) //Retorna o primeiro valor true
 const a = null
 const b = 0
 const c = false
 const d = false
 const e = NaN
 
 console.log(a || b || c || d || e); //Retorna o ultimo valor falso
