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

Parte 3: Crie a herança
    - Crie as classes Arqueiro, Guerreiro e Mago
    - Todas as 3 classes herdam de personagem

Alterações do Guerreiro:
    - Acrescente a propriedade "escudo" na classe Guerreiro.
    - A função tomarDano do Guerreiro deve proteger seus pontos de vida,
    abatendo o dano sofrido dos pontos do seu escudo.    
    
    - Acrescente a sobrescrita da função atacar, verificando a posição do inimigo
    - Se o inimigo estiver a mais de 1 de distância, o guerreiro não pode atacar.

Alterações do Arqueiro:
    - O arqueiro só pode atacar se a distancia dele para o oponente for maior do que 3.
    - O arqueiro tem um totalDeFlechas.
    - O arqueiro só pode atacar se o totla de flechas for maior que 0
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

    tomarDano(quantidade) {
        if (this.vivo = false) {
            console.log(`${this.nome} Não pode receber dano`)
        }
        this.vida = this.vida - quantidade;
        if (this.vida <= 0) {
            this.vida = 0
            console.log(`${this.nome}, recebeu Dano:${quantidade} sua vida é:${this.vida = 0}. MORREUUU DOIDO`);
        } else {
            console.log(`${this.nome}, recebeu Dano:${quantidade} sua vida é:${this.vida}`);
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

    recuperar(xp, receber = this) {
        receber.vida += xp;
        if (receber.vida > receber.vidaMaxima) {
            receber.vida = receber.vidaMaxima
            console.log(`${this.nome}  recuperou a vida de ${receber.nome} um total de ${xp}, ficando com ${receber.vida} de vida`);
        }
    }
}



class Guerreiro extends Personagem {
    constructor(nome, vida, ataque, defesa, posicao, vivo = true, escudo) {
        super(nome, vida, ataque, defesa, posicao, vivo = true)
        this.escudo = escudo;
    }

    tomarDano(quantidade) {
        console.log(`${this.nome}, recebeu Dano:${quantidade} seu escudo é:${this.escudo}`);
        if (quantidade > this.escudo) {
            quantidade = this.escudo - quantidade;
            console.log(`${this.nome} ficou com  seu escudo ficou com:${quantidade}`);
        } else {
            quantidade = 0
        }

        super.tomarDano(quantidade)

    }


    atacar(inimigo) {
        if (Math.abs(inimigo.posicao - this.posicao) < 2) {
            super.atacar(inimigo);
        } else {
            console.log(`${inimigo.nome} muito distante para ${this.nome} atacar.`)
        }

    }

}




class Arqueiro extends Personagem {
    constructor(nome, vida, ataque, defesa, posicao, vivo = true, flechas) {
        super(nome, vida, ataque, defesa, posicao, vivo = true);
        this.flechas = flechas;
    }

    atacar(inimigo) {

        if (Math.abs(inimigo.posicao - this.posicao > 3  && this.flechas >= 6)) {
            
            super.atacar(inimigo);

        } else if (inimigo.posicao - this.posicao < 3){
            console.log(`${inimigo.nome} muito perto para ${this.nome} atacar.`)
        } else if (this.flechas < 6){
            console.log(` ${this.nome} com total de flechas de ${this.flechas} impossivel atacar`)
        }
    }
}

class Mago extends Personagem {
    constructor(nome, vida, ataque, defesa, posicao, vivo = true, magia) {
        super(nome, vida, ataque, defesa, posicao, vivo = true);
        this.magia = magia;
    }
}



let personagem1 = new Guerreiro("Arthur", 100, 12, 90, 4, true, 15);
let personagem2 = new Mago("Gendalf", 100, 14, 55, 5, true, 90);
let personagem3 = new Arqueiro("legolas", 100, 14, 55, 5, true, 6);

console.log(personagem1);
console.log(personagem2);
// console.log(personagem2.atacar(personagem1))

console.log(personagem3.atacar(personagem1))

// console.log(personagem1.atacar(personagem2));
// console.log(personagem2.recuperar(1, personagem1));



