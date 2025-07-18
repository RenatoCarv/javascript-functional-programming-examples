function processarUsuario(nome, callback) {
  console.log("Processando usuário...");
  callback(nome);
}

function mostrarSaudacao(nome) {
  console.log(`Olá, ${nome}!`);
}

processarUsuario("Maria", mostrarSaudacao);
