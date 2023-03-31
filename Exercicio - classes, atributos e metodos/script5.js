// define a parte que se repete nas propriedades dos objetos em uma variável
let propriedadeCompartilhada = "idade";

// criação dos dois objetos
let objeto1 = {
  nome: "Dudinha",
  [propriedadeCompartilhada]: 20
};

let objeto2 = {
  nome: "Heloisa",
  [propriedadeCompartilhada]: 10
};

// exibe as propriedades dos objetos criados
console.log(objeto1.nome); // Dudinha
console.log(objeto1.idade); // 20

console.log(objeto2.nome); // Heloisa
console.log(objeto2.idade); // 10