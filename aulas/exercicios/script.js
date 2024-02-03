//modifique a classe pessoa, adicionando a ela o parametro "anoNascimento"
//crie uma função que informa se a pessoa é adulta, deve receber um ano como parametro 
//e retornar verdadeiro ou falso


class Pessoa {
    constructor(nome, anoNascimento) {
        this.nome = nome;
        this.anoNascimento = anoNascimento;
    }

    seApresentar(pessoa) {

        console.log(`Olá, meu nome é ${this.nome}`)
        pessoa.conhecer(this)

    }

    conhecer(pessoa) {

        console.log(`PRAZER em conhecer ${pessoa.nome}. Meu nome é ${this.nome}`);

    }

    ehAdulta(ano) {
        
        let adulto =   ano - this.anoNascimento >= 18;
       let menorDeIdade =  ano - this.anoNascimento  >= 0 ;
        if (adulto) {
            return true;
        } else if (menorDeIdade) {
            return false;
        }

        alert( "Pessoa não era nascida" ) ;
    }

}

const pessoaA = new Pessoa("Luis", 2001);
const pessoaB = new Pessoa("Jorge", 2015);


pessoaA.seApresentar(pessoaB);

console.log(pessoaA.ehAdulta(2001))


