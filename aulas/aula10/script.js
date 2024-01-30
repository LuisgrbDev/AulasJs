
/* Crie uma classe Personagem. O personagem deverá ter:
nome, vida, ataque, defesa, vivo (ou morto), posicao (numero inteiro)
lembre de criar o método construtor */

class Personagem {
    constructor(nome, vida, ataque, defesa,  posicao, vivo = true) {
        this.nome = nome;
        this.vida = vida;
        this.ataque = ataque;
        this.defesa = defesa;
        this.vivo = vivo;
        this.posicao = posicao;
    }

    morrer() {
        if (this.vivo == false)
            return "morreu"
    }

    tomarDano(valorDano) {
        if(this.vivo=false){
            console.log (`${this.nome} Não pode receber dano`)
        }
        this.vida = this.vida - valorDano;
        if(this.vida <=0 ){
            this.vida = 0
        console.log(`${this.nome}, recebeu Dano:${valorDano} sua vida é:${this.vida = 0}. MORREUUU DOIDO`);
        } else {
       console.log( `${this.nome}, recebeu Dano:${valorDano} sua vida é:${this.vida}`);
    }
    }

    atacar(inimigo){
        if(inimigo.vivo && this.vivo){
            console.log(`${this.nome} atacou ${inimigo.nome} com força de ${this.ataque}`)
            inimigo.tomarDano(this.ataque);
            
        }else{
            console.log( `Não é possivel atacar, na condição de morto!`)
        }
    }
}

let personagem1 = new Personagem("Arthur", 100, 12, 100);
let personagem2 = new Personagem("Gendalf",110,14,5)


console.log(personagem1);
console.log(personagem2);
console.log(personagem1.atacar(personagem2))



