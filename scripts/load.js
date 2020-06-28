function preload() {
  imagemTelaInicial = loadImage('imagens/cenario/telaInicial.png');
  imagemCenario = loadImage('imagens/cenario/floresta.png');
  imagemPersonagem = loadImage('imagens/personagem/correndo.png');
  imagemInimigo = loadImage('imagens/inimigos/gotinha.png');
  imagemInimigoTroll = loadImage('imagens/inimigos/troll.png');
  imagemInimigoVoador = loadImage('imagens/inimigos/gotinha-voadora.png');
  imagemVida = loadImage('imagens/assets/coracao.png');
  
  frameRate(40);
  
  somDoJogo = loadSound('sons/trilha_jogo.mp3');
  somDoPulo = loadSound('sons/somPulo.mp3');
  
  fonteTelaInicial = loadFont('fontes/fonteTelaInicial.otf');
  fonteTitulo = loadFont('fontes/Piedra-Regular.ttf');
  fonteTexto = loadFont('fontes/Ubuntu-Regular.ttf');
  
  fita = loadJSON('fita/fita.json')
}