function recursiva (max){  //Função que se chama de volta
    if (max >= 10) return;
    max++;
    console.log(max);
    recursiva(max) 
}
recursiva(0);