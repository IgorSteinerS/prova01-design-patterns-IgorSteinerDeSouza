class Bicicleta {
  move() {
    return "Pedalando a bicicleta no pátio da UNISATC";
  }
}

class Patinete {
  move() {
    return "Andando de patinete pelo estacionamento da UNISATC";
  }
}

class Onibus {
  move() {
    return "Andando de ônibus e chegando na UNISATC";
  }
}

class transportFactory {
  static types = {
    bicicleta: Bicicleta,
    patinete: Patinete,
    onibus: Onibus,
  }

  static createTransport(type) {
    const TransportClass = this.types[type];
    if (!TransportClass) {
      throw new Error("Tipo de transporte não definido")
    }
    return new TransportClass();

  }
}


function main() {
  const transportations = ["bicicleta", "patinete", "onibus"];
  try {
    transportations.forEach((type) => {
      const transport = transportFactory.createTransport(type);
      console.log(transport.move());
    });
  } catch (err) {
    console.error(err.message);
  }
}


main()