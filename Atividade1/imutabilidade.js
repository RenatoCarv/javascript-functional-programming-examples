const pessoa = { nome: "Ana", idade: 30 };

// Cria um novo objeto sem alterar o original
const novaPessoa = { ...pessoa, idade: 31 };

console.log(pessoa);      // { nome: "Ana", idade: 30 }
console.log(novaPessoa);  // { nome: "Ana", idade: 31 }
