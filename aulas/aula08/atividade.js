class Animal {
    constructor(altura, raça,peso ){
        this.altura=altura;
        this.raça=raça;
        this.peso=peso

    }
    nasce(){

    }
    cresce(){

    }

    reproduz(){

    }
    morre(){

    }
    //3 básicas
    //nasce, crece, reproduz, morre
}

class Mamifero  extends Animal{
    constructor(altura,raça,peso,mamas){
        super(altura,raça,peso)
        this.altura=altura;
        this.raça = raça;
        this.peso=peso;
        this.mamas= mamas;

    }
    //1 específica
    //amamentar
}

class Reptil extends Animal {
    constructor(altura,raça,peso,escamas){
        super(altura,raça,peso)
        this.altura=altura;
        this.raça = raça;
        this.peso
    }
    //1 específica
}