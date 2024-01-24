class Conta {
    constructor(numero, saldo){
        this.numero = numero;
        this.saldo = saldo;
    }

    sacarValor(){

    }

    depositar(){

    }
}

console.log("funciona")

class ContaCorrente extends Conta{
    constructor(numero,saldo,limiteChequeEspecial){
        super(numero, saldo);
}
}

class ContaPoupanca extends Conta{
    constructor(numero,saldo,taxaRendimento){
        super(numero,saldo);
    }

    Sacar(){

    }
}