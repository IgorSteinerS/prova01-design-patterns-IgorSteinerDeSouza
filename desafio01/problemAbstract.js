
class LightButton {
  render() {
    return "Botão branco criado";
  }
}
class DarkButton {
  render() {
    return "Botão preto criado";
  }
}

class LightWindow {
  render() {
    return "Janela clara aberta";
  }
}
class DarkWindow {
  render() {
    return "Janela escura aberta";
  }
}

class ThemeFactory {
  createButton() {
    throw new Error("Método abstrato deve ser implementado");
  }
  createWindow() {
    throw new Error("Método abstrato deve ser implementado");
  }
}

class LightFactory extends ThemeFactory {
  createButton() {
    return new LightButton();
  }
  createWindow() {
    return new LightWindow();
  }
}

class DarkFactory extends ThemeFactory {
  createButton() {
    return new DarkButton();
  }
  createWindow() {
    return new DarkWindow();
  }
}

const factories = {
  light: new LightFactory(),
  dark: new DarkFactory(),
};

class Application {
  constructor(factory) {
    this.button = factory.createButton();
    this.window = factory.createWindow();
  }

  renderUI() {
    console.log(this.button.render());
    console.log(this.window.render());
  }
}

function main() {
  const themes = ["light", "dark"];

  themes.forEach((theme) => {
    console.log(`\n>> Tema selecionado: ${theme} <<`);
    const factory = factories[theme];
    if (!factory) throw new Error("Tema desconhecido");

    const app = new Application(factory);
    app.renderUI();
  });
}

main();