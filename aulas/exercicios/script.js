class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }

    seApresentar(pessoa) {

        console.log(`Olá, meu nome é ${this.nome}`)
        pessoa.conhecer(this)

    }

    conhecer(pessoa) {

        console.log(`PRAZER em conhecer ${pessoa.nome}. Meu nome é ${this.nome}`);

    }


}

const pessoaA = new Pessoa("Luis");
const pessoaB = new Pessoa("Jorge");

pessoaA.seApresentar(pessoaB);


