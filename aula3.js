const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
const nome2 = ['Bastos', 'Jose']
const a3 = a1.concat(a2, [7, 8, 9], ['Luiz', 'mona'], nome2);//concatenamos os arrays
const a4 = [...a1, ...a2, ...[7, 8, 9], ...['Luiz', 'mona'], ...nome2];

console.log(a3);
console.log(a4);

// ... rest => resto do array, ... spread => espalha o array, faz uma copia do array