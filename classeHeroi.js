class heroi {
    nome;
    idade;
    tipo;

    constructor(nome,idade,tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    classificarAtaque() {
        if (this.tipo == "guerreiro" || this.tipo == "Guerreiro" || this.tipo == "GUERREIRO") {
            return (`O ${this.tipo} atacou usando espada!`);
        } else if (this.tipo == "mago" || this.tipo == "Mago" || this.tipo == "MAGO") {
            return (`O ${this.tipo} atacou usando magia!`);
        } else if (this.tipo == "monge" || this.tipo == "Monge" || this.tipo == "MONGE") {
            return (`O ${this.tipo} atacou usando artes marciais!`);
        } else if (this.tipo == "ninja" || this.tipo == "Ninja" || this.tipo == "NINJA") {
            return (`O ${this.tipo} atacou usando shuriken!`);
        } else {
            return (`Classe ainda não definida.`)
        };  
    };
};

const jose = new heroi("José", 25, "guerreiro");
const arthur = new heroi("Arthur", 19, "mago");
const ana = new heroi("Ana", 21, "Ninja");
const aang = new heroi("Aang", 14, "MONGE")

console.log(jose.classificarAtaque());
console.log(arthur.classificarAtaque());
console.log(ana.classificarAtaque());
console.log(aang.classificarAtaque());
