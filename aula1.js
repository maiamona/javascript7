const nomes = ['Maiamona', 'Elias', 'Cazevo', 'Garcia']; //array literal
// const nomes = new Array('Maiamona', 'Elias', 'Cazevo', 'Garcia'); // utilizando o construtor (constructor),  funciona para String, Objetos, Funções, Números
const novo = [...nomes];//copia tudo que esta no array 'nomes' (não passa por referencia, ele copia mesmo)
//const novo = nomes; // aqui passamos por referencia
// delete nomes[2];

// console.log(nomes);

// nomes[2] = 'João';

// console.log(nomes);

//nomes.pop(); // 'pop();' elimina um item do array (pelo final)
//nomes.shift(); // 'shift();' elimina um item do array (pelo prencipio) e o indece '0 sera o indece '1'
//nomes.push(); // 'push();' adiciona um item do array (pelo final) 
//nomes.unshift(); // 'unshift();' adiciona um item do array (pelo prencipio) e o indece '0 sera o indece '1' 

// arrys são dados por referencia

// novo.pop();
//const novo2 = novo.slice(1, 3);// 'slice();' fatia o nosso array
//const novo2 = novo.slice(0, -1);// começo do '0' e tiro '-1'
//const novo2 = novo.slice(1, -1);// começo do '1' e tiro '-1'
// const novo2 = novo.slice(1, -2);
// console.log(nomes);
// console.log(novo2);


/*
const nome3 = 'Lucinda Mayso Cazevo Garcia';// convertendo uma string em um array
const nomes3 = nome3.split(' ');
console.log(nomes3);
*/

const nome3 = [ 'Lucinda', 'Mayso', 'Cazevo', 'Garcia' ];// transformando um array em uma string
const nomes3 = nome3.join(' '); // 'join();' une todos os elementos do array 'nomes3'
console.log(nomes3);