class Animacao {
  constructor(imagem, eixoX, variacaoY, tamNaTelaX, tamNaTelaY, tamImgX, tamImgY, numImgs) {
    this.imagem = imagem;
    this.eixoX = eixoX;
    this.tamNaTelaX = tamNaTelaX;
    this.tamNaTelaY = tamNaTelaY;
    this.variacaoY = variacaoY;
    this.eixoY = height - this.tamNaTelaY - variacaoY;
    this.tamImgX = tamImgX;
    this.tamImgY = tamImgY;
    this.numImgs = numImgs;
    
    this.frameAtual = 0;
  }
  
  exibe(){
    let matrizX= this.frameAtual % 4 * this.tamImgX;
    let matrizY = Math.floor(this.frameAtual / 4) * this.tamImgY;
    
    image(this.imagem, this.eixoX,  this.eixoY, this.tamNaTelaX, this.tamNaTelaY, matrizX, matrizY, this.tamImgX, this.tamImgY);

    
    this.anima();
  }
  
  anima() {
    this.frameAtual++;
    
    if(this.frameAtual >= this.numImgs - 1) {
       this.frameAtual = 0;
    }
  }
}