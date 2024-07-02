function test () {
    console.log('Hm')
}
class ControleRemoto {
    constructor (tv) {
        this.tv = tv;
        this.volume = 0;
        test();
    }
    // Método de instância
    aumentarVolume () {
        this.volume += 2;
    }
    diminuirVolume () {
        this.volume -= 2;
    }

    // Método estático, não tem acesso aos dados da instância
    static trocaPilha () {
        console.log('Ok, vou trocar')
    }
}

const controle1 = new ControleRemoto ('Samsung');
console.log(controle1)
ControleRemoto.trocaPilha() // => única forma de acessarmos o método estático.