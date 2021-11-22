const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
// let numerosPares = [];

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
    {nome: 'mona', idade: 100},
];

/**
 * soma todos os numeros (reduce)
 * retorne um array com os pares (Filter)
 * retorne um array com o dobro dos valores (Map)
 * retorne a pessoa mais velha
 */

const total = numeros.reduce(function (acumulador, valor, indice, array) {
   acumulador+= valor;
    // console.log(acumulador); 
return acumulador;

}, 0);// '0' é o valor inicial do parametro 'acumulador'

console.log(`soma de todos os numeros é: ${total}`);//soma de todos os valores do array

const valoresPares = numeros.reduce(function (acumulador, valor, indice, array) {

  if (valor % 2 === 0) {//par
//   if (valor % 2 !== 0) {//impar
//   if (valor % 8 === 0) {//multiplos de 8
    // numerosPares.push(valor);
    acumulador.push(valor);// 'reduce' evita criar array desnecessarios para fazer 'push' em condições 'if', basta utilizar o 'acumulador'
  } 
  return acumulador;

}, []);

console.log(valoresPares);


const dobroValores = numeros.reduce(function (acumulador, valor, indice, array) {

 
    acumulador.push(valor * 2);
  
  return acumulador;

}, []);

console.log(dobroValores);


const pessoaMaisVelha = pessoas.reduce(function (acumulador, obj, indice, array) {

if (acumulador.idade > obj.idade) {
    return acumulador
} return obj;

});

console.log(pessoaMaisVelha);