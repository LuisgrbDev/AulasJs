class Pessoa{ //superclasse
    constructor(nome,idade,peso){
        this.nome =nome;
        this.idade=idade;
        this.peso=peso;
    }
    andar(){
        console.log(nome + "falou!")
    }
    falar(){
        console.log(nome + "falou!")
    }
}
class Paciente extends Pessoa{//subclasse
constructor(nome,idade,peso,sintoma,numeroAtendimento,altura){
    super(nome,idade,peso)
    this.sintoma = sintoma;
    this.numeroAtendimento=numeroAtendimento;
    this.altura=altura;
}
}

class Medico extends Pessoa{
constructor(nome,idade,peso,especialidade){
    super(nome,idade,peso)
    this.especialidade=especialidade;
}
}