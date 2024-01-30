/*
Parte 1: Crie uma classe Personagem. O personagem deverá ter:
nome, vida, ataque, defesa, vivo (ou morto), posicao (numero inteiro)
lembre de criar o método construtor 

Parte 2: Crie a função/método morrer
    - propriedade "vivo" se torna false, e console.log("morreu")
Crie a função tomarDano
    - tomar dano recebe um parametro, que é o valor do dano
    - diminui os pontos de vida do personagem, com base no dano tomado
    - verifica, se o dano for maior que os pontos de vida, personagem morre
    - se os pontos de vida forem menor ou igual a zero, personagem morre
    - ao morrer, personagem continua com 0 pontos de vida
    - o personagem só pode tomar dano se estiver vivo

Crie a função atacar
    - atacar, recebe como parametro um personaem/inimigo
    - so pode atacar alguém com vida
    - exibe o console.log informando qual a força do ataque e inimigo atacado

Exercício:
    - Crie um limite de vida máxima para o personagem
    - Crie uma função de recuperar vida que recebe um total de pontos para recuperar
    - A recuperação de via não pode fazer o personaem ir além da vida máxima
*/

class Personagem {
    constructor(nome, vida, ataque, defesa, posicao, vivo = true) {
        this.nome = nome;
        this.vida = vida;
        this.ataque = ataque;
        this.defesa = defesa;
        this.vivo = vivo;
        this.posicao = posicao;
        this.vidaMaxima = vida;
    }

    morrer() {
        if (this.vivo == false)
            return "morreu"
    }

    tomarDano(valorDano) {
        if (this.vivo = false) {
            console.log(`${this.nome} Não pode receber dano`)
        }
        this.vida = this.vida - valorDano;
        if (this.vida <= 0) {
            this.vida = 0
            console.log(`${this.nome}, recebeu Dano:${valorDano} sua vida é:${this.vida = 0}. MORREUUU DOIDO`);
        } else {
            console.log(`${this.nome}, recebeu Dano:${valorDano} sua vida é:${this.vida}`);
        }
    }

    atacar(inimigo) {
        if (inimigo.vivo && this.vivo) {
            console.log(`${this.nome} atacou ${inimigo.nome} com força de ${this.ataque}`)
            inimigo.tomarDano(this.ataque);

        } else {
            console.log(`Não é possivel atacar, na condição de morto!`)
        }
    }

    recuperar(xp,receber = this){
        receber.vida += xp;
        if (receber.vida > receber.vidaMaxima) {
            receber.vida = receber.vidaMaxima
            console.log(`${this.nome}  recuperou a vida de ${receber.nome} um total de ${xp}, ficando com ${receber.vida} de vida`);
        } 
    }
}

let personagem1 = new Personagem("Arthur", 100, 12, 60, 1);
let personagem2 = new Personagem("Gendalf", 110, 14, 55, 1);


console.log(personagem1);
console.log(personagem2);
console.log(personagem1.atacar(personagem2));
console.log(personagem2.recuperar(1, personagem1));



