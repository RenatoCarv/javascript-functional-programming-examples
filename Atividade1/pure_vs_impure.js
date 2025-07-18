// Função pura: sempre retorna o mesmo resultado para os mesmos inputs, sem efeitos colaterais
function soma(a, b) {
  return a + b;
}

// Função impura: depende de uma variável externa (efeito colateral)
let contador = 0;
function incrementar() {
  contador++;
  return contador;
}
