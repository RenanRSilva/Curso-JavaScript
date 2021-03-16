// ... rest operator, spread
//               0 1 2 3 4 5 6 7 8 9
/*const numeros = [1,2,3,4,5,6,7,8,9];
const [um, , três, , cinco, ...resto] = numeros;
console.log(um, três, cinco);
console.log(resto);*/

//                    0           1          2    
//                 0  1  2    0   1  2   0  1   2
const numeros = [ [1, 2, 3], [4, 5, 6], [7, 8, 9]]
console.log(numeros[1][2]);
