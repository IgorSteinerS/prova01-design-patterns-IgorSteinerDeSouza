class Lanche {
  constructor() {
    this.bread = false;
    this.meat = false;
    this.cheese = false;
    this.salad = false;
    this.sauce = false;
  }

  show() {
    console.log(`
      Lanche:
      pao: ${this.bread ? "Sim" : "Não" }
      carne: ${this.meat ? "Sim" : "Não" }
      queijo: ${this.cheese ? "Sim" : "Não" }
      salada: ${this.salad ? "Sim" : "Não" }
      molho: ${this.sauce ? "Sim" : "Não" }
    `);
  }
}

class LancheBuilder{
  constructor() {
    this.lanche = new Lanche();

  }

  setBread(bread) {
    this.lanche.bread = true
    return this;
  }
  setMeat(meat) {
    this.lanche.meat = true
    return this;
  }
  setCheese(cheese) {
    this.lanche.cheese = true
    return this;
  }
  setSalad(salad) {
    this.lanche.salad = true
    return this;
  }
  setSauce(sauce) {
    this.lanche.sauce = true
    return this;
  }

  build() {
    return this.lanche;
  }
}

class LancheDirector {
  static lancheSimples() {
    return new LancheBuilder()
      .setBread()
      .setMeat()
      .build();
  }

  static lancheCompleto() {
    return new LancheBuilder()
      .setBread()
      .setMeat()
      .setCheese()
      .setSalad()
      .setSauce()
      .build();
  }
}


const simples = LancheDirector.lancheSimples();
const completo = LancheDirector.lancheCompleto();

simples.show();
completo.show();
