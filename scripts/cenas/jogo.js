class Jogo {
  constructor() {
    this.indiceAtual = 0;
    this.mapa = fita.mapa;
  }

  setup() {
    cenario = new Cenario(imagemCenario, 3);
    vida = new Vida(fita.configuracoes.vidaMaxima, fita.configuracoes.vidaInicial);
    pontuacao = new Pontuacao();

    personagem = new Personagem(imagemPersonagem, 0, 30, 110, 135, 220, 270, 16);
    const inimigo = new Inimigo(imagemInimigo, width - 52, 30, 52, 52, 104, 100, 28, 5);
    const inimigoTroll = new Inimigo(imagemInimigoTroll, width, 0, 200, 200, 400, 400, 28, 6);
    const inimigoVoador = new Inimigo(imagemInimigoVoador, width - 52, 200, 100, 75, 200, 150, 16, 5);

    inimigos.push(inimigo);
    inimigos.push(inimigoTroll);
    inimigos.push(inimigoVoador);
  }

  keyPressed(key) {
    if (key === 'ArrowUp') {
      personagem.pula();
    }
  }

  draw() {
    cenario.exibe();
    cenario.move();

    vida.draw()

    pontuacao.exibe();
    pontuacao.adicionarPonto();

    personagem.exibe()
    personagem.aplicaGravidade()
    
    const linhaAtual = this.mapa[this.indiceAtual];

    const inimigo = inimigos[linhaAtual.inimigo];
    const inimigoVisivel = inimigo.eixoX < -inimigo.tamNaTelaX;

    inimigo.velocidade = linhaAtual.velocidade;
    
    
    inimigo.exibe();
    inimigo.move();

    if (inimigoVisivel) {
      this.indiceAtual++;
      inimigo.reaparece();

      if (this.indiceAtual > this.mapa.length - 1) {
        this.indiceAtual = 0;
      }
    }

    if (personagem.estaColidindo(inimigo)) {
      vida.perdeVida();
      personagem.ficaInvencivel();

      if (vida.vidas === 0) {
        noLoop();
        //cenaAtual = 'gameOver';
        gameOver.draw()
      }

    }
  }
}