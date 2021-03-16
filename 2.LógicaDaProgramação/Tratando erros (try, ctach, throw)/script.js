/*try{
    console.log(naoExisto);
} catch(err){
    console.log('naoExisto não existe')
    console.log(err);
}*/

function  soma(x, y) {
    if(typeof x !== 'number' || 
    typeof y !== 'number'
    ){
        throw new Error ('x e y precisam ser números.')
    }
    return x + y;
}

try{
console.log(soma(1, 2));
console.log(soma ('1', 2));
} catch(e){
   // console.log(error);
 console.log('Alguma coisa mais amigavel para o usuario')
}

try{
   console.log('Abri meu arquivo');
   console.log('Manipulei o arquivo e gerou erro');
   console.log('Fechei o arquivo')    
 }catch (e){
    console.log('tratando o erro');
} finally{
    console.log('Eu sempre sou executado')
}

function retornaHora(data) {
    if (data && !(data instanceof Date)){
        throw new TypeError ('Esperando instância de Date.')   
}
if (!data){
   data = new Date();
}

return data.toLocaleTimeString('pt-BR', {
 hour: '2-digit',
 minute: '2-digit',
 seconds: '2-digit',
 hour12: false
});
}

try{
    const data = new Date ('01-01-1970 12:58:12');
    const hora = retornaHora();
console.log(hora);
} catch(e){
    //tratar erro
    console.log(e)
}finally{
    console.log("Tenha um bom dia")
}