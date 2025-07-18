// Função normal
function multiplicar(a, b) {
  return a * b;
}

// Currying
function curriedMultiplicar(a) {
  return function(b) {
    return a * b;
  };
}

const dobrar = curriedMultiplicar(2);
console.log(dobrar(5)); // 10
