function saudacao(nome) {
  return function(frase) {
    return `${frase}, ${nome}`;
  };
}

const paraJoao = saudacao("João");
console.log(paraJoao("Bom dia")); // Bom dia, João
