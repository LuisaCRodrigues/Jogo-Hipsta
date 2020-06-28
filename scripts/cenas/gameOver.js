class GameOver {
  constructor() {}

  keyPressed(key) {
    if (key === 'Enter') {
      window.location.reload()
    }
  }

  draw() {
    cenario.exibe();

    background('rgba(0,0,0, 0.9)');

    textFont(fonteTitulo, 70);
    fill(255, 255, 255);
    textAlign(CENTER, CENTER);
    text('Game Over', width * 0.5, height * 0.4);

    textFont(fonteTexto, 20);
    text('Você fez ' + pontuacao.getPontos() + ' pontos!', width * 0.5, height * 0.6);

    textFont(fonteTexto, 17);
    text('Pressione ENTER para jogar de novo', width * 0.5, height * 0.7);
  }
}