// "Filter", map, reduce
// "Filter" - filtrao array

/**
 * retorne os numeros maiores que 10
 * retorne as pessoas que tem o nome com 5 letras ou mais
 * retorne as pessoas com mais de 50 anos
 * retorne as pessoas cujo nome termina com 'a'
 */
let item1 = document.querySelector('.item1');
let item2 = document.querySelector('.item2');
let item3 = document.querySelector('.item3');
let item4 = document.querySelector('.item4');
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
let num = [];
let pessoasMaior5 = [];
let pessoasTerminaA = [];
let nome = [];
let idade = [];
let cont = 0;
let cont2 = 0;
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];

for (let i = 0; i < numeros.length; i++) {
    const element = numeros[i];
    if (element > 10) {
        
        // console.log(element);
        num.push(element);
        
    }
}

for (const pessoa of pessoas) {
    // console.log(pessoa.nome.length);

    if (pessoa.nome.length > 5) {
        // console.log(pessoa.nome);
        pessoasMaior5.push(pessoa.nome);
        cont ++; 
        
    }

    if (pessoa.idade > 50) {
        console.log(`${pessoa.nome} tem ${pessoa.idade} anos`);
        nome.push(pessoa.nome);
        idade.push(pessoa.idade);
        cont2 ++;
        
    }

    // if (pessoa.nome[pessoa.nome.length - 1] === 'a'){
    if (pessoa.nome.toLowerCase().endsWith('a')){
        // console.log(pessoa.nome);
        pessoasTerminaA.push(pessoa.nome)
        
    }
}

let trans = num.join(', ');
let pessoa5 = pessoasMaior5.join(', ');
let pessoaA = pessoasTerminaA.join(', ');
console.log(`os numeros maiores que 10 são: ${trans}`);
console.log(`as pessoas que tem o nome com 5 letras ou mais são: ${cont} que são: ${pessoa5}`);
console.log(`as pessoas com mais de 50 anos são: ${cont2} que são: ${nome[0]} com ${idade[0]} anos e ${nome[1]} com ${idade[1]} anos`);
console.log(`as pessoas cujo nome termina com 'a' são: ${pessoaA}`);


// utilizando filters nos arrays, filter retorna 'true' ou 'false'


//function callbackFilter(valor, indice, array) {//o primeiro parametro recebe 'valor' do array, o segundo parametro recebe o 'indice' do array e o terceiro parametro recebe o 'array' completo
function callbackFilter(valor) {
    //   if (valor > 10) {
//       return true;
//   }  else{
//       return false;
//   } 
//  ou podemos utilizar (Boas preticas)
return valor > 10
}

const numerosFiltrados = numeros.filter(callbackFilter);
const numerosFiltrados2 = numeros.filter(valor => valor > 10);
// console.log(numerosFiltrados);
// console.log(numerosFiltrados2);

function criaElemento(classe, texto) {
    var span = document.createElement('span');
    span.classList.add(classe);
    span.textContent = texto;
    return span;
}

let trans2 = numerosFiltrados.join(', ');
item1.appendChild(criaElemento('item1-2', trans2));


const pessasComNomeGrande = pessoas.filter(function (obj) {
    // if (obj.nome.length > 5) {
    //     console.log(obj.nome);    
    // } 
    return obj.nome.length > 5;
});

let trans3 = `${cont} que são: ${pessoa5}`;
item2.appendChild(criaElemento('item1-2', trans3));
// let trans4 = pessasComNomeGrande.join(', ');
// console.log(trans4);


const pessoasComMaisDe50Anos = pessoas.filter(function (obj) {
    
    return obj.idade > 50;
});

let trans4 = `${cont2} que são: ${nome[0]} com ${idade[0]} anos e ${nome[1]} com ${idade[1]} anos`;
item3.appendChild(criaElemento('item1-2', trans4));



const pessoasQueTerminaComA = pessoas.filter(function (obj) {
    
    // return obj.nome[obj.nome.length - 1] === 'a';
    return obj.nome.toLowerCase().endsWith('a');
});

let trans5 = `${pessoaA}`;
// let trans6 = pessoasQueTerminaComA.join(', ');
item4.appendChild(criaElemento('item1-2', trans5));
// item4.appendChild(criaElemento('item1-2', trans6));