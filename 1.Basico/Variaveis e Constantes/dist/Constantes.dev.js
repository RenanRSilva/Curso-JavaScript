"use strict";

/*
Luiz Otávio Miranda tem 30 anos, pesa 84 kg
tem 1.8 de altura e seu IMC é de 25.925925925925924
Luiz Otávio nasceu em 1980
*/
var nome = 'Luiz Otávio';
var sobrenome = 'Miranda';
var idade = 30;
var peso = 84;
var alturaEmM = 1.80; // Corrigido para metros (ao invés de cm)

var indiceMassaCorporal; // peso / (altura * altura)

var anoNascimento;
indiceMassaCorporal = peso / (alturaEmM * alturaEmM);
anoNascimento = 2019 - idade; // template strings

console.log("".concat(nome, " ").concat(sobrenome, " tem ").concat(idade, " anos, pesa ").concat(peso, " kg"));
console.log("tem ".concat(alturaEmM, " de altura e seu IMC \xE9 de ").concat(indiceMassaCorporal));
console.log("".concat(nome, " nasceu em ").concat(anoNascimento, "."));