class Pontuacao {
  constructor(){
    this.pontos = 0;
  }
  
  exibe() {
    textAlign(RIGHT);
    fill('#fff');
    textSize(50);
    text(parseInt(this.pontos), width - 30, 50)
  }

  adicionarPonto(){
    this.pontos+= 0.2
  }
  
  getPontos(){
    return parseInt(this.pontos);
  }
}