class TelaInicial{
  constructor(){
  }
  
  draw(){
    this._imagemDeFundo();
    this._texto();
    this._botao();
  }
  
  _imagemDeFundo(){
    image(imagemTelaInicial, 0, 0, width, height);
  }
  
  _texto(){
    textAlign(CENTER);
    textFont(fonteTelaInicial);
    textSize(50);
    text('As Aventuras de', width * 0.5, height * 0.2);
    textSize(80);
    text('Hipsta', width * 0.5, height * 0.35)
  }
  
  _botao(){
    botao.draw();
  }
}