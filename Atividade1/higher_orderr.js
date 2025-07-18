// Recebe uma função como argumento
function aplicarOperacao(arr, operacao) {
  return arr.map(operacao);
}

const numeros = [1, 2, 3, 4];
const dobrados = aplicarOperacao(numeros, x => x * 2);
console.log(dobrados); // [2, 4, 6, 8]
