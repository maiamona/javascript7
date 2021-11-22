const nomes = ['Maiamona', 'Elias', 'Cazevo', 'Garcia'];
const nomes2 = ['Maiamona', 'Elias', 'Cazevo', 'Garcia'];
const novo = [...nomes];
//(argumentos ou parametros do 'splice(indice, delete, elem1, elem2, elem3, ...)'): 1-qual o indece que eu quero comesar a mexer, 2-quantos elementos eu quero remover do meu array(apartir da direita do array completo), 3-sera os elmentos que serao adicionados apartir do '1-indice que eu quero começar a mexer', ex. [ 'Maiamona', 'Elias', "Luis", 'Cazevo', 'Garcia' ] 

var splice = nomes.splice(2, 2, 'Luis', 'otavio');// 'splice()' retorna um array
 var pop = novo.pop();// 'pop()' retorna o proprio nome
// var splice = nomes.splice(-2, Number.MAX_VALUE);// 'Number.MAX_VALUE' remove do numero dele ate ao numero maximo (ate ao mais infinito se ela tiver...)
var pop2 = nomes2.splice(-1, 1);//pop


 console.log(splice);
 console.log(nomes);
 console.log(pop);
 console.log(pop2);
 console.log(novo);
 //console.log(Number.MAX_VALUE);// 'Number.MAX_VALUE' - é o maior numero que pode existir em javascript

//  parametros positivos do nosso array : const nomes = ['0', '1', '2', '3'];
//  parametros negativos do nosso array : const nomes = ['-4', '-3', '-2', '-1'];

//nomes.splice(0, 1);// simula o comportamento de um 'shift();'

//nomes.splice(nomes.length, 0, 'Luiz');// simula o comportamento de um 'nomes.push('Luiz');'

//nomes.splice(0, 0, 'Luiz', 'mota', ...);// simula o comportamento de um 'unshift();'