class Personagem extends Animacao{
  constructor(imagem, eixoX, variacaoY, tamNaTelaX, tamNaTelaY, tamImgX, tamImgY, numImgs) {
    super(imagem, eixoX, variacaoY, tamNaTelaX, tamNaTelaY, tamImgX, tamImgY, numImgs);
    
    this.yInicial = height - tamNaTelaY -30;
    this.eixoY = this.yInicial;
    
    this.velocidadeDoPulo = 0;    
    this.gravidade = 6;
    this.qntPulos = 2;
    this.alturaDoPulo = -55;
    this.invencivel = false;
  }
  
  pula() {
    if (this.qntPulos > 0) {
      this.velocidadeDoPulo = this.alturaDoPulo;
      this.qntPulos--;
      somDoPulo.play();
      somDoPulo.setVolume(0.5);
    }
  }
  
  aplicaGravidade() {
    this.eixoY = this.eixoY + this.velocidadeDoPulo;
    this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade;
    
    if(this.eixoY > this.yInicial) {
      this.eixoY = this.yInicial;
      this.qntPulos = 2;
    }
  }
  
  ficaInvencivel(){
    this.invencivel = true;
    setTimeout(() => {
      this.invencivel = false;
    }, 2000);
  }
  
  estaColidindo(inimigo){
    if(this.invencivel){
      return false;
    }
    
    const precisao = .7;
    const colisao = collideRectRect(
      this.eixoX, 
      this.eixoY, 
      this.tamNaTelaX * precisao, 
      this.tamNaTelaY * precisao, 
      inimigo.eixoX, 
      inimigo.eixoY, 
      inimigo.tamNaTelaX * precisao, 
      inimigo.tamNaTelaY * precisao
    )
    
    return colisao;
  }
}