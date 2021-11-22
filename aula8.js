// 'forEach' so esta disponivel entre os arrays

const a1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let total = 0;
// for (const valor of a1) {
//     console.log(valor);
// }

a1.forEach(function (valor, indice, array) {
    // console.log(valor);//podemos utilizar isto
    // console.log(array[indice]);//ou isto
total += valor;
});

console.log(total);