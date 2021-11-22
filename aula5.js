

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];


function callbackFilter(valor) {

return valor > 10
}

const numerosFiltrados = numeros.filter(callbackFilter);
const numerosFiltrados2 = numeros.filter(valor => valor > 10);

// console.log(numerosFiltrados);
// console.log(numerosFiltrados2); 1ª condição


const pessasComNomeGrande = pessoas.filter(function (obj) {
    
    return obj.nome.length > 5;
});

// console.log(pessasComNomeGrande); 2ª condição


const pessoasComMaisDe50Anos = pessoas.filter(function (obj) {
    
    return obj.idade > 50;
});

// console.log(pessoasComMaisDe50Anos); 3ª condição



const pessoasQueTerminaComA = pessoas.filter(function (obj) {
    
    // return obj.nome[obj.nome.length - 1] === 'a';
    return obj.nome.toLowerCase().endsWith('a');
});

// console.log(pessoasQueTerminaComA); 4ª condição










// map - altera os valores do meu array

/**
 * 1-dobre os numeros
 * 2-para cada elemento:
 * -retorne apenas uma string com o nome da pessoa
 * -remova apenas a chave "nome" do objeto
 * -adicione uma chave id em cada objeto
 */

// const numerosEmDobro = numeros.map(function (valor, indice, array) {//o primeiro parametro recebe 'valor' do array, o segundo parametro recebe o 'indice' do array e o terceiro parametro recebe o 'array' completo
    const numerosEmDobro = numeros.map(function (valor) {
    // return `mona -> ${valor}`;
    // return `0`;
    return valor * 2; //multiplicar todos os valores do array por 2 
// return indice;

});

const numerosEmDobro2 = numeros.map(valor => valor * 2);

console.log(numerosEmDobro);
console.log(numerosEmDobro2);


const stringNomePessoa = pessoas.map(function (obj) {
   
    return obj.nome; //o objeto retorna um array com os nomes da pessoas


});

console.log(stringNomePessoa);

const removeChaveNome = pessoas.map(function (obj) {
   
//     delete obj.nome; 
// return obj;
return {idade: obj.idade};

});

const removeChaveNome2 = pessoas.map(obj => ({idade: obj.idade}));

console.log(removeChaveNome);
console.log('-------------------------');
console.log(removeChaveNome2);


const adicioneChaveId = pessoas.map(function (obj, indice) {
   
obj.id = indice;

// const newObj = { ...obj};//se queremos alterar o nosso array
// newObj.id = indice;//se queremos alterar o nosso array
// return newObj;//se queremos alterar o nosso array
return obj;

});
console.log('-------------------------');
console.log(adicioneChaveId);




