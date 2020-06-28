function setup() {
  createCanvas(windowWidth, windowHeight);
  
  telaInicial = new TelaInicial();
  
  botao = new Botao('Iniciar', width * 0.5, height * 0.8);
  
  jogo = new Jogo();
  jogo.setup();
  
  somDoJogo.loop()
  somDoJogo.setVolume(0.15)
  
  gameOver = new GameOver();
  
  cenas = {
    jogo,
    telaInicial,
    gameOver
  }
}

function keyPressed() {
  jogo.keyPressed(key);
  gameOver.keyPressed(key);
}

function draw() {  
  cenas[cenaAtual].draw();
}