function ninja(nome, quantidadeShuriken){
    this.nome = nome;
    this.shuriken = quantidadeShuriken;
    this.atirarShuriken = function() {
       console.log(`${this.nome} atirou uma shuriken!`);
    };
}

let ninja1 = new ninja("Sasuke");
ninja1.atirarShuriken();

