class Inimigo extends Animacao{
  constructor(imagem, eixoX, variacaoY, tamNaTelaX, tamNaTelaY, tamImgX, tamImgY, numImgs, velocidade) {
  super(imagem, eixoX,variacaoY, tamNaTelaX, tamNaTelaY, tamImgX, tamImgY, numImgs);
    
    this.velocidade = velocidade;
    this.eixoX = width;
  }
  
  move() {
    this.eixoX = this.eixoX - this.velocidade;
  }
  
  reaparece(){
    this.eixoX = width;
  }
}