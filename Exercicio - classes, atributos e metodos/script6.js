const caminhao = {
    marca: "Hyundai",
    modelo: "FH",
    cor: "Azul escuro",
    ano: 2020,
    capacidadeCarga: "30 toneladas",
  };

  const { marca, modelo, cor, ano, capacidadeCarga } = caminhao;
    console.log(marca); // Volvo
    console.log(modelo); // FH
    console.log(cor); // vermelho
    console.log(ano); // 2022
    console.log(capacidadeCarga); // 30 toneladas

    function criarCaminhao(marca, modelo, cor, ano, capacidadeCarga) {
        let velocidade = 0;
      
        const caminhao = {
          getVelocidade: () => velocidade,
          acelerar: (valor) => {
            velocidade += valor;
          },
        };
      
        return caminhao;
      }
      
      const meuCaminhao = criarCaminhao("Volvo", "FH", "vermelho", 2022, "30 toneladas");
      
      console.log(meuCaminhao.getVelocidade()); // 0
      meuCaminhao.acelerar(50);
      console.log(meuCaminhao.getVelocidade()); // 50