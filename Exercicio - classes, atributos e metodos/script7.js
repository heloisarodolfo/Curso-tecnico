class ContaBancaria {
    constructor(numero_conta, nome_titular, saldo=0) {
      this.numero_conta = numero_conta;
      this.nome_titular = nome_titular;
      this.saldo = saldo;
    }
  
    depositar(valor) {
      if (valor > 0) {
        this.saldo += valor;
        console.log(`Depósito de R$ ${valor} realizado com sucesso na conta ${this.numero_conta}. Saldo atual: R$ ${this.saldo}`);
      } else {
        console.log("Valor inválido para depósito.");
      }
    }
  
    sacar(valor) {
      if (valor > 0) {
        if (valor + 5 <= this.saldo) {
          this.saldo -= (valor + 5);
          console.log(`Saque de R$ ${valor} realizado com sucesso na conta ${this.numero_conta}. Saldo atual: R$ ${this.saldo}`);
        } else {
          console.log("Saldo insuficiente para realizar o saque.");
        }
      } else {
        console.log("Valor inválido para saque.");
      }
    }
  
    alterarNome(novo_nome) {
      this.nome_titular = novo_nome;
      console.log(`Nome do titular da conta ${this.numero_conta} alterado para ${novo_nome}.`);
    }
  
    exibirDados() {
      console.log(`Dados da conta:
        - Número da conta: ${this.numero_conta}
        - Nome do titular: ${this.nome_titular}
        - Saldo atual: R$ ${this.saldo}
      `);
    }
  }
  
  
  const conta = new ContaBancaria(123456, "HeloeDuda");
  conta.exibirDados(); 
  
  conta.depositar(200); 
  conta.sacar(100); 
  conta.alterarNome("Bruno"); 
  conta.exibirDados();
