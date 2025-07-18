// Shallow copy
const original = { nome: "Carlos", endereco: { cidade: "Recife" } };
const copiaRasa = { ...original };
copiaRasa.endereco.cidade = "Olinda"; // Altera o original!

console.log(original.endereco.cidade); // Olinda

// Deep copy (com JSON)
const original2 = { nome: "Carlos", endereco: { cidade: "Recife" } };
const copiaProfunda = JSON.parse(JSON.stringify(original2));
copiaProfunda.endereco.cidade = "Olinda";

console.log(original2.endereco.cidade); // Recife
