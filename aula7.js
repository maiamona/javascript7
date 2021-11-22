const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosPares = numeros.filter(function (valor) {
    return valor % 2 === 0;// return [ 50, 80, 2, 8, 22 ] (numeros pares do array)
}).map(function (valor) {
   return valor * 2;// return [ 100, 160, 4, 16, 44 ] (o dobro dos valores a cima)
}).reduce(function (acumulador, valor) {
    acumulador+= valor;
     
 return acumulador; // return '324' (a soma dos valores acima)
 
 }, 0);;

console.log(numerosPares);