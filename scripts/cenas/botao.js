class Botao{
  constructor(texto, eixoX, eixoY){
    this.texto = texto;
    this.eixoX = eixoX;
    this.eixoY = eixoY;
    this.botao = createButton(this.texto);
    this.botao.mousePressed(() => this._alteraCena());
    this.botao.addClass('botao-tela-inicial');
  }
  
  draw(){
    this.botao.position(this.eixoX, this.eixoY);
    this.botao.center('horizontal');
  }
  
  _alteraCena(){
    this.botao.remove();
    cenaAtual = 'jogo';
  }
}